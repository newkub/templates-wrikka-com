<script setup lang="ts">
import DefaultTheme from "vitepress/theme";
import ClerkProfile from "../ClerkProfile.vue";
import Profile from "../workos/Profile.vue";
import CourseHeader from "./CourseHeader.vue";
import LoginCheck from "./PopupLogin.vue";

const { Layout } = DefaultTheme;
</script>

<template>
    <Layout>
        <template #layout-top>
            <LoginCheck />
        </template>

        <template #sidebar-nav-before>
            <CourseHeader />
        </template>

        <template #nav-bar-content-after>
            <ClerkProfile />
           
            <!-- <Profile /> -->
            
            
        </template>

        <!--
        <template #aside-bottom>
            <div class="p-3 bg-[#202127] rounded-md">Ask with AI</div>
        </template>  -->
        <!--<template #home-hero-info-after>
            <p class="pt-5">เปิดให้บุคคลภายนอกเห็นได้เป็นระยะเวลา 30 วัน จนถึงวันนี้ 31 สิงหาคม 2024</p>
        </template>-->
        <!--<template #doc-footer-before>

            <Feedback />

        </template>-->

        <!-- <template #nav-screen-content-after>
            <NavBarButtons />
        </template> -->
        <!-- <template #aside-outline-after>
            <img class="pt-5 rounded-sm" src="https://code.visualstudio.com/assets/docs/languages/html/auto-close1.gif">
        </template> -->
    </Layout>

    <!-- <FloatingActionMenu /> -->
</template>