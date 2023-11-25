<template>
	<div class="m-container">
		<slot />
	</div>
</template>

<script lang="ts" setup>
defineOptions({
	name: 'MContainer'
});
</script>

<style>
.m-container {
	position: relative;
	padding: 0 1rem;
	margin: 0 auto;
	max-width: 1400px;
}
</style>
