<template>
	<div v-show="isBooting" class="m-splash">
		<div class="content">
			<div class="logo">
				<img v-if="logo.length" :src="logo" alt="splash image" class="image" />
			</div>
			<div class="loader">
				<div class="dots-bars-4"></div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
defineOptions({
	name: 'm-splash'
});

defineProps({
	isBooting: {
		type: Boolean,
		default: true
	},
	logo: {
		type: String,
		default: ''
	}
});
</script>

<style lang="scss">
.m-splash {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	width: 100vw;
	height: 100vh;
	z-index: 10000;
	background-color: var(--color-background-mute);
	display: flex;
	justify-content: center;
	align-items: center;
	transition: display 2s;
}

.m-splash > .content {
	> .logo {
		display: flex;
		align-items: center;
		width: 200px;
		height: auto;
		padding: 3px;
	}

	> .logo > .image {
		width: 100%;
		height: auto;
		object-fit: contain;
	}

	> .loader {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 60px;
	}

	@media (prefers-color-scheme: light) {
		> .logo > .image {
			filter: invert(1);
		}
	}
}

.dots-bars-4 {
  width: 40px;
  height: 20px;
  --c:radial-gradient(farthest-side,currentColor 93%,#0000);
  background:
    var(--c) 0    0,
    var(--c) 50%  0,
    var(--c) 100% 0;
  background-size:8px 8px;
  background-repeat: no-repeat;
  position: relative;
  animation: db4-0 1s linear infinite alternate;
}
.dots-bars-4:before {
  content: "";
  position: absolute;
  width: 8px;
  height: 12px;
  background:currentColor;
  left:0;
  top:0;
  animation: 
    db4-1 1s  linear infinite alternate,
    db4-2 0.5s cubic-bezier(0,200,.8,200) infinite;
}

@keyframes db4-0 {
  0%      {background-position: 0  100%,50% 0   ,100% 0}
  8%,42%  {background-position: 0  0   ,50% 0   ,100% 0}
  50%     {background-position: 0  0   ,50% 100%,100% 0}
  58%,92% {background-position: 0  0   ,50% 0   ,100% 0}
  100%    {background-position: 0  0   ,50% 0   ,100% 100%}
}

@keyframes db4-1 {
  100% {left:calc(100% - 8px)}
}

@keyframes db4-2 {
  100% {top:-0.1px}
}

</style>
