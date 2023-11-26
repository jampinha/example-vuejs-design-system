<template>
	<section class="m-card">
		<slot />
	</section>
</template>

<script lang="ts" setup>
defineOptions({
	name: 'MCard'
});
</script>

<style lang="scss">
.m-card {
	display: block;
	width: 100%;

	// -webkit-box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.75);
	// -moz-box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.75);
	// box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.75);

	border-radius: 8px;
	border: 1px solid var(--color-inverse);
}
</style>