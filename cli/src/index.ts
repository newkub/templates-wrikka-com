import { intro, outro, select, cancel, spinner } from '@clack/prompts';
import pc from 'picocolors';
import { execa } from 'execa';
import path from 'path';
import fs from 'fs/promises';

async function main() {
  intro(pc.bgBlue(pc.white(String(' Wrikka Template Generator '))));

  const templateOptions = [
    { value: 'next', label: 'Next.js', hint: 'Modern React framework with server components' },
    { value: 'nuxt-shadcn', label: 'Nuxt.js + Shadcn', hint: 'Vue framework with Shadcn UI components' },
    { value: 'unocss', label: 'UnoCSS Setup', hint: 'Atomic CSS engine configuration' },
    { value: 'linter', label: 'Linter & Formatter', hint: 'Code quality tools setup' },
    { value: 'turborepo', label: 'Turborepo', hint: 'High-performance monorepo setup' },
    { value: 'githooks', label: 'Git Hooks', hint: 'Automated pre-commit checks' },
  ];

  const templateChoice = await select({
    message: String('Select a template to generate:'),
    options: templateOptions,
  });

  if (templateChoice === null) {
    cancel('Operation cancelled');
    process.exit(0);
  }

  const s = spinner();
  s.start(`Generating ${templateChoice} template...`);

  try {
    const templatesDir = path.resolve(__dirname, '../templates');
    const templatePath = path.join(templatesDir, templateChoice);
    const targetDir = process.cwd();
    
    // Check if template exists
    await fs.access(templatePath);
    
    // Copy template files to current directory
    await execa('cp', ['-r', `${templatePath}/.`, targetDir]);
    
    // Install dependencies if package.json exists
    if (await fileExists(path.join(targetDir, 'package.json'))) {
      s.message('Installing dependencies...');
      await execa('bun', ['install'], { cwd: targetDir });
    }
    
    s.stop(`${pc.green('✓')} ${templateChoice} template generated successfully!`);
  } catch (error) {
    s.stop(`${pc.red('✗')} Failed to generate template`);
    console.error(error);
    process.exit(1);
  }

  outro(pc.green(String('Done! Happy coding! 🎉')));
}

async function fileExists(filePath: string): Promise<boolean> {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

await main();