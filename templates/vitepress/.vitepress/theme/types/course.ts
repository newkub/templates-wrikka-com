// Course Interface
type Progress = "in-progress" | "pending-review" | "completed" | "coming";

type MainCourseTitle =
	| "Dev Setup"
	| "CMS"
	| "Payment"
	| "Email"
	| "API"
	| "Analytics"
	| "AI Chat"
	| "Program"
	| "Project Setup"
	| "Version Control"
	| "Terminal"
	| "Shell"
	| "AI"
	| "Package Manager"
	| "AI Coding"
	| "IDE"
	| "Productivity"
	| "UX Case"
	| "UI Design"
	| "Payment"
	| "Runtime"
	| "Backend"
	| "Programming"
	| "Design"
	| "Testing"
	| "UI Design"
	| "Frontend"
	| "Code Management"
	| "API Integration"
	| "Authentication"
	| "Backend"
	| "Database"
	| "UI"
	| "API"
	| "Project"
	| "IDE & AI"
	| "Deployment"
	| "Backend";

interface MainCourse {
	title: MainCourseTitle;
	description: string;
	link: string;
	image: string;
}

type CourseTitle =
	| "UX Case"
	| "Warp"
	| "Replicate"
	| "Coder"
	| "WezTerm"
	| "Nitro"
	| "Rio"
	| "StackBlitz"
	| "Rust"
	| "Cursor"
	| "Storybook"
	| "NvChad"
	| "Bun"
	| "Wordpress"
	| "Scoop"
	| "Winget"
	| "Wave Terminal"
	| "Noi"
	| "Warp"
	| "Railway"
	| "Package Manager"
	| "Postman"
	| "DBCode"
	| "PostgreSQL"
	| "Supabase Database"
	| "Vercel"
	| "Codeium"
	| "Obsidian"
	| "Drizzle"
	| "Supabase Auth"
	| "WorkOS"
	| "Cloudflare Domain"
	| "Cloudflare Pages"
	| "LibreChat"
	| "Nuxthub"
	| "Wamser"
	| "Proton Pass"
	| "VSCode"
	| "Windsurf"
	| "Cline"
	| "Continue"
	| "v0"
	| "Bolt"
	| "Vitest"
	| "Loveable"
	| "ChatGPT"
	| "HTML"
	| "CSS"
	| "Vite"
	| "React"
	| "Next.js"
	| "Vue"
	| "mise"
	| "Nuxt"
	| "Clickup"
	| "Raindrop"
	| "Eagle"
	| "Framer"
	| "Better Auth"
	| "JavaScript"
	| "TypeScript"
	| "Nodejs"
	| "Git"
	| "Claude"
	| "Github"
	| "Turborepo"
	| "Biome Linter"
	| "TailwindCSS"
	| "UnoCSS"
	| "VitePress"
	| "Stripe"
	| "Windows Terminal"
	| "PowerShell"
	| "CLI Tools";

type CourseSolution =
	| "Plan"
	| "Backend"
	| "AI"
	| "Design"
	| "Dev Setup"
	| "Develop"
	| "Dev Setup"
	| "AI Coding"
	| "Deploy"
	| "Productivity"
	| "Maintainance";

type CourseTag =
	| "Beginner"
	| "Intermediate"
	| "Advanced"
	| "Database"
	| "API"
	| "Frontend"
	| "Backend"
	| "Fullstack"
	| "Mobile"
	| "Desktop"
	| "Cloud"
	| "DevOps"
	| "Security"
	| "Testing"
	| "AI"
	| "ML"
	| "Data Science"
	| "Blockchain"
	| "Game Development"
	| "Web Development"
	| "Browser"
	| "Productivity"
	| "Visualize"
	| "Docs"
	| "Server"
	| "Runtime"
	| "CMS"
	| "Text Editor"
	| "Domain"
	| "User Management"
	| "Package Manager"
	| "Dev Setup"
	| "Memory Safe"
	| "Database Management"
	| "IDE and AI"
	| "Knowledge Management"
	| "ORM"
	| "Static Sites"
	| "Serverless"
	| "AI Chatbot"
	| "Web Hosting for Nuxt"
	| "Password Manager"
	| "IDE"
	| "Agentic"
	| "Autocomplete"
	| "AI Coding"
	| "AI Assistance"
	| "Web Structure"
	| "Styling"
	| "Frontend Tooling"
	| "UI Rendering"
	| "React Framework"
	| "Vue Framework"
	| "Task Management"
	| "Bookmark Manager"
	| "Asset Management"
	| "Programming"
	| "Type for JavaScript"
	| "JavaScript Runtime"
	| "Version Control"
	| "Code Hosting"
	| "Code Management"
	| "Linter"
	| "Formatter"
	| "Utilities Class"
	| "Documentation"
	| "Payment"
	| "Terminal"
	| "Shell"
	| "Authentication"
	| "Frontend Hosting";

interface Course {
	title: string;
	description: string;
	image: string;
	link: string;
	category: MainCourseTitle[];
	progress: Progress;
	difficulty: "Beginner" | "Intermediate" | "Advanced";
	tag: CourseTag[];
	solution: CourseSolution[];
}

interface Project {
	title: string;
	description: string;
	image: string;
	link: string;
	progress: Progress;
}

// Exports
export type {
	Course,
	MainCourse,
	Project,
	MainCourseTitle,
	CourseTitle,
	CourseTag,
};
