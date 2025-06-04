import UnoCSS from "@unocss/vite";
import { defineConfig } from "vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import vueDevTools from "vite-plugin-vue-devtools";
import { groupIconVitePlugin } from "vitepress-plugin-group-icons";

export default defineConfig({
	build: {
		rollupOptions: {
			external: ["@stackblitz/sdk"],
		},
	},

	plugins: [
		vueDevTools(),

		/*
		checker({
			typescript: true,
			vueTsc: true,
			biome: {s
				command: "lint",
			},
			overlay: false,
		}),*/

		UnoCSS(),
		ViteImageOptimizer({}),
		groupIconVitePlugin({
			customIcon: {
				"tsconfig.json": "vscode-icons:file-type-typescript",
				"vite.config.ts": "vscode-icons:file-type-vite",
				".env": "vscode-icons:file-type-dotenv",
				".mdx": "vscode-icons:file-type-light-mdx",
				html: "vscode-icons:file-type-html",
				json: "vscode-icons:file-type-json2",
				jsx: "logos:react",
				css: "logos:css-3",
				js: "logos:javascript",
				ts: "vscode-icons:file-type-typescript",
				md: "logos:markdown",
				pnpm: "logos:pnpm",
				npm: "logos:npm-icon",
				yarn: "logos:yarn",
				bun: "logos:bun",
				vue: "logos:vue",
				svelte: "logos:svelte-icon",
				angular: "logos:angular-icon",
				next: "logos:nextjs-icon",
				nuxt: "logos:nuxt-icon",
				toml: "logos:toml",
				solid: "logos:solidjs-icon",
				rollup: "logos:rollupjs",
				webpack: "logos:webpack",
				deno: "vscode-icons:file-type-deno",
				vite: "logos:vitejs",
				esbuild: "logos:esbuild",
				powershell: "vscode-icons:file-type-powershell",
				"uno.config.ts": "logos:unocss",
				turbo: "vscode-icons:file-type-turbo",
				"biome.json": "devicon:biome",
				vscode: "devicon:vscode",
				vitest: "logos:vitest",
				tailwind: "logos:tailwindcss",
				terminal: "logos:terminal",
				git: "logos:git-icon",
				".gitconfig": "logos:git-icon",
				".gitignore": "logos:git-icon",
			},
		}),
	],
});
