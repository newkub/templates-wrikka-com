import { computed, ref } from "vue";

interface Course {
	title: string;
	description: string;
	category: string;
	tag: string[];
}

const searchQuery = ref("");

const useSearch = (courses: Course[]) => {
	const filteredCourses = computed(() => {
		const query = searchQuery.value.toLowerCase();
		let filtered = courses;

		if (query) {
			filtered = filtered.filter(
				(course) =>
					course.title.toLowerCase().includes(query) ||
					course.description.toLowerCase().includes(query) ||
					course.category.toLowerCase().includes(query) ||
					course.tag.some((tag) => tag.toLowerCase().includes(query)),
			);
		}

		return filtered;
	});

	return {
		searchQuery,
		filteredCourses,
	};
};

export { useSearch };
