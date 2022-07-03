import { render } from '@testing-library/svelte';
import Nav from '../Nav.svelte';
import { getLinkStyles, getButtonStyles } from '../styles';

jest.mock('../styles', () => ({
	getLinkStyles: jest.fn(),
	getButtonStyles: jest.fn()
}));

describe('Nav component Unit Tests', () => {
	it('should render and validate elements', async () => {
		const { findByText } = render(Nav);
		const linkElement = await findByText('Home');

		expect(linkElement).toBeTruthy();
		expect(getLinkStyles).toHaveBeenCalled();
		expect(getButtonStyles).toHaveBeenCalled();
	});
});
