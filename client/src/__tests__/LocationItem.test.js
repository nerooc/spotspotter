import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import { LocationItem } from '../components';

afterEach(cleanup);

const location = {
	id: 1,
	title: 'Test Location',
	address: {
		country: 'Test Country',
		city: 'Test City',
		street: 'Test Street',
		number: '123',
	},
};

test('renders the location title and address', () => {
	render(<LocationItem location={location} />);
	expect(screen.getByAltText('Test Location')).toBeInTheDocument();
	expect(screen.getByText('Test Country, Test City')).toBeInTheDocument();
	expect(screen.getByText('Test Street 123')).toBeInTheDocument();
});
