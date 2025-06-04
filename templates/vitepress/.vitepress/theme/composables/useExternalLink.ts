function useExternalLink() {
	const isExternalLink = (url: string): boolean => {
		if (!url?.trim()) return false;

		if (url.startsWith("/") || url.startsWith("#") || url.startsWith("."))
			return false;

		try {
			const urlObj = new URL(url);
			return urlObj.hostname !== window.location.hostname;
		} catch {
			return false;
		}
	};

	return {
		isExternalLink,
	};
}

export { useExternalLink };
