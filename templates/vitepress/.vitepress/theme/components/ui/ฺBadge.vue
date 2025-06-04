<script setup lang="ts">
interface Props {
	text: string;
	variant?: "default" | "primary" | "success" | "warning" | "danger";
	size?: "sm" | "md" | "lg";
}

const props = withDefaults(defineProps<Props>(), {
	variant: "default",
	size: "md",
});

const getSizeClass = () => {
	switch (props.size) {
		case "sm":
			return "px-2 py-0.5 text-xs";
		case "lg":
			return "px-3 py-1 text-base";
		default:
			return "px-2.5 py-0.5 text-sm";
	}
};

const variantClasses = {
	primary:
		"bg-accent-base text-accent-foreground dark:bg-accent-base-dark dark:text-accent-foreground-dark",
	success: "bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100",
	warning:
		"bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100",
	danger: "bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100",
	default:
		"bg-neutral-base/10 text-neutral-base dark:bg-neutral-base-dark/10 dark:text-neutral-base-dark",
};

const getVariantClass = () =>
	variantClasses[props.variant] || variantClasses.default;
</script>

<template>
  <span 
    class="inline-flex items-center justify-center rounded-full font-medium"
    :class="[
      getSizeClass(),
      getVariantClass()
    ]"
  >
    {{ props.text }}
  </span>
</template>
