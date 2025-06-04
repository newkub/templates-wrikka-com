import { createClient } from "@supabase/supabase-js";
import { ref } from "vue";

if (
	!import.meta.env.VITE_SUPABASE_URL ||
	!import.meta.env.VITE_SUPABASE_ANON_KEY
) {
	throw new Error("Missing Supabase environment variables");
}

const supabase = createClient(
	import.meta.env.VITE_SUPABASE_URL,
	import.meta.env.VITE_SUPABASE_ANON_KEY,
);

export function useSupabase() {
	const isCustomer = ref(false);
	const isLoading = ref(true);

	const checkCustomer = async (emailToCheck: string) => {
		isLoading.value = true;
		try {
			const { data, error } = await supabase
				.from("customers")
				.select("*")
				.eq("email", emailToCheck);
			if (error) throw error;
			isCustomer.value = data.length > 0;
		} catch (error) {
			console.error("Error checking customer status:", error);
			isCustomer.value = false;
		} finally {
			isLoading.value = false;
		}
	};

	return {
		isCustomer,
		isLoading,
		checkCustomer,
		supabase,
	};
}

export default supabase;
