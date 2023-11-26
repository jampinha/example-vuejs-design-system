<script lang="ts" setup>
import MContainer from '@/components/shared/MContainer/MContainer.vue';
import MNavbar from '../layouts/MNavbar/MNavbar.vue';
import MCard from '../shared/MCard/MCard.vue';
import MCardTitle from '../shared/MCard/MCardTitle.vue';
import MCardText from '../shared/MCard/MCardText.vue';
</script>

<template>
	<m-navbar />
	<main>
		<m-container>
			<div class="flex by-2">
				<m-card v-for="i in [1,2,3,4,5,6,7,8,9]" :key="i">
					<m-card-title>Title</m-card-title>
					<m-card-text>Text</m-card-text>
				</m-card>
			</div>
		</m-container>
	</main>
</template>
