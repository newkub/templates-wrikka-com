import { intro, outro, text, select, confirm, isCancel } from '@clack/prompts';
import pc from 'picocolors';

async function main() {
  intro(pc.bold('Welcome to Wrikka CLI'));

  const name = await text({
    message: 'What is your name?',
    placeholder: 'John Doe',
    validate: (value) => {
      if (value.length < 2) return 'Name must be at least 2 characters';
    }
  });

  if (isCancel(name)) {
    outro('Operation cancelled');
    process.exit(0);
  }

  const projectType = await select({
    message: 'Select project type',
    options: [
      { value: 'web', label: 'Web Application' },
      { value: 'cli', label: 'CLI Tool' },
      { value: 'lib', label: 'Library' },
    ],
  });

  const confirmed = await confirm({
    message: `Create ${projectType} project for ${name}?`,
  });

  if (confirmed) {
    outro(pc.green(`Project created successfully!`));
  } else {
    outro(pc.yellow(`Operation cancelled`));
  }
}

main().catch(console.error);
