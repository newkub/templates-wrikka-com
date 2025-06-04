import { defineConfig, presetIcons, presetWind4, transformerVariantGroup, presetWebFonts } from "unocss";
import { createLocalFontProcessor } from '@unocss/preset-web-fonts/local';

export default defineConfig({
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
      provider: 'none',
      fonts: {
        sans: 'Roboto',
        mono: 'Fira Code',
      },
      processors: createLocalFontProcessor({
        cacheDir: 'node_modules/.cache/unocss/fonts',
        fontAssetsDir: 'public/assets/fonts',
        fontServeBaseUrl: '/assets/fonts'
      })
    }),
  ],
  theme: {
    colors: {
      background: {
        light: 'var(--background-light)',
        dark: 'var(--background-dark)',
      },
      brand: {
        light: 'var(--brand-light)',
        dark: 'var(--brand-dark)',
      },
      text: {
        light: 'var(--text-light)',
        dark: 'var(--text-dark)',
      },
      alert: {
        light: 'var(--alert-light)',
        dark: 'var(--alert-dark)',
      },
      error: {
        light: 'var(--error-light)',
        dark: 'var(--error-dark)',
      },
      success: {
        light: 'var(--success-light)',
        dark: 'var(--success-dark)',
      },
    },
  },
});