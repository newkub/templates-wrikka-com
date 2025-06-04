// src/composables/useDropdown.ts
import { Ref, onBeforeUnmount, onMounted, ref } from "vue";

export function useDropdown() {
	const isVisible = ref(false);
	const containerRef = ref<HTMLElement | null>(null);

	const toggleDropdown = () => {
		isVisible.value = !isVisible.value;
	};

	const closeDropdownOnClickOutside = (event: MouseEvent) => {
		if (
			isVisible.value &&
			containerRef.value &&
			!containerRef.value.contains(event.target as Node)
		) {
			isVisible.value = false;
		}
	};

	onMounted(() => {
		document.addEventListener("click", closeDropdownOnClickOutside);
	});

	onBeforeUnmount(() => {
		document.removeEventListener("click", closeDropdownOnClickOutside);
	});

	return {
		isVisible,
		containerRef,
		toggleDropdown,
	};
}
