<script setup lang="ts">
import { useRoute } from "vitepress";
import { computed } from "vue";
import { sidebar } from "../../config/sidebar";

const route = useRoute();

const courseName = computed(() => {
	const path = route.path;
	const coursePath = path.split("/")[2]; // Get the course name from URL
	return coursePath
		? coursePath.charAt(0).toUpperCase() + coursePath.slice(1)
		: "";
});

const logo = computed(() => {
	const currentPath = route.path;
	const sidebarConfig =
		sidebar[
			Object.keys(sidebar).find((key) => currentPath.startsWith(key)) || ""
		];
	return sidebarConfig?.logo || "";
});
</script>

<template>
	<div v-if="courseName" class="p-2 border-b border-[var(--vp-c-divider)]">
		<div class="flex items-center gap-2">
			<img v-if="logo && logo !== ''" :src="logo" alt="Course Logo" class="w-6 h-6" />
			<h2 class="text-base font-medium text-white">{{ courseName }}</h2>
		</div>
	</div>
</template>




