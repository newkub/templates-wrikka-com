<script setup lang="ts">
const props = defineProps<{
	modelValue: string;
	placeholder?: string;
	rows?: number;
}>();

const emit = defineEmits(["update:modelValue"]);

const handleInput = (event: Event) => {
	const target = event.target as HTMLTextAreaElement;
	emit("update:modelValue", target.value);
};
</script>

<template>
  <textarea
    :value="modelValue"
    @input="handleInput"
    :placeholder="placeholder"
    :rows="rows"
    class="w-full px-4 py-3 rounded-lg border-(gray-300 dark:gray-700) bg-(white dark:gray-900) text-(gray-900 dark:gray-100) text-sm transition-all duration-300 hover:bg-(gray-50 dark:gray-800) focus:(outline-none ring-2 ring-primary-500 ring-opacity-50) resize-none"
  />
</template>
