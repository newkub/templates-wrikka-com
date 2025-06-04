import js from "@eslint/js"
import eslintConfigPrettier from "eslint-config-prettier"
import tseslint from "typescript-eslint"
import pluginImport from "eslint-plugin-import"

/**
 * Base ESLint configuration shared by all projects
 * @type {import("eslint").Linter.Config}
 */
export const baseConfig = [
  js.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  {
    plugins: {
      import: pluginImport,
    },
    rules: {
      // Common JavaScript rules
      "no-console": "warn",
      "no-debugger": "warn",
      "no-unused-vars": "warn",
      "no-var": "error",
      "prefer-const": "error",
      
      // Import/export rules
      "import/order": ["error", {
        "groups": ["builtin", "external", "internal", "parent", "sibling", "index"],
        "newlines-between": "always",
        "alphabetize": { "order": "asc", "caseInsensitive": true }
      }],
      "import/no-unresolved": "error",
      "import/no-duplicates": "error",
      
      // TypeScript rules
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/ban-ts-comment": "warn",
    },
  },
]
