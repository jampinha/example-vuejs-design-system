<template>
	<img :src="filepath" :alt="altText" :class="['m-avatar', `-${size}`]" />
</template>

<script lang="ts" setup>
defineOptions({
	name: 'm-avatar'
});

defineProps({
	filepath: {
		type: String,
		required: true
	},
	size: {
		type: String,
		default: 'small'
	},
	altText: {
		type: String,
		default: 'avatar image'
	}
});
</script>

<style lang="scss">
.m-avatar {
	border-radius: 50%;

	&.-small {
		width: 50px;
		height: 50px;
	}

	&.-medium {
		width: 80px;
		height: 80px;
	}

	&.-large {
		width: 100px;
		height: 100px;
	}
}
</style>
