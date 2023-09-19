import React from 'react';
import {
    render,
    fireEvent,
    screen,
    wait,
    waitFor,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Display from './../Display';
import exampleShowData from './Show.test';

test('renders without errors with no props', async () => {
    render(<Display />);
});

test('renders Show component when the button is clicked ', async () => {
    render(<Display />);

    const button = screen.getByRole('button', {
        name: /Press to Get Show Data/i,
    });

    fireEvent.click(button);

    await waitFor(() => {
        screen.getByTestId('show-container');
    });

    const show = screen.getByTestId('show-container');
    expect(show).toBeInTheDocument();
});

test('renders show season options matching your data when the button is clicked', async () => {
    render(<Display />);

    const button = screen.getByRole('button', {
        name: /Press to Get Show Data/i,
    });

    fireEvent.click(button);

    await waitFor(() => {
        const options = screen.queryAllByTestId('season-option');
        expect(options).toHaveLength(5);
    });
});
