import type { DefaultTheme } from "vitepress";

export default function sidebarCLI(): DefaultTheme.SidebarItem[] {
	return [
		{ text: "Overview", link: "/cli/overview" },
		{
			text: "Getting Started",
			base: "/cli/getting-started",
			items: [
				{ text: "Installation", link: "/installation" },
				{ text: "Basic Usage", link: "/basic-usage" },
				{ text: "Configuration", link: "/configuration" },
			],
		},
		{
			text: "Core Concepts",
			base: "/cli/core-concepts",
			items: [
				{ text: "Command Structure", link: "/command-structure" },
				{ text: "Arguments & Options", link: "/arguments-options" },
				{ text: "Interactive Prompts", link: "/interactive-prompts" },
			],
		},
		{
			text: "Advanced Topics",
			base: "/cli/advanced",
			items: [
				{ text: "Custom Commands", link: "/custom-commands" },
				{ text: "Error Handling", link: "/error-handling" },
				{ text: "Testing CLI Apps", link: "/testing" },
				{ text: "Distribution", link: "/distribution" },
			],
		},
	];
}
