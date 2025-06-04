import type { DefaultTheme } from "vitepress";

export const navbar: DefaultTheme.Config["nav"] = [
	{ text: "VitePress", link: "/vitepress" },
	{ text: "React", link: "/react" },
	{ text: "Vue", link: "/vue" },
	{ text: "Next", link: "/next" },
	{ text: "Nuxt", link: "/nuxt" },
	{ text: "CLI", link: "/cli" },
	/*
	{
		text: "Resources",
		items: [
			{ text: "FAQs", link: "/faqs" },
			{ text: "Components", link: "/admin/components" },
			{ text: "Customers", link: "/admin/customers" },
		],
	}*/
];
