import { testComponentFactory } from '@/utils/testComponentFactory';
import { describe, expect, it } from 'vitest';
import MContainerVue from './MContainer.vue';

describe('Shared: MContainer', () => {
	it('should render the component', () => {
		const wrapper = testComponentFactory('mount', MContainerVue);
		expect(wrapper.exists()).toBe(true);
	});
});
