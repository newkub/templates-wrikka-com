<script setup lang="ts">
import { ref } from "vue";

const currentTab = ref("profile"); // Default tab
</script>

<template>
  <div class="container mx-auto p-8">
    <div class="bg-white rounded-lg shadow-md overflow-hidden">
      <div class="px-6 py-4 bg-gray-100 border-b border-gray-200">
        <h2 class="text-xl font-semibold">Account</h2>
        <p class="text-gray-600 text-sm">Manage your account info.</p>
      </div>

      <div class="flex">
        <div class="w-1/4 p-6 bg-gray-50 border-r border-gray-200">
          <nav>
            <a
              href="#"
              class="block py-2 px-4 hover:bg-gray-100 font-semibold"
              :class="{ 'bg-gray-200': currentTab === 'profile' }"
              @click.prevent="currentTab = 'profile'"
              >Profile</a
            >
            <a
              href="#"
              class="block py-2 px-4 hover:bg-gray-100 font-semibold"
              :class="{ 'bg-gray-200': currentTab === 'security' }"
              @click.prevent="currentTab = 'security'"
              >Security</a
            >
            <!-- เพิ่ม tabs อื่นๆ ได้ตามต้องการ -->
          </nav>
        </div>
        <div class="w-3/4 p-6">
          <div v-if="currentTab === 'profile'">
            <!-- *** Profile Tab Content (Inline) *** -->
            <div>
              <h3 class="text-lg font-semibold mb-4">Profile Details</h3>
              <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="profile-name">
                  Name
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="profile-name" type="text" placeholder="Your Name">
              </div>
              <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="profile-email">
                  Email Address
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="profile-email" type="email" placeholder="your.email@example.com" disabled>
                <p class="text-gray-500 text-xs italic">This email is primary.</p>
              </div>
              <div class="mb-4">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                  Update Profile
                </button>
              </div>
            </div>
            <!-- *** End Profile Tab Content *** -->
          </div>
          <div v-else-if="currentTab === 'security'">
            <!-- *** Security Tab Content (Inline) *** -->
            <div>
              <h3 class="text-lg font-semibold mb-4">Security Settings</h3>
              <div class="mb-6">
                <h4 class="text-md font-semibold mb-2">Password</h4>
                <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                  Set Password
                </button>
              </div>
              <div>
                <h4 class="text-md font-semibold mb-2">Active Devices</h4>
                <ul class="list-disc pl-5">
                  <li>
                    Windows - Chrome 130.0.0.0 <br>
                    <span class="text-gray-500 text-sm">2001:44c8:45a6:e800:90de:7eaa:5bca:43b5 (Hat Yai, TH) <br> Today at 12:25 PM</span>
                  </li>
                  <li>
                    Windows - Chrome 130.0.0.0 <br>
                    <span class="text-gray-500 text-sm">113.53.179.20 (Narathiwat, TH) <br> 3/7/2025</span>
                  </li>
                  <li>
                    Windows - Chrome 130.0.0.0 <br>
                    <span class="text-gray-500 text-sm">125.25.203.138 (Surat Thani, TH) <br> 3/6/2025</span>
                  </li>
                </ul>
              </div>
            </div>
            <!-- *** End Security Tab Content *** -->
          </div>
          <!-- Render tabs อื่นๆ ที่นี่ -->
        </div>
      </div>
    </div>
  </div>
</template>