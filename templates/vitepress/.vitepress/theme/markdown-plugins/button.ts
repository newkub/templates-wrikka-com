import type MarkdownIt from "markdown-it";

export function buttonPlugin(md: MarkdownIt): void {
	// Save the default fence renderer
	const defaultFence =
		md.renderer.rules.fence ??
		((tokens, idx, options, env, self) =>
			self.renderToken(tokens, idx, options));

	// Custom fence renderer for 'button' info
	md.renderer.rules.fence = (tokens, idx, options, env, self) => {
		const token = tokens[idx];
		if (token && token.info.trim() === "button") {
			const content = md.render(token.content.trim());
			return `<button class="w-auto bg-white border-none text-white py-4 px-8 text-center no-underline inline-block text-base cursor-pointer rounded-lg">${content}</button>`;
		}
		return defaultFence(tokens, idx, options, env, self);
	};

	// Block rule for ::: button ... :::
	const buttonBlockRule = (
		state: {
			src: string;
			level: number;
			tokens: unknown[];
			bMarks: number[];
			eMarks: number[];
			tShift: number[];
			line: number;
		},
		startLine: number,
		endLine: number,
		silent: boolean,
	) => {
		const start = state.bMarks[startLine] + state.tShift[startLine];
		const max = state.eMarks[startLine];
		if (state.src.slice(start, max).trim() !== "::: button") return false;
		if (silent) return true;

		let nextLine = startLine + 1;
		let content = "";
		while (nextLine < endLine) {
			const lineStart = state.bMarks[nextLine] + state.tShift[nextLine];
			const lineEnd = state.eMarks[nextLine];
			if (state.src.slice(lineStart, lineEnd).trim() === ":::") break;
			content += `${state.src.slice(lineStart, lineEnd)}\n`;
			nextLine++;
		}
		state.tokens.push({
			type: "fence",
			info: "button",
			content: content.trim(),
			map: [startLine, nextLine],
			level: state.level,
		});
		state.line = nextLine + 1;
		return true;
	};

	md.block.ruler.before("fence", "button", buttonBlockRule);
}
