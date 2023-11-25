import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import HomeView from './HomeView.vue';

describe('VIEW: HomeView', () => {
	it('should render the component', () => {
		const wrapper = mount(HomeView);
		expect(wrapper.exists).toBeTruthy();
	});
});
