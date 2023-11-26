import { testComponentFactory } from '@/utils/testComponentFactory';
import { describe, expect, it } from 'vitest';
import MImageVue from '@/components/shared/MImage/MImage.vue';

describe('Shared: MImage', () => {
	const logo = new URL('@/assets/images/meiuca-logo.png', import.meta.url).href;

	it('should render the component correctly', () => {
		const wrapper = testComponentFactory('mount', MImageVue, {
			props: { logo }
		});
		expect(wrapper.exists()).toBe(true);
	});
});
