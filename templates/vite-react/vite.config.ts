import MillionLint from "@million/lint";
import react from "@vitejs/plugin-react";
import UnoCSS from "unocss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from 'vite-tsconfig-paths'
import Pages from "vite-plugin-pages"

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
	
		tsconfigPaths(),
		UnoCSS(),
		MillionLint.vite(),
		Pages({
			dirs: [
				{ dir: 'src/pages', baseRoute: '' },
				{ dir: 'src/features/**/pages', baseRoute: 'features' },
				{ dir: 'src/admin/pages', baseRoute: 'admin', filePattern: '**/*.page.*' },
			],
		}),
	],
});
