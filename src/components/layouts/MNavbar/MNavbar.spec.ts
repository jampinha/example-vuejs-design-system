import { testComponentFactory } from '@/utils/testComponentFactory';
import { describe, expect, it } from 'vitest';
import MNavbarVue from './MNavbar.vue';

describe('Layouts: MNavbar', () => {
	it('should render the component', () => {
		const wrapper = testComponentFactory('mount', MNavbarVue);
		expect(wrapper.exists()).toBeTruthy();

		expect(wrapper.find('.logo').exists()).toBe(true);
	});
});
