<script setup lang="ts">
import { useExternalLink } from "../../composables/useExternalLink";
import type { Course } from "../../types/course";

interface Project {
	title: string;
	description: string;
	link: string;
	image?: string;
	tags?: string[];
	course?: Course;
}

const props = withDefaults(
	defineProps<{
		project: Project;
	}>(),
	{
		project: () => ({
			title: "",
			description: "",
			link: "#",
			image: "/images/placeholder-square.webp",
			tags: [],
		}),
	},
);

const { isExternalLink } = useExternalLink();
</script>

<template>
  <a 
    :href="props.project.link"
    :target="isExternalLink(props.project.link) ? '_blank' : '_self'"
    :class="[
      'group relative flex flex-col gap-4 p-6 rounded-lg transition-all',
      'hover:(shadow-lg scale-105)',
      'active:(shadow-lg scale-105)',
      'dark:bg-background-dark bg-background-light',
    ]"
  >
    <img v-if="props.project.image" :src="props.project.image" :alt="props.project.title" class="aspect-[16/9] w-full rounded-t-lg">
    <div class="p-4">
      <h3 class="text-xl font-bold mb-2 text-text-light dark:text-text-dark">{{ props.project.title }}</h3>
      <p class="text-base text-text-light/70 dark:text-text-dark/70 mb-4">{{ props.project.description }}</p>
      <div v-if="props.project.course" class="mb-4">
        <span class="px-2 py-1 text-xs font-medium bg-brand-light dark:bg-brand-dark text-white rounded-full">
          {{ props.project.course.category }}
        </span>
      </div>
      <div v-if="props.project.tags" class="flex flex-wrap gap-2">
        <span 
          v-for="tag in props.project.tags"
          :key="tag"
          class="px-2 py-1 text-xs rounded-full transition-colors dark:bg-surface-dark bg-surface-light text"
        >
          {{ tag }}
        </span>
      </div>
    </div>
    <div v-if="isExternalLink(props.project.link)" class="i-mdi-open-in-new absolute right-4 bottom-4 w-4 h-4 text-text-light/70 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
  </a>
</template>