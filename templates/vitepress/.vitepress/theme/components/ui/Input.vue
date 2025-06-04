<script setup lang="ts">
import { computed } from "vue";

interface InputProps {
	modelValue: string;
	type?: string;
	placeholder?: string;
	required?: boolean;
	label?: string;
	icon?: string;
	iconColor?: string;
	iconTitle?: string;
	class?: string;
}

const props = defineProps<InputProps>();
const emit = defineEmits<(e: "update:modelValue", value: string) => void>();

const updateValue = (event: Event) => {
	const target = event.target as HTMLInputElement;
	emit("update:modelValue", target.value);
};

const inputClass = computed(() => {
	return [
		"input w-full rounded-md border border-gray-300 dark:(border-gray-600 bg-gray-700 text-gray-100) focus:(border-primary-500 ring-2 ring-primary-500/50) transition-all duration-300",
		props.icon ? "pl-10" : "",
		props.class || "",
	];
});
</script>

<template>
  <div class="space-y-2">
    <label v-if="label" class="text-gray-700 dark:(text-gray-200) block transition-colors duration-300">{{ label }}</label>
    <div class="relative">
      <div 
        v-if="icon"
        class="absolute left-3 top-1/2 -translate-y-1/2 transition-all duration-300"
      >
        <div 
          :class="[icon, iconColor, 'text-xl']"
          :title="iconTitle" 
        />
      </div>
      <input 
        :value="modelValue"
        @input="updateValue"
        :type="type || 'text'"
        :placeholder="placeholder"
        :class="inputClass" 
        :required="required" 
      />
      <slot name="suffix"></slot>
    </div>
    <slot name="helper"></slot>
  </div>
</template>
