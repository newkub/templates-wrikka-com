<script setup lang="ts">
interface Props {
	title: string;
	description: string;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="mb-12 text-center">
    <h1 class="text-3xl font-bold mb-4">{{ props.title }}</h1>
    <p class="max-w-2xl mx-auto transition-colors duration-300">
      {{ props.description || '' }}
    </p>
  </div>
</template>
