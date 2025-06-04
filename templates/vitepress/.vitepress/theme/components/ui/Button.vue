
<script setup lang="ts">
import { computed } from "vue";

interface ButtonProps {
	icon?: string;
	text?: string;
	link?: string;
	variant?: "solid" | "outline";
	type?: "button" | "submit";
	onClick?: () => void;
}

const props = withDefaults(defineProps<ButtonProps>(), {
	variant: "solid",
	type: "button",
});

const componentProps = computed(() => {
	if (props.link) {
		return {
			href: props.link,
			target: "_blank",
			rel: "noopener noreferrer",
		};
	}
	return {
		type: props.type,
		onClick: props.onClick,
	};
});
</script>


<template>
	<component :is="link ? 'a' : 'button'" v-bind="componentProps"
		class="inline-flex items-center justify-center gap-1.5 rounded-full py-1.5 px-3 text-sm font-medium shadow-sm cursor-pointer transition-all duration-300 hover:(scale-105) active:(scale-95)"
		:class="[
			variant === 'outline' 
				? 'border border-text-light bg-brand-light dark:(border-text-dark text-text-light)' 
				: 'bg-brand-light text-text-light dark:(bg-brand-dark text-text-light)',
		]"
		role="button" :aria-label="text">
		<div v-if="icon" :class="[icon, 'w-4 h-4']" />
		<span v-if="text">{{ text }}</span>
		<slot></slot>
	</component>
</template>
