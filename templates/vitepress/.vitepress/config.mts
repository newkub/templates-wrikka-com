import container from "markdown-it-container";
import { type DefaultTheme, defineConfig } from "vitepress";
import { groupIconMdPlugin } from "vitepress-plugin-group-icons";
import { withMermaid } from "vitepress-plugin-mermaid";
import { renderSandbox } from "vitepress-plugin-sandpack";
import { navbar } from "./theme/config/navbar";
import { sidebar } from "./theme/config/sidebar";

import { isExternalLink } from "./theme/markdown-plugins/external-links";
import { hoverPreviewPlugin } from "./theme/markdown-plugins/hoverPreviewPlugin";
import { kbdPlugin } from "./theme/markdown-plugins/markdown-kbd";

export default withMermaid(
	defineConfig({
		sitemap: {
			hostname: "https://learn.wrikka.com",
		},
		appearance: "dark",
		title: "Wrikka Learn",
		titleTemplate: "Wrikka Learn",
		description: "Wrikka Learn",
		head: [
			[
				"link",
				{ rel: "icon", href: "/logo/logo.webp", type: "image/webp+xml" },
			],
			["meta", { name: "author", content: "wrikka" }],
			["meta", { property: "og:type", content: "/og.webp" }],
			["meta", { name: "og:title", content: "learn.wrikka.com" }],
			[
				"meta",
				{ name: "og:description", content: "คอร์สเรียนทั้งหมด: แชร์สิ่งที่รียนรู้ในทุกๆวัน" },
			],
			[
				"script",
				{
					src: "//code.tidio.co/f4xtk1yekdnq5ynr6c51geiws1cmrhod.js",
				},
			],
		],
		lang: "th-TH",
		base: "/",
		cleanUrls: true,
		srcDir: ".",
		srcExclude: ["**/README.md", "**/TODO.md"],
		ignoreDeadLinks: true,
		lastUpdated: true,
		themeConfig: {
			outline: {
				level: [2, 3],
				label: "On this page",
			},
			logo: "/logo/logo.webp",
			search: {
				provider: "local",
				options: {
					detailedView: true,
					miniSearch: {
						options: {
							extractField: (document, fieldName) => {
								if (fieldName === "content") {
									return document.text || "";
								}
								return document[fieldName];
							},
						},
					},
				},
			},

			/*
			footer: {
				message: "Released under the MIT License",
				copyright: "Copyright 2024-PRESENT Wrikka Learn",
			},*/
			socialLinks: [
				/**
				{
					icon: 'facebook',
					link: 'https://www.facebook.com/webdev.sharex',
				},
				//{ icon: "github", link: "https://github.com/wrikka" },
				{
					icon: {
						svg: `<svg xmlns="http://www.w3.org/2000/webp" width="1.2em" height="1.2em" viewBox="0 0 48 48"><path fill="#e8eaf6" d="M42 39H6V23L24 6l18 17z"/><path fill="#c5cae9" d="m39 21l-5-5V9h5zM6 39h36v5H6z"/><path fill="#b71c1c" d="M24 4.3L4 22.9l2 2.2L24 8.4l18 16.7l2-2.2z"/><path fill="#d84315" d="M18 28h12v16H18z"/><path fill="#01579b" d="M21 17h6v6h-6z"/><path fill="#ff8a65" d="M27.5 35.5c-.3 0-.5.2-.5.5v2c0 .3.2.5.5.5s.5-.2.5-.5v-2c0-.3-.2-.5-.5-.5"/></svg>`,
					},
					link: "https://wrikka.com",
				},*/
			],
			nav: navbar,
			sidebar: sidebar as DefaultTheme.Sidebar,
		},
		markdown: {
			math: true,
			image: {
				lazyLoading: true,
			},

			/*
			codeTransformers: [
				transformerTwoslash(),
				transformerTwoslash({
					typesCache: createFileSystemTypesCache()
				})
			],*/

			config: (md) => {
				md.use(groupIconMdPlugin);
				md.use(hoverPreviewPlugin);
				md.use(isExternalLink);
				md.use(kbdPlugin);
				md.use(container, "sandbox", {
					render(tokens, idx) {
						return renderSandbox(tokens, idx, "sandbox");
					},
				});
				md.use(async () => {
					const mermaid = await import("mermaid");
					mermaid.default.initialize({
						startOnLoad: true,
						theme: "default",
						securityLevel: "loose",
					});
				});
			},
		},
	}),
);
