import { type ComponentMountingOptions, mount, shallowMount } from '@vue/test-utils';

type MountType = 'mount' | 'shallow';

const componentFactory = (
	type: MountType,
	component: any,
	options?: ComponentMountingOptions<any> | undefined
) => {
	const factory = {
		mount: () => mount(component, options),
		shallow: () => shallowMount(component, options)
	};

	return factory[type]();
}

export function testComponentFactory(
	type: MountType = 'shallow',
	component: any,
	options?: ComponentMountingOptions<any> | undefined
) {
	const factory = {
		mount: () => mount(component, options),
		shallow: () => shallowMount(component, options)
	};

	return factory[type]();
}

export default {
	componentFactory,
}