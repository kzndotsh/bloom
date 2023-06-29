// Import the Spinner component into this file and test
// that it renders what it should for the different props it can take.

import React from 'react';
import { render } from '@testing-library/react';
import Spinner from './Spinner';

test('sanity', () => {
    expect(true).toBe(true);
});

test('Spinner renders correctly when on is true', () => {
    const { getByText } = render(<Spinner on={true} />);
    getByText('Please wait...');
});

test('Spinner renders correctly when on is false', () => {
    const { queryByText } = render(<Spinner on={false} />);
    expect(queryByText('Please wait...')).toBeNull();
});

test('Spinner renders correctly when on is null', () => {
    const { queryByText } = render(<Spinner on={null} />);
    expect(queryByText('Please wait...')).toBeNull();
});

test('Spinner renders correctly when on is undefined', () => {
    const { queryByText } = render(<Spinner on={undefined} />);
    expect(queryByText('Please wait...')).toBeNull();
});

test('Spinner renders correctly when on is a string', () => {
    const { getByText } = render(<Spinner on={'true'} />);
    getByText('Please wait...');
});
