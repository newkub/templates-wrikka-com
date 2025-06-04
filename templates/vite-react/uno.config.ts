import {
	defineConfig,
	presetIcons,
	presetWind4,
	transformerVariantGroup,
} from "unocss";

export default defineConfig({
	presets: [
		presetWind4(),
		presetIcons({
			collections: {
				mdi: () =>
					import("@iconify-json/mdi/icons.json").then((i) => i.default),
			},
		}),
	],
	transformers: [transformerVariantGroup()],
	theme: {},
	shortcuts: [],
});
