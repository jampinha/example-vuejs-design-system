import { testComponentFactory } from '@/utils/testComponentFactory';
import { describe, expect, it } from 'vitest';
import MSplashVue from './MSplash.vue';

describe('Layouts: MSplash', () => {
	it('should render the component correctly', () => {
		const wrapper = testComponentFactory('mount', MSplashVue);
		expect(wrapper.exists()).toBeTruthy();
	});
});
