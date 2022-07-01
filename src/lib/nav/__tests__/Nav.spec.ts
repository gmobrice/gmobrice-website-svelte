import { render } from '@testing-library/svelte';
import { navigationLinks } from '../data';
import Nav from '../Nav.svelte';

describe('Nav component Unit Tests', () => {
	it('should render and validate elements', async () => {
		const { findByText } = render(Nav);
		const linkElement = await findByText(navigationLinks[0].name);

		expect(linkElement).toBeTruthy();
	});
});
