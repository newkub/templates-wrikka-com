import type { DefaultTheme } from "vitepress";

export default function (): DefaultTheme.SidebarItem[] {
	return [
		{ text: "Overview", link: "/next/overview" },
		{
			text: "Introduction",
			base: "/next/introduction",
			items: [
				{ text: "Why", link: "/why" },
				{ text: "Principles", link: "/principles" },
			],
		},
		{
			text: "Get Started",
			base: "/next/get-started",
			items: [
				{ text: "Quick Start", link: "/quick-start" },
				{ text: "File Conventions", link: "/file-conventions" },
			],
		},
		{
			text: "Guide",
			base: "/next/guide",
			items: [
				{ text: "Overview", link: "/overview" },
				{ text: "Data Fetching", link: "/data-fetching" },
				{ text: "Routing", link: "/routing" },
				{ text: "SEO and Metadata", link: "/seo" },
				{ text: "Authentication", link: "/authentication" },
				{ text: "Rendering", link: "/rendering" },
				{ text: "Typescript", link: "/typescript" },
				{ text: "Database", link: "/database" },
				{ text: "API", link: "/api" },
				{ text: "Analytics", link: "/analytics" },
				{ text: "Asset", link: "/asset" },
				{ text: "Deployment", link: "/deployment" },
				{ text: "State Management", link: "/state-management" },
				{ text: "Styling", link: "/styling" },
			],
		},
	];
}
