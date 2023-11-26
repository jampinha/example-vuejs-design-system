<template>
	<div class="m-navbar">
		<m-container>
			<div class="logo">
				<m-image :logo="logo" />
			</div>
			<nav class="links">
				<a href="#">Início</a>
				<a href="#">Sobre</a>
				<a href="#">Projetos</a>
			</nav>
		</m-container>
	</div>
</template>

<script lang="ts" setup>
import MContainer from '@/components/shared/MContainer/MContainer.vue';
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

	-webkit-box-shadow: 0px 2px 8px -1px rgba(0, 0, 0, 0.75);
	-moz-box-shadow: 0px 2px 8px -1px rgba(0, 0, 0, 0.75);
	box-shadow: 0px 2px 8px -1px rgba(0, 0, 0, 0.75);

	> .m-container {
		display: flex;
		align-items: center;
		height: 100%;
		gap: 3rem;

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
}
</style>
