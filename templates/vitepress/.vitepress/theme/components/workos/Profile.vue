<script setup lang="ts">
import { useData } from "vitepress";
import { ref } from "vue";

interface User {
	profile_image?: string;
	email?: string;
	name?: string;
}

const { theme } = useData();
const user = ref<User | null>(null);
const isDropdownOpen = ref(false);

function toggleDropdown() {
	isDropdownOpen.value = !isDropdownOpen.value;
}

function signOut() {
	// Redirect to logout endpoint
	window.location.href = "/api/logout";
}

function manageAccount() {
	window.location.href = "/manage-account";
}

// Use the user data from VitePress theme config if available
if (theme.value.user) {
	user.value = theme.value.user;
}
</script>

<template>
  <div class="relative">
    <button
      @click="toggleDropdown"
      class="flex flex-row items-center gap-3 p-3 cursor-pointer"
    >
      <img
        v-if="user?.profile_image"
        :src="user?.profile_image"
        alt="Profile Image"
        class="w-8 h-8 rounded-full"
      />
      <div v-else class="w-8 h-8 rounded-full bg-gray-300"></div>
      <span class="hidden sm:flex" v-if="user">{{ user?.email }}</span>
    </button>

    <div
      v-if="isDropdownOpen"
      class="absolute right-0 mt-2 w-64 bg-white dark:bg-surface-dark border border-gray-200 dark:border-neutral-dark rounded-md shadow-md z-10"
    >
      <div v-if="user" class="p-4 border-b border-gray-200 dark:border-neutral-dark">
        <div class="flex items-center mb-2">
          <img
            v-if="user?.profile_image"
            :src="user?.profile_image"
            alt="Profile Image"
            class="w-10 h-10 rounded-full mr-2"
          />
          <div v-else class="w-10 h-10 rounded-full bg-gray-300 mr-2"></div>
          <div>
            <p class="font-semibold">{{ user?.name }}</p>
            <p class="text-gray-500 dark:text-neutral-light-dark text-sm">{{ user?.email }}</p>
          </div>
        </div>
      </div>

      <div class="py-2">
        <button @click="manageAccount" class="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-neutral-base dark:hover:text-white transition-colors">
          <i class="i-mdi-cog mr-2"></i> Manage account
        </button>
        <button @click="signOut" class="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-neutral-base dark:hover:text-white transition-colors">
          <i class="i-mdi-logout mr-2"></i> Sign out
        </button>
      </div>

      <div class="p-2 text-center text-gray-500 dark:text-neutral-light-dark text-xs">
        Secured by <a href="https://workos.com" target="_blank" class="underline">WorkOS</a>
      </div>
    </div>
  </div>
</template>