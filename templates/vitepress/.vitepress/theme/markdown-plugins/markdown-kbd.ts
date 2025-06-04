import type MarkdownIt from "markdown-it";

export const kbdPlugin = (md: MarkdownIt) => {
	const kbdRegex = /\[\[(.*?)\]\]/g;

	const defaultRender =
		md.renderer.rules.text ||
		((tokens, idx, options, env, self) =>
			self.renderToken(tokens, idx, options));

	md.renderer.rules.text = (tokens, idx, options, env, self) => {
		const content = tokens[idx].content;

		if (!content.includes("[[")) {
			return defaultRender(tokens, idx, options, env, self);
		}

		return content.replace(kbdRegex, (_match: string, key: string) => {
			const trimmedKey = key.trim();
			return `<span class="kbd-key" data-key="${trimmedKey}">${trimmedKey}</span>`;
		});
	};
};
