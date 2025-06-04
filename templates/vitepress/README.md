# Learn Wrikka

> A modern, feature-rich documentation and learning platform built with VitePress, featuring authentication, payments, and interactive coding capabilities.

## ✨ Overview

Learn Wrikka is a comprehensive learning platform that combines the power of VitePress documentation with interactive features, secure authentication, and payment processing. Perfect for creating educational content, documentation sites, and interactive coding tutorials.

## 🌟 Key Feature

- **Documentation Engine**
  - VitePress-powered documentation system
  - Fast, SEO-friendly static site generation
  - Built-in search functionality

- **Interactive Learning**
  - 💻 Monaco Editor integration for live coding
  - 📊 Mermaid Diagrams for visual explanations
  - Syntax highlighting and code formatting

- **Security & Payments**
  - 🔐 Secure authentication via Clerk
  - 💳 Stripe payment processing
  - 🔒 Protected content routes

- **Modern Tech Stack**
  - 🎨 UnoCSS for utility-first styling
  - 🔧 TypeScript for type safety
  - ⚡ Vue.js powered interactivity

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed and configured:

- Node.js (v14 or later)
- Bun package manager
- Accounts for:
  - Clerk (Authentication)
  - Supabase (Database)
  - Stripe (Payments)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/newkub/learn-wrikka-com.git
   cd learn-wrikka-com
   ```

2. Install dependencies:
   ```bash
   bun install
   ```

3. Configure environment:
   ```bash
   cp .env.example .env
   ```
   Edit `.env` and add your service credentials:
   - Clerk API keys
   - Supabase connection details
   - Stripe API keys

4. Start development server:
   ```bash
   bun dev
   ```

## 📝 Available Commands

| Command       | Purpose             | Description                        |
| ------------- | ------------------- | ---------------------------------- |
| `bun dev`     | Development         | Starts local development server    |
| `bun build`   | Production Build    | Creates optimized production build |
| `bun preview` | Production Preview  | Preview production build locally   |
| `bun format`  | Code Formatting     | Format code using dprint           |
| `bun lint`    | Code Linting        | Run ESLint checks                  |
| `bun knip`    | Dependency Analysis | Analyze unused dependencies        |
| `bun prepare` | Setup               | Install git hooks via husky        |

## 🌐 Deployment Options

Choose your preferred deployment platform:

<div align="center">

[![Open in Codeflow](https://developer.stackblitz.com/img/open_in_codeflow.svg)](https://pr.new/newkub/learn-wrikka-com)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/newkub/learn-wrikka-com)

[![Deploy to Cloudflare](https://img.shields.io/badge/Deploy%20to-Cloudflare%20Workers-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)](https://dash.cloudflare.com/sign-up/workers)

</div>

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
