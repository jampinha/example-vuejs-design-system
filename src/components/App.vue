<template>
	<m-splash :is-booting="isBooting" :logo="logo" />
	<RouterView />
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { RouterView } from 'vue-router';
import MSplash from './layouts/MSplash.vue';

const isBooting = ref(true);
const logo = new URL('@/assets/images/meiuca-logo.png', import.meta.url).href;

onMounted(() => {
	setTimeout(() => {
		isBooting.value = false;
	}, 3000);
});
</script>
