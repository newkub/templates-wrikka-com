import Image from "next/image";

export default function Home() {
  return (
	<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-[100svh] p-80px gap-64px font-sans dark:bg-[#0a0a0a] dark:text-[#ededed] bg-white text-[#171717]">
	  <main className="flex flex-col gap-32px row-start-2">
		<Image
		  className="dark:filter dark:invert"
		  src="/next.svg"
		  alt="Next.js logo"
		  width={180}
		  height={38}
		  priority
		/>
		<ol className="font-mono text-14px leading-24px tracking-[-0.01em] list-inside pl-0 m-0">
		  <li className="mb-8px">
			Get started by editing <code>app/page.tsx</code>.
		  </li>
		  <li>Save and see your changes instantly.</li>
		</ol>

		<div className="flex gap-4 max-sm:flex-col">
		  <a
			className="appearance-none rounded-[128px] h-48px py-0 px-20px border-transparent border transition-all cursor-pointer flex items-center justify-center text-16px leading-20px font-500 bg-[var(--foreground)] text-[var(--background)] gap-8px hover:bg-[#383838] dark:hover:bg-[#ccc] max-sm:text-14px max-sm:h-40px max-sm:px-16px"
			href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
			target="_blank"
			rel="noopener noreferrer"
		  >
			<Image
			  className="dark:filter dark:invert"
			  src="/vercel.svg"
			  alt="Vercel logomark"
			  width={20}
			  height={20}
			/>
			Deploy now
		  </a>
		  <a
			href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
			target="_blank"
			rel="noopener noreferrer"
			className="appearance-none rounded-[128px] h-48px py-0 px-20px border border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.145)] transition-all cursor-pointer flex items-center justify-center text-16px leading-20px font-500 min-w-158px hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] max-sm:text-14px max-sm:h-40px max-sm:px-16px max-sm:min-w-auto"
		  >
			Read our docs
		  </a>
		</div>
	  </main>
	  <footer className="row-start-3 flex gap-24px max-sm:flex-wrap max-sm:items-center max-sm:justify-center">
		<a
		  href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
		  target="_blank"
		  rel="noopener noreferrer"
		  className="flex items-center gap-8px"
		>
		  <Image
			aria-hidden
			src="/file.svg"
			alt="File icon"
			width={16}
			height={16}
			className="flex-shrink-0"
		  />
		  Learn
		</a>
		<a
		  href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
		  target="_blank"
		  rel="noopener noreferrer"
		  className="flex items-center gap-8px"
		>
		  <Image
			aria-hidden
			src="/window.svg"
			alt="Window icon"
			width={16}
			height={16}
			className="flex-shrink-0"
		  />
		  Examples
		</a>
		<a
		  href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
		  target="_blank"
		  rel="noopener noreferrer"
		  className="flex items-center gap-8px"
		>
		  <Image
			aria-hidden
			src="/globe.svg"
			alt="Globe icon"
			width={16}
			height={16}
			className="flex-shrink-0"
		  />
		  Go to nextjs.org →
		</a>
	  </footer>
	</div>
  );
}
