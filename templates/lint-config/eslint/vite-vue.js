import pluginVue from "eslint-plugin-vue"
import globals from "globals"

import { baseConfig } from "./base.js"

/**
 * ESLint configuration for Vite Vue projects
 * @type {import("eslint").Linter.Config}
 */
export const viteVueConfig = {
  ...baseConfig,
  ...pluginVue.configs["flat/recommended"],
  languageOptions: {
    ...pluginVue.configs["flat/recommended"].languageOptions,
    globals: {
      ...globals.browser,
    },
  },
  rules: {
    "vue/multi-word-component-names": "off",
    "vue/no-reserved-component-names": "off",
  },
}
