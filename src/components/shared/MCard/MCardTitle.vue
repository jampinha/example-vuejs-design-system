<template>
	<div class="m-card-title">
		<slot />
	</div>
</template>

<script lang="ts" setup>
defineOptions({
	name: 'MCardTitle'
});
</script>

<style lang="scss">
.m-card-title {
	@extend %text-heading;
	padding: 0 1rem;
	margin: 1rem 0;
}
</style>