<script lang="ts">
	export let src: string | undefined;
	export let alt: string;
	export let size = 50;
	// export let radius = '15px';
	export let classes = '';
</script>

<img class={`rounded-2xl ${classes}`} {src} {alt} height={size * 0.475} width={size} />
