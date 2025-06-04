import sidebarAICoding from "../sidebar/sidebarAICoding";
import sidebarAPI from "../sidebar/sidebarAPI";
import sidebarAbout from "../sidebar/sidebarAbout";
import sidebarAlgorithms from "../sidebar/sidebarAlgorithms";
import sidebarAuthUI from "../sidebar/sidebarAuthUI";
import sidebarAuthentication from "../sidebar/sidebarAuthentication";
import sidebarBackend from "../sidebar/sidebarBackend";
import sidebarBun from "../sidebar/sidebarBun";
import sidebarCSS from "../sidebar/sidebarCSS";
import sidebarDataStructure from "../sidebar/sidebarDataStructure";
import sidebarDatabase from "../sidebar/sidebarDatabase";
import sidebarDeployment from "../sidebar/sidebarDeployment";
import sidebarDesignSystem from "../sidebar/sidebarDesignSystem";
import sidebarDevSetup from "../sidebar/sidebarDevSetup";
import sidebarDocker from "../sidebar/sidebarDocker";
import sidebarDrizzle from "../sidebar/sidebarDrizzle";
import sidebarFigma from "../sidebar/sidebarFigma";
import sidebarFood from "../sidebar/sidebarFood";
import sidebarFramer from "../sidebar/sidebarFramer";
import sidebarFramerTemplate from "../sidebar/sidebarFramerTemplate";
import sidebarFrontend from "../sidebar/sidebarFrontend";
import sidebarGit from "../sidebar/sidebarGit";
import sidebarGitInteractiveCLI from "../sidebar/sidebarGitInteractiveCLI";
import sidebarGithub from "../sidebar/sidebarGithub";
import sidebarHTML from "../sidebar/sidebarHTML";
import sidebarIDE from "../sidebar/sidebarIDE";
import sidebarJavaScript from "../sidebar/sidebarJavaScript";
import sidebarMarkdown from "../sidebar/sidebarMarkdown";
import sidebarMoonrepo from "../sidebar/sidebarMoonrepo";
import sidebarNextjs from "../sidebar/sidebarNextjs";
import sidebarNitro from "../sidebar/sidebarNitro";
import sidebarNodejs from "../sidebar/sidebarNodejs";
import sidebarNuxt from "../sidebar/sidebarNuxt";
import sidebarPackageManager from "../sidebar/sidebarPackageManager";
import sidebarPlaywright from "../sidebar/sidebarPlaywright";
import sidebarProductivity from "../sidebar/sidebarProductivity";
import sidebarProgram from "../sidebar/sidebarProgram";
import sidebarProgramming from "../sidebar/sidebarProgramming";
import sidebarProjectSetup from "../sidebar/sidebarProjectSetup";
import sidebarReact from "../sidebar/sidebarReact";
import sidebarRecommended from "../sidebar/sidebarRecommended";
import sidebarRemix from "../sidebar/sidebarRemix";
import sidebarRust from "../sidebar/sidebarRust";
import sidebarServicePlatform from "../sidebar/sidebarServicePlatform";
import sidebarStorybook from "../sidebar/sidebarStorybook";
import sidebarStripe from "../sidebar/sidebarStripe";
import sidebarSupabase from "../sidebar/sidebarSupabase";
import sidebarTailwindCSS from "../sidebar/sidebarTailwindCSS";
import sidebarTerminalShell from "../sidebar/sidebarTerminalShell";
import sidebarTips from "../sidebar/sidebarTips";
import sidebarTools from "../sidebar/sidebarTools";
import sidebarTurborepo from "../sidebar/sidebarTurborepo";
import sidebarTypeScript from "../sidebar/sidebarTypeScript";
import sidebarUnoCSS from "../sidebar/sidebarUnoCSS";
import sidebarVSCode from "../sidebar/sidebarVSCode";
import sidebarVite from "../sidebar/sidebarVite";
import sidebarVitepress from "../sidebar/sidebarVitepress";
import sidebarVitepressStarter from "../sidebar/sidebarVitepressStarter";
import sidebarVitest from "../sidebar/sidebarVitest";
import sidebarVue from "../sidebar/sidebarVue";
import sidebarWordpress from "../sidebar/sidebarWordpress";
import sidebarWorkOS from "../sidebar/sidebarWorkOS";
import type { SidebarConfig } from "../types/sidebar";

export const sidebar: SidebarConfig = {
	"/about": {
		logo: "",
		items: sidebarAbout(),
	},
	"/tips": {
		logo: "",
		items: sidebarTips(),
	},
	"/courses/dev-setup": {
		logo: "https://res.cloudinary.com/daldcdwqs/image/upload/f_auto/v1737268869/learn-wrikka-com/s5uqk739rbptgyhuccon.webp",
		items: sidebarDevSetup(),
	},
	"/courses/html": {
		logo: "https://cdn.iconscout.com/icon/free/png-256/free-html-5-logo-icon-download-in-svg-png-gif-file-formats--programming-langugae-language-pack-logos-icons-1175208.png",
		items: sidebarHTML(),
	},
	"/courses/ai-coding": {
		logo: "https://res.cloudinary.com/daldcdwqs/image/upload/f_auto/v1743496536/learn-wrikka-com/t3sl2xtrj3dyiryxauci.webp",
		items: sidebarAICoding(),
	},

	"/courses/frontend": {
		logo: "",
		items: sidebarFrontend(),
	},
	"/courses/nitro": {
		logo: "https://nitro.build/icon.svg",
		items: sidebarNitro(),
	},
	/*
	"/courses/projects": {
		logo: "https://res.cloudinary.com/daldcdwqs/image/upload/f_auto/v1742357762/learn-wrikka-com/wikfgkanbi80snupepfi.webp",
		items: sidebarProjects(),
	},*/
	"/courses/productivity": {
		logo: "",
		items: sidebarProductivity(),
	},
	"/courses/ide": {
		logo: "",
		items: sidebarIDE(),
	},
	"/courses/backend": {
		logo: "",
		items: sidebarBackend(),
	},
	"/courses/deployment": {
		logo: "https://res.cloudinary.com/daldcdwqs/image/upload/f_auto/v1742357811/learn-wrikka-com/fgawzhdp0tnyshnmub67.webp)",
		items: sidebarDeployment(),
	},

	"/project/vitepress-starter": {
		logo: "",
		items: sidebarVitepressStarter(),
	},
	"/projects/framer-template": {
		logo: "",
		items: sidebarFramerTemplate(),
	},
	"/courses/database": {
		logo: "",
		items: sidebarDatabase(),
	},
	"/courses/package-manager": {
		logo: "https://res.cloudinary.com/daldcdwqs/image/upload/f_auto/v1736032811/learn-wrikka-com/fdyfokcxlpehbj1phoch.webp",
		items: sidebarPackageManager(),
	},
	"/projects/design-system": {
		logo: "",
		items: sidebarDesignSystem(),
	},

	"/projects/service-platform": {
		logo: "",
		items: sidebarServicePlatform(),
	},
	"/projects/git-interactive-cli": {
		logo: "",
		items: sidebarGitInteractiveCLI(),
	},
	"/projects/auth-ui": {
		logo: "",
		items: sidebarAuthUI(),
	},

	"/courses/drizzle": {
		logo: "https://res.cloudinary.com/daldcdwqs/image/upload/f_auto/v1734920667/learn-wrikka-com/u6jfqmvoy1nseflbzgrw.webp",
		items: sidebarDrizzle(),
	},
	"/courses/project-setup": {
		logo: "",
		items: sidebarProjectSetup(),
	},
	"/courses/moonrepo": {
		logo: "",
		items: sidebarMoonrepo(),
	},
	"/courses/playwright": {
		logo: "",
		items: sidebarPlaywright(),
	},
	"/courses/rust": {
		logo: "",
		items: sidebarRust(),
	},
	"/courses/bun": {
		logo: "",
		items: sidebarBun(),
	},
	"/courses/storybook": {
		logo: "https://storybook.js.org/icon.svg",
		items: sidebarStorybook(),
	},
	"/courses/authentication": {
		logo: "https://res.cloudinary.com/daldcdwqs/image/upload/f_auto/v1739528358/learn-wrikka-com/qwlbbifbu8aufklxqetk.webp",
		items: sidebarAuthentication(),
	},

	"/courses/css": {
		logo: "https://res.cloudinary.com/daldcdwqs/image/upload/f_auto/v1728725925/learn-wrikka-com/yrmatuoifkothuvddoc9.webp",
		items: sidebarCSS(),
	},
	"/courses/algorithms": {
		logo: "",
		items: sidebarAlgorithms(),
	},
	"/courses/docker": {
		logo: "",
		items: sidebarDocker(),
	},
	"/courses/data-structures": {
		logo: "",
		items: sidebarDataStructure(),
	},
	"/courses/javascript": {
		logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
		items: sidebarJavaScript(),
	},
	"/courses/programming": {
		logo: "https://res.cloudinary.com/daldcdwqs/image/upload/f_auto/v1737282667/learn-wrikka-com/ctovfl8kutoaddhqbrxa.webp",
		items: sidebarProgramming(),
	},
	"/courses/github": {
		logo: "",
		items: sidebarGithub(),
	},
	"/courses/recommended": {
		logo: "",
		items: sidebarRecommended(),
	},
	"/courses/markdown": {
		logo: "",
		items: sidebarMarkdown(),
	},
	"/courses/supabase": {
		logo: "https://supabase.com/dashboard/favicon/favicon-48x48.png",
		items: sidebarSupabase(),
	},
	"/courses/api": {
		logo: "https://res.cloudinary.com/daldcdwqs/image/upload/f_auto/v1742357895/learn-wrikka-com/xwsb6nihxgzvxz3qwqfh.webp)",
		items: sidebarAPI(),
	},
	"/courses/git": {
		logo: "https://git-scm.com/favicon.ico",
		items: sidebarGit(),
	},
	"/courses/vue": {
		logo: "https://vuejs.org/logo.svg",
		items: sidebarVue(),
	},
	"/courses/typescript": {
		logo: "https://www.typescriptlang.org/favicon-32x32.png",
		items: sidebarTypeScript(),
	},
	"/courses/remix": {
		logo: "",
		items: sidebarRemix(),
	},
	"/courses/nuxt": {
		logo: "https://nuxt.com/icon.png",
		items: sidebarNuxt(),
	},
	"/courses/figma": {
		logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
		items: sidebarFigma(),
	},
	"/courses/framer": {
		logo: "https://framerusercontent.com/images/IWSWAkpF5evn8F9z67GntQanjk.png",
		items: sidebarFramer(),
	},
	"/courses/react": {
		logo: "https://onlyweb-formation.com/uploads/mod_logo/react.webp",
		items: sidebarReact(),
	},
	"/courses/turborepo": {
		logo: "https://turbo.build/images/product-icons/repo-dark-32x32.png",
		items: sidebarTurborepo(),
	},
	"/courses/nodejs": {
		logo: "https://nodejs.org/apple-touch-icon-152x152.png",
		items: sidebarNodejs(),
	},
	"/courses/tools": {
		logo: "",
		items: sidebarTools(),
	},

	"/courses/vitest": {
		logo: "https://vitest.dev/favicon.ico",
		items: sidebarVitest(),
	},
	"/courses/vitepress": {
		logo: "https://vitepress.dev/vitepress-logo-large.webp",
		items: sidebarVitepress(),
	},
	"/courses/terminal-shell": {
		logo: "",
		items: sidebarTerminalShell(),
	},
	"/courses/vite": {
		logo: "https://vitejs.dev/logo.svg",
		items: sidebarVite(),
	},
	"/courses/vscode": {
		logo: "https://code.visualstudio.com/favicon.ico",
		items: sidebarVSCode(),
	},
	"/courses/stripe": {
		logo: "https://stripe.com/favicon.ico",
		items: sidebarStripe(),
	},
	"/courses/nextjs": {
		logo: "https://nextjs.org/favicon.ico",
		items: sidebarNextjs(),
	},
	"/courses/food": {
		logo: "",
		items: sidebarFood(),
	},
	"/courses/unocss": {
		logo: "https://unocss.dev/favicon.svg",
		items: sidebarUnoCSS(),
	},
	"/courses/program": {
		logo: "https://res.cloudinary.com/daldcdwqs/image/upload/f_auto/v1743865283/learn-wrikka-com/r6aj1wrymvpm2qdwzlxv.webp",
		items: sidebarProgram(),
	},
	"/courses/workos": {
		logo: "https://cdn.prod.website-files.com/621f54116cab10f6e9215d8b/621f549024eb2947f6f2f7f7_Favicon%20256x256.png",
		items: sidebarWorkOS(),
	},
	"/courses/tailwindcss": {
		logo: "https://tailwindcss.com/favicons/favicon.ico?v=3",
		items: sidebarTailwindCSS(),
	},
	"/courses/wordpress": {
		logo: "https://wordpress.org/favicon.ico",
		items: sidebarWordpress(),
	},
};
