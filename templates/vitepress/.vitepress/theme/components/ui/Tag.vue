<script setup lang="ts">
interface Props {
	text: string;
	active?: boolean;
	interactive?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
	text: "",
	interactive: false,
	active: false,
});
</script>

<template>
	<span
		:class="[
			'px-2 py-0.5 text-xs rounded-full transition-colors',
			!props.active && 'dark:bg-surface-dark bg-surface-light text',
			props.interactive && !props.active && 'hover:(bg-brand-light/10 text-white) dark:hover:(bg-brand-dark/10 text-white) cursor-pointer',
			props.active && 'bg-brand-light dark:bg-brand-dark text-white',
		]"
	>
		{{ props.text }}
	</span>
</template>