<template>
    <div v-if="isCoursePage" class="flex flex-col gap-4 pt-4 pb-4">
        <div class="flex gap-2">
            <button v-for="action in actionOptions" :key="action.value" type="button"
                @click="selectedAction = action.value" :class="[
                    'flex items-center gap-2 px-4 py-2 rounded-md transition-colors',
                    selectedAction === action.value
                        ? 'bg-[var(--vp-c-brand-2)] text-[var(--vp-c-text-inverse-1)]'
                        : 'bg-surface-dark text-[var(--vp-c-text-1)] hover:bg-[var(--vp-c-bg-alt)] active:bg-[var(--vp-c-bg-alt)]'
                ]">
                <i :class="action.icon"></i>
                {{ action.label }}
            </button>
        </div>
        <form v-if="selectedAction" @submit.prevent="submitFeedback" class="flex flex-col gap-4">
            <div class="flex flex-col">
                <label for="feedbackContent" class="mb-2">{{ actionLabels[selectedAction] }}</label>
                <textarea id="feedbackContent" v-model="feedbackContent" required
                    class="p-2 border border-[var(--vp-c-brand)] rounded-md min-h-[100px] resize-y bg-surface-dark text-[var(--vp-c-text-1)]"></textarea>
            </div>
            <button type="submit" :disabled="isSubmitting"
                class="flex items-center justify-center gap-2 px-4 py-2 bg-[var(--vp-c-brand-2)] text-[var(--vp-c-text-inverse-1)] rounded-md hover:bg-[var(--vp-c-brand-dark)] active:bg-[var(--vp-c-brand-2)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                <i class="i-carbon-send"></i>
                {{ isSubmitting ? 'กำลังส่ง...' : `ส่ง${actionLabels[selectedAction]}` }}
            </button>
        </form>
        <div v-if="submitStatus" :class="[
            'mt-2 p-2 rounded-md',
            submitStatus === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        ]">
            {{ submitStatus === 'success' ? 'ส่งข้อมูลเรียบร้อยแล้ว' :
            'เกิดข้อผิดพลาดในการส่งข้อมูลกรุณาลองใหม่อีกครั้ง' }}
        </div>
    </div>
</template>

<script setup>
import { useRoute } from "vitepress";
import { computed, ref } from "vue";

const route = useRoute();

// ตรวจสอบว่าหน้าปัจจุบันอยู่ใน courses หรือไม่
const isCoursePage = computed(() => {
	return route.path.startsWith("/courses/");
});

const actionOptions = [
	{ value: "report", label: "แจ้งปัญหา", icon: "i-carbon-warning" },
	{ value: "feedback", label: "เสนอแนะ", icon: "i-carbon-idea" },
];

const actionLabels = {
	report: "รายละเอียดปัญหา",
	feedback: "ข้อเสนอแนะ",
};

const selectedAction = ref("");
const feedbackContent = ref("");
const isSubmitting = ref(false);
const submitStatus = ref(null);

const webhookUrls = {
	report:
		"https://discord.com/api/webhooks/1321114425931071499/nNXcTFIrrC3vqd1zQq1dkStw6JUQKALpF6WoTn4jg5MR-2HTx7MK3ocIgYpn7Ubu0am-",
	feedback:
		"https://discord.com/api/webhooks/1321114787161178213/XvVFn2_fbGocIryzvuNfCicvDG9Hgx3Y1Ytak7fTz04koeTqBFJUX_TsziQbnossPBfg",
};

const sendToDiscord = async (content, type) => {
	const webhookUrl = webhookUrls[type];
	if (!webhookUrl) {
		console.error("Discord webhook URL not found for type:", type);
		throw new Error("Discord webhook URL not found");
	}

	try {
		// Get current page URL and extract course name
		const currentUrl = window.location.href;
		const courseMatch = currentUrl.match(/\/courses\/([^\/]+)/);
		const courseName = courseMatch ? courseMatch[1] : "general";

		const response = await fetch(webhookUrl, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				embeds: [
					{
						color: 0x3498db,
						description: `[${courseName}](${currentUrl})\n${content}`,
						timestamp: new Date().toISOString(),
					},
				],
			}),
		});

		if (!response.ok) {
			console.error("Discord API Error:", {
				status: response.status,
				statusText: response.statusText,
			});
			throw new Error(
				`Failed to send to Discord: ${response.status} ${response.statusText}`,
			);
		}
	} catch (error) {
		console.error("Error sending to Discord:", error.message);
		throw error;
	}
};

const submitFeedback = async () => {
	if (isSubmitting.value) return;

	try {
		isSubmitting.value = true;
		submitStatus.value = null;
		await sendToDiscord(feedbackContent.value, selectedAction.value);
		selectedAction.value = "";
		feedbackContent.value = "";
		submitStatus.value = "success";
	} catch (error) {
		submitStatus.value = "error";
	} finally {
		isSubmitting.value = false;
	}
};
</script>