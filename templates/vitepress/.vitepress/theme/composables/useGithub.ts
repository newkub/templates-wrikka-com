import { computed, ref } from "vue";

const owner = "newkub";
const repo = "learn-wrikka-com";
const token = import.meta.env.VITE_GITHUB_API_TOKEN;

const useGithub = () => {
	const lastCommitDate = ref<Date | null>(null);
	const error = ref<{ message: string; status?: number } | null>(null);

	const fetchLastCommit = async (): Promise<void> => {
		try {
			const response = await fetch(
				`https://api.github.com/repos/${owner}/${repo}/commits?per_page=1`,
				{
					headers: {
						Authorization: `token ${token}`,
					},
				},
			);

			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}

			const data = (await response.json()) as {
				commit: { author: { date: string } };
			}[];
			if (data?.[0]?.commit?.author?.date) {
				lastCommitDate.value = new Date(data[0].commit.author.date);
			} else {
				error.value = { message: "No commits found" };
			}
		} catch (err) {
			error.value = {
				message: "Error fetching commit data",
				status: err instanceof Error ? 500 : undefined,
			};
			console.error(err);
		}
	};

	const dateFormatOptions: Intl.DateTimeFormatOptions = {
		year: "numeric",
		month: "long",
		day: "numeric",
		hour: "2-digit",
		minute: "2-digit",
		hour12: false,
	};

	const formattedDate = computed(() => {
		if (!lastCommitDate.value) return "";
		return new Intl.DateTimeFormat("th-TH", dateFormatOptions)
			.format(lastCommitDate.value)
			.replace("เวลา", "เวลา");
	});

	const timeAgo = computed(() => {
		if (!lastCommitDate.value) return "";
		const now = Date.now();
		const past = lastCommitDate.value.getTime();
		const diffInSeconds = Math.floor((now - past) / 1000);
		const days = Math.floor(diffInSeconds / (60 * 60 * 24));
		const hours = Math.floor((diffInSeconds % (60 * 60 * 24)) / (60 * 60));
		const minutes = Math.floor((diffInSeconds % (60 * 60)) / 60);

		if (days > 0) return `${days} วันที่แล้ว`;
		if (hours > 0) return `${hours} ชั่วโมงที่แล้ว`;
		if (minutes > 0) return `${minutes} นาทีที่แล้ว`;
		return "เพิ่งอัพเดท";
	});

	return {
		lastCommitDate,
		error,
		fetchLastCommit,
		formattedDate,
		timeAgo,
	} as const;
};

export type UseGithubReturn = ReturnType<typeof useGithub>;
export { useGithub };
