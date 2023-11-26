<template>
	<div class="m-card-text">
		<slot />
	</div>
</template>

<style lang="scss">
.m-card-text {
	@extend %text-paragraph;
	display: block;
	padding: 0 1rem;
	margin: 1rem 0;
}
</style>