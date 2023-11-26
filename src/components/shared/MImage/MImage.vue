<template>
	<div class="m-image">
		<img :src="logo" alt="">
	</div>
</template>

<script lang="ts" setup>

defineProps({
	logo: {
		type: String,
		required: true,
	},
})
</script>

<style lang="scss">
.m-image {
	position: relative;
	display: flex;
	align-items: center;
	width: 100%;
	height: 100%;

	> img {
		width: 100%;
		height: auto;
	}
}
</style>
