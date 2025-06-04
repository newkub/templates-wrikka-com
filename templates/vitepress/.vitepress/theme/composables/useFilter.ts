import type { Course } from "../types/course";

interface Category {
	category: string;
}

function getCategories(courses: Course[]): Category[] {
	return [
		{ category: "All" },
		...[...new Set(courses.map((course) => course.category))].map((cat) => ({
			category: cat.charAt(0).toUpperCase() + cat.slice(1),
		})),
	];
}

function filterCoursesByCategory(
	courses: Course[],
	selectedCategory: string,
): Course[] {
	if (selectedCategory === "All") {
		return courses;
	}
	return courses.filter(
		(course) =>
			course.category.toLowerCase() === selectedCategory.toLowerCase(),
	);
}

export { getCategories, filterCoursesByCategory };
export type { Category };
