<script setup lang="ts">
interface TabOption {
	id: string;
	label: string;
	icon?: string;
}

interface TabProps {
	options: TabOption[];
	modelValue: string;
	showAllOption?: boolean;
	allOptionLabel?: string;
}

const props = withDefaults(defineProps<TabProps>(), {
	allOptionLabel: "All",
});

const emit = defineEmits<{
	"update:modelValue": [value: string];
}>();

const handleTabClick = (tabId: string) => {
	emit("update:modelValue", tabId);
};

const isActive = (id: string) => props.modelValue === id;
</script>

<template>
  <div class="flex flex-wrap gap-1.5">
    <button
      v-if="props.showAllOption"
      @click="handleTabClick('')"
      class="
        px-3 py-1.5 rounded-md whitespace-nowrap transition-colors
        flex items-center gap-2 text-sm
        text
        hover:(bg-brand-light/10 text-white)
        dark:hover:(bg-brand-dark/10 text-white)
      "
      :class="{
        'bg-brand-light text-white dark:(bg-brand-dark text-white)': isActive(''),
      }"
    >
      {{ props.allOptionLabel }}
    </button>

    <button 
      v-for="option in props.options" 
      :key="option.id" 
      @click="handleTabClick(option.id)" 
      class="
        px-3 py-1.5 rounded-md whitespace-nowrap transition-colors
        flex items-center gap-2 text-sm
        text
        hover:(bg-brand-light/10 text-white)
        dark:hover:(bg-brand-dark/10 text-white)
      "
      :class="{
        'bg-brand-light text-white dark:(bg-brand-dark text-white)': isActive(option.id),
      }"
    >
      <i v-if="option.icon" :class="[option.icon, 'w-4 h-4']"></i>
      {{ option.label }}
    </button>
  </div>
</template>