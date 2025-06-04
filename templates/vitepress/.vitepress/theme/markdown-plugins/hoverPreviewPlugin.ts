import type MarkdownIt from "markdown-it";

export function hoverPreviewPlugin(md: MarkdownIt) {
	const defaultRender =
		md.renderer.rules.link_open ||
		((tokens, idx, options, env, self) =>
			self.renderToken(tokens, idx, options));

	md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
		const token = tokens[idx];
		const hrefIndex = token.attrIndex("href");

		if (hrefIndex >= 0) {
			const url = token.attrs?.[hrefIndex]?.[1];
			if (
				url?.endsWith(".jpg") ||
				url?.endsWith(".png") ||
				url?.endsWith(".gif")
			) {
				token.attrSet("data-preview", url);
				token.attrSet("onmouseover", `showPreview(event, '${url}')`);
				token.attrSet("onmouseout", "hidePreview()");
			}
		}

		return defaultRender(tokens, idx, options, env, self);
	};
}
