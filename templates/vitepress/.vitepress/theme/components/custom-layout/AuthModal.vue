<script setup>
import { SignOutButton, SignedIn, SignedOut, UserButton } from "@clerk/vue";
import { useAuth } from "@theme/composables/useAuth";
import { onMounted } from "vue";

const { showAuthModal, closeAuthModal, clerk, isLoading, isCustomer, user } =
	useAuth();

onMounted(() => {
	const script = document.createElement("script");
	script.src = "https://js.stripe.com/v3/buy-button.js";
	script.async = true;
	document.head.appendChild(script);
});
</script>

<template>
	<Teleport to="body">
		<div v-if="showAuthModal" @click="closeAuthModal"
			class="flex flex-col items-center justify-center gap-5 w-full fixed inset-0 bg-black bg-opacity-82 z-50">
			<div @click.stop
				class="flex flex-col gap-5 bg-gray-800 bg-opacity-50 backdrop-blur-md p-5 rounded-md max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-4 sm:mx-6 md:mx-8 lg:mx-12">
				<SignedOut>
					<p class="text-white text-2xl font-bold text-center">🔑 Wrika all in one</p>
					<p class="text-yellow-400 text text-center text-base font-bold">⚠️ เนื้อหาจะเรียบร้อยใน 5
						มีนาคม 2025</p>
					<p class="text-gray-300 text text-center text-base">แชร์ทุกอย่างที่รู้และอยากจะรู้</p>
					<p class="text-gray-300 text text-center text-base">จ่ายครั้งเดียวเข้าถึงได้ทั้งหมดและตลอดไป</p>
					<p class="text-center text-[#ff4d4d]">สมัครด้วยอีเมลที่สั่งซื้อก่อนเข้าใช้งาน</p>
					<div class="flex flex-row gap-3">
						<button class="w-full bg-white p-2 rounded-md transition-colors duration-300 text-dark text-base"
							@click="clerk.openSignUp">สมัคร</button>
						<button class="w-full bg-[#2176ff] p-2 rounded-md transition-colors duration-300 text-white text-base"
							@click="clerk.openSignIn">เข้าใช้งาน
						</button>
					</div>
				</SignedOut>

				<SignedIn>
					<div v-if="!isLoading && !isCustomer" class="flex flex-col gap-5">
						<div class="flex flex-col items-center gap-3">
							<p class="text-lg text-red">ไม่มีสิทธิ์เข้าใช้</p>
							<p class="text-gray text-base">ตรวจสอบให้แน่ใจว่าเข้าใช้ด้วยอีเมลที่สั่งซื้อ</p>
							<div class="flex flex-tow items-center gap-2 text-white">
								<span>{{ user.primaryEmailAddress }}</span>
								<UserButton />
							</div>
							<stripe-buy-button buy-button-id="buy_btn_1PWAsuBzfjWMkCdE1FX3zvGS"
								publishable-key="pk_live_51OQ5XMBzfjWMkCdE0EaQCiKg9bO5BMr7CsjLZ7cXKv5xthA9X9qiXBQXSKnnorEwrK31bkAEjXJGahWDMSZrURZI00YPK7OCOP">
							</stripe-buy-button>
							<SignOutButton class="text-base hover:text-red">ออกจากระบบ</SignOutButton>
						</div>
					</div>
				</SignedIn>
			</div>
		</div>
	</Teleport>
</template>