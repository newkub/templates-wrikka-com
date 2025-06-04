// https://vitepress.dev/guide/custom-theme

import "@shikijs/vitepress-twoslash/style.css";
import type { Theme } from "vitepress";
import "vitepress-plugin-sandpack/dist/style.css";
import { clerkPlugin } from "@clerk/vue";
import TwoslashFloatingVue from "@shikijs/vitepress-twoslash/client";
import DefaultTheme from "vitepress/theme";
import CustomLayout from "./components/custom-layout/CustomLayout.vue";
import { createMediumZoomProvider } from "./composables/useMediumZoom";
import "./assets/index.css";
import "virtual:uno.css";
import { Sandbox } from "vitepress-plugin-sandpack";
import "vitepress-plugin-sandpack/dist/style.css";
import "uno.css";
import "virtual:group-icons.css";

const CLERK_PUBLIC_KEY = import.meta.env.VITE_PUBLIC_CLERK_PUBLISHABLE_KEY;

if (!CLERK_PUBLIC_KEY) {
	throw new Error("Missing Clerk Publishable Key");
}

export default {
	extends: DefaultTheme,
	Layout: CustomLayout,
	enhanceApp({ app, router }) {
		//ctx.app.component('Sandbox', Sandbox);
		app.use(TwoslashFloatingVue, {
			cleanup: true, // Enable automatic cleanup
			delay: 300, // Add a small delay before disposal
			onBeforeDispose: () => {
				// Validate instance before disposal
				return true;
			},
		});
		app.component("Sandbox", Sandbox);
		createMediumZoomProvider(app, router);
		app.use(clerkPlugin, {
			publishableKey: CLERK_PUBLIC_KEY,
		});
	},
} satisfies Theme;
