// Types
type GroupedItems<T> = Record<string, T[]>;

// Interface for the grouping options
interface GroupingOptions<T> {
	getKey: (item: T) => string | string[];
	defaultGroup?: string;
}

function groupItems<T>(
	items: T[],
	options: GroupingOptions<T>,
	groupType = "none",
): GroupedItems<T> {
	if (groupType === "none") {
		return { [options.defaultGroup || "All"]: items };
	}

	return items.reduce((groups: GroupedItems<T>, item) => {
		const key = options.getKey(item);

		if (Array.isArray(key)) {
			for (const k of key) {
				if (!groups[k]) groups[k] = [];
				groups[k].push(item);
			}
		} else {
			if (!groups[key]) groups[key] = [];
			groups[key].push(item);
		}

		return groups;
	}, {});
}

// Exports
export type { GroupedItems, GroupingOptions };
export { groupItems };
