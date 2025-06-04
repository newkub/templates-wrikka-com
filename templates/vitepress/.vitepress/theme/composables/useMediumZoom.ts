import type { Zoom } from "medium-zoom";
import mediumZoom from "medium-zoom";
import type { Router } from "vitepress";
import type { App, InjectionKey } from "vue";
import { inject, nextTick, onMounted, watch } from "vue";

declare module "medium-zoom" {
	interface Zoom {
		refresh: (selector?: string) => void;
	}
}

const mediumZoomSymbol: InjectionKey<Zoom> = Symbol("mediumZoom");

function useMediumZoom() {
	return onMounted(() => inject(mediumZoomSymbol)?.refresh());
}

export function createMediumZoomProvider(app: App, router: Router) {
	if (import.meta.env.SSR) {
		return;
	}
	const zoom = mediumZoom({
		background: "var(--vp-c-bg)",
		margin: 20,
	});
	zoom.refresh = () => {
		zoom.detach();
		zoom.attach(".vp-doc img:not(a img)");
	};
	app.provide(mediumZoomSymbol, zoom);
	watch(
		() => router.route.path,
		() => nextTick(() => zoom.refresh()),
	);
}
