import {
	defineConfig,
	presetIcons,
	presetWind4,
	transformerVariantGroup,
} from "unocss";
import { presetScrollbar } from "unocss-preset-scrollbar";

export default defineConfig({
	presets: [
		presetWind4(),
		presetScrollbar(),
		presetIcons({
			extraProperties: {
				display: "inline-block",
				"vertical-align": "middle",
			},
			collections: {
				mdi: () =>
					import("@iconify-json/mdi/icons.json").then((i) => i.default),
			},
		}),
	],
	transformers: [transformerVariantGroup()],
	theme: {
		colors: {
			background: {
				light: "var(--vp-c-bg)",
				dark: "var(--vp-c-bg-soft)",
			},
			brand: {
				light: "var(--vp-c-indigo-1)",
				dark: "var(--vp-c-indigo-2)",
			},
			text: {
				light: "var(--vp-c-text-1)",
				dark: "var(--vp-c-text-2)",
			},
			alert: {
				light: "var(--vp-c-yellow-1)",
				dark: "var(--vp-c-yellow-2)",
			},
			error: {
				light: "var(--vp-c-red-1)",
				dark: "var(--vp-c-red-2)",
			},
			success: {
				light: "var(--vp-c-green-1)",
				dark: "var(--vp-c-green-2)",
			},
		},
	},
	shortcuts: [
		// Buttons
		["text", "text-text-light dark:text-text-dark"],
		[
			"btn",
			"py-2 px-4 font-semibold rounded-lg shadow-md bg-brand-base text-white hover:(bg-brand-light)",
		],
		[
			"btn-secondary",
			"py-2 px-4 font-semibold rounded-lg shadow-md bg-text-base text-white hover:(bg-text-light)",
		],
		[
			"btn-outline",
			"py-2 px-4 font-semibold rounded-lg border border-brand-base text-brand-base hover:(bg-brand-base/10)",
		],

		// Form inputs
		[
			"form-control",
			"px-4 py-2 border border-text-base rounded-lg focus:(outline-none ring-2 ring-brand-base border-transparent) dark:(bg-background-dark border-text-base text-white)",
		],
		["input", "form-control"],
		["textarea", "form-control resize-none"],
		["select", "form-control appearance-none"],

		// Grid layouts
		["grid-3-col", "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"],
		[
			"grid-4-col",
			"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4",
		],
		[
			"grid-6-col",
			"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3",
		],

		// Cards
		[
			"card",
			"bg-background-dark flex flex-col items-center p-3 md:p-4 gap-3 rounded-md shadow-sm transition-all hover:(shadow-md) dark:(bg-text-base text-white)",
		],
	],
});
