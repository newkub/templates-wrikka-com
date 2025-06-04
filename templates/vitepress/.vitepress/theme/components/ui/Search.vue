<script setup>
const props = defineProps({
	modelValue: {
		type: String,
		required: true,
	},
	placeholder: {
		type: String,
		default: "Search...",
	},
});

const emit = defineEmits(["update:modelValue"]);

const updateValue = (event) => {
	emit("update:modelValue", event.target.value);
};
</script>

<template>
  <input
    :value="modelValue"
    @input="updateValue"
    type="text"
    :placeholder="placeholder"
    class="px-4 py-2 border-(gray-300 dark:gray-700) rounded-md focus:(outline-none ring-2 ring-primary-500) bg-(white dark:gray-900) text-(gray-900 dark:gray-100)"
  />
</template>
