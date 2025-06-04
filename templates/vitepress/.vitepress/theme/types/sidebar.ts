import type { DefaultTheme } from "vitepress";

export interface SidebarConfig {
	[key: string]: {
		logo?: string;
		items: DefaultTheme.SidebarItem[];
	};
}
