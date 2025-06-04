<script setup>
import {
	SignOutButton,
	SignedIn,
	SignedOut,
	UserButton,
	useClerk,
	useUser,
} from "@clerk/vue";
import { useSupabase } from "@theme/composables/useSupabase";
import { useData } from "vitepress";
import { watchEffect } from "vue";

const clerk = useClerk();
const { frontmatter } = useData();
const { isLoaded, isSignedIn, user } = useUser();
const { isCustomer, isLoading, checkCustomer } = useSupabase();

watchEffect(async () => {
	if (isLoaded.value && isSignedIn.value) {
		await checkCustomer(user.value.primaryEmailAddress);
	}
});

// ลิงก์ไปยัง Messenger
const messengerLink = "https://m.me/yourpage";
</script>

<template>
    <div v-if="isLoading && !frontmatter.publish"
        class="flex flex-col items-center justify-center gap-5 w-full fixed inset-0 z-50">
    </div>

    <div v-if="!frontmatter.publish">
        <SignedOut>
            <div
                class="flex flex-col items-center justify-center gap-5 w-full fixed inset-0 bg-black bg-opacity-82 z-50">
                <div
                    class="flex flex-col gap-5 bg-gray-800 bg-opacity-50 backdrop-blur-md p-5 rounded-md max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-4 sm:mx-6 md:mx-8 lg:mx-12">
                    <p class="text-white text-2xl font-bold text-center">🔑 Wrika all in one</p>
                    <p class="text-yellow-400 text text-center text-base font-bold">⚠️ เนื้อหาจะเรียบร้อยใน 7 เมษายน 2025</p>
                    <p class="text-gray-300 text text-center text-base">แชร์ทุกอย่างที่รู้และอยากจะรู้</p>
                    <p class="text-gray-300 text text-center text-base">จ่ายครั้งเดียวเข้าถึงได้ทั้งหมดและตลอดไป</p>
                    
                   

                    <p class="text-center text-[#ff4d4d]">สมัครด้วยอีเมลที่สั่งซื้อก่อนเข้าใช้งาน</p>
                    
                    <div class="flex flex-col gap-3">
                        <div class="flex flex-row gap-3">
                            <button
                                class="w-full bg-white p-2 rounded-md transition-colors duration-300 text-dark text-base"
                                @click="clerk.openSignUp">สมัคร</button>
                            <button
                                class="w-full bg-[#2176ff] p-2 rounded-md transition-colors duration-300 text-white text-base"
                                @click="clerk.openSignIn">เข้าใช้งาน
                            </button>
                        </div>
                      
                       
                    </div>

                     <!-- โปรโมชั่น -->
                   <p class="text-center text-lg font-bold text-green-400">
    🔥 วันนี้ 
    <span class="text-gray-400 line-through text-xl font-semibold">3,500</span>  
    <span class="text-yellow-400 text-2xl">→ 1,000 บาท 👇</span>
</p>



	<!-- 
<a href="https://www.tldraw.com/p/BtmFDxRKlJpwDnjmJmKkf?d=v-7730.-13275.9813.5660.j5X9HKTZ6HTHHZLWHsYty" target="_blank" rel="noopener noreferrer"
   class="w-full bg-white text-gray-800 text-center p-2 rounded-md text-lg font-bold mt-3 transition duration-300 hover:bg-gray-100">
    ดูตัวอย่าง
</a> -->




                    <a href="https://www.facebook.com/webdev.sharex" target="_blank" 
    class=" bg-[#2176ff] text-white text-center p-1.5 rounded-md text-base font-semibold mt-2 transition duration-300 bg-[#2176ff]">
    💵 สั่งซื้อ 1,000 บาท
</a>

                    <!-- ปุ่มติดต่อ Messenger -->
                   
                </div>
            </div>
        </SignedOut>

        <SignedIn>
            <div v-if="!isLoading && !isCustomer"
                class="flex flex-col items-center justify-center w-full fixed inset-0 bg-black bg-opacity-80 z-50">
                <div class="flex flex-col gap-5">
                    <div class="flex flex-col items-center gap-3">
                        <p class="text-lg text-red">ไม่มีสิทธิ์เข้าใช้</p>
                        <p class="text-gray text-base">ตรวจสอบให้แน่ใจว่าเข้าใช้ด้วยอีเมลที่สั่งซื้อ</p>
                        <div class="flex flex-tow items-center gap-2 text-white">
                            <span>{{ user.primaryEmailAddress }}</span>
                            <UserButton />
                        </div>

                        <!-- ปุ่มติดต่อ Messenger -->
                        <a href="https://www.facebook.com/webdev.sharex" target="_blank" rel="noopener noreferrer"
   class="w-full bg-blue-500 text-white text-center p-2 rounded-md text-lg font-bold mt-3 transition duration-300 hover:bg-blue-600">
    💵 สั่งซื้อ 
</a>

                        <SignOutButton class="text-base hover:text-red">ออกจากระบบ</SignOutButton>
                    </div>
                </div>
            </div>
        </SignedIn>
    </div>
</template>
