import { createLocalFontProcessor } from "@unocss/preset-web-fonts/local";
import transformerCompileClass from '@unocss/transformer-compile-class'
import { definePreset } from 'unocss'
import {
    presetIcons,
    presetTagify,
    presetWebFonts,
    presetWind4,
    transformerVariantGroup,
} from "unocss";

export default definePreset(() => {
    return {
        name: 'presetWrikka',
        presets: [
            presetWind4(),
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
            presetWebFonts({
                provider: "none",
                fonts: {
                    sans: ["Noto Sans Thai", "Roboto"],
                    mono: "Fira Code",
                },
                processors: createLocalFontProcessor({
                    cacheDir: "node_modules/.cache/unocss/fonts",
                    fontAssetsDir: "public/assets/fonts",
                    fontServeBaseUrl: "/assets/fonts",
                }),
            }),
            presetTagify(),
        ],
        rules: [
            // CSS Rules Fallback
            [/^h-(\d+)dvh$/, ([_, d]) => {
                return [
                    ['height', `${d}vh`],
                    ['height', `${d}dvh`],
                ]
            }],
            // Multi-selector rules
            [/^button-(.*)$/, function* ([, color], { symbols }) {
                yield {
                    background: color
                }
                yield {
                    [symbols.selector]: selector => `${selector}:hover`,
                    // https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color-mix
                    background: `color-mix(in srgb, ${color} 90%, black)`
                }
            }],
        ],
        variants: [

            // Add hover variant
            (matcher) => {
                if (!matcher.startsWith('hover:')) return matcher
                return {
                    // Convert hover: to media query for better mobile experience
                    matcher: matcher.slice(6),
                    selector: s => `${s}:hover, ${s}:active, ${s}:focus`,
                }
            },
        ],
        transformers: [transformerVariantGroup(), transformerCompileClass()]
    }
})