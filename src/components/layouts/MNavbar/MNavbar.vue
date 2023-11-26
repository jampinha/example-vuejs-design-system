<template>
	<div class="m-navbar">
		<div class="logo">
			<m-image :logo="logo" />
		</div>
		<nav class="links">
			<a href="#">Link</a>
			<a href="#">Link</a>
			<a href="#">Link</a>
		</nav>
	</div>
</template>

<script lang="ts" setup>
import MImage from '@/components/shared/MImage/MImage.vue';

defineOptions({
	name: 'MNavbar'
});

const logo = new URL('@/assets/images/meiuca-logo.png', import.meta.url).href;
</script>

<style lang="scss">
.m-navbar {
	background-color: var(--color-background);
	position: relative;
	height: 70px;
	padding: 1rem;
	display: flex;
	align-items: center;
	justify-content: space-between;

	> .logo {
		align-self: flex-start;
		width: 100px;
		height: 100%;
	}

	> .links {
		display: flex;
		gap: 16px;

		> a {
			color: var(--color-inverse);
		}
	}

	@media (prefers-color-scheme: light) {
		> .logo img {
			filter: invert(1);
		}
	}
}
</style>
