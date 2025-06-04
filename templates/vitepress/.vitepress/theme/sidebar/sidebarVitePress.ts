import type { DefaultTheme } from "vitepress";

export default function sidebarVitePress(): DefaultTheme.SidebarItem[] {
	return [
		{ text: "Overview", link: "/vitepress/overview" },
		{
			text: "Getting Started",
			base: "/vitepress/getting-started",
			items: [
				{ text: "Installation", link: "/installation" },
				{ text: "Basic Configuration", link: "/basic-configuration" },
			],
		},
		{
			text: "Customization",
			base: "/vitepress/customization",
			items: [
				{ text: "Theme Configuration", link: "/theme-configuration" },
				{ text: "Layouts", link: "/layouts" },
				{ text: "Styling", link: "/styling" },
				{ text: "Sidebar", link: "/sidebar" },
			],
		},
		{
			text: "Advanced",
			base: "/vitepress/advanced",
			items: [
				{ text: "Markdown Extensions", link: "/markdown-extensions" },
				{ text: "Deployment", link: "/deployment" },
				{ text: "SEO", link: "/seo" },
			],
		},
	];
}
