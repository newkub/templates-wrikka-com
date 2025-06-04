import { useState } from "react";
import viteLogo from "/vite.svg";
import reactLogo from "./assets/react.svg";

export default function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
			<div className="flex gap-8 mb-8">
				<a
					href="https://vite.dev"
					target="_blank"
					rel="noreferrer"
					className="hover:scale-110 transition-transform"
				>
					<picture>
						<source srcSet={viteLogo} type="image/svg+xml" />
						<img src={viteLogo} className="w-32 h-32" alt="Vite logo" />
					</picture>
				</a>

				<a
					href="https://react.dev"
					target="_blank"
					rel="noreferrer"
					className="hover:scale-110 transition-transform"
				>
					<picture>
						<source srcSet={reactLogo} type="image/svg+xml" />
						<img
							src={reactLogo}
							className="w-32 h-32 animate-[spin_20s_linear_infinite]"
							alt="React logo"
						/>
					</picture>
				</a>
			</div>
			<h1 className="text-4xl font-bold mb-8">Vite + React</h1>
			<div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md mb-8">
				<button
					type="button"
					onClick={() => setCount((count) => count + 1)}
					className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors mb-4"
				>
					count is {count}
				</button>
				<p className="text-gray-700 dark:text-gray-300">
					Edit{" "}
					<code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">
						src/App.tsx
					</code>{" "}
					and save to test HMR
				</p>
			</div>
			<p className="text-gray-500 dark:text-gray-400">
				Click on the Vite and React logos to learn more
			</p>
		</div>
	);
}
