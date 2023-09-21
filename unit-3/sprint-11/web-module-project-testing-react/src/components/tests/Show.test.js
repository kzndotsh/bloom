import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Show from './../Show';
import Episodes from './../Episodes';
import exampleEpisodeData from './Episode.test';
import Episode from '../Episode';

const exampleShowData = {
    name: 'Stranger Things',
    summary:
        "A love letter to the '80s classics that captivated a generation, Stranger Things is set in 1983 Indiana, where a young boy vanishes into thin air. As friends, family and local police search for answers, they are drawn into an extraordinary mystery involving top-secret government experiments, terrifying supernatural forces and one very strange little girl.",
    seasons: [
        {
            id: 0,
            name: 'Season 1',
            episodes: [],
        },
    ],
};

test('renders without errors', () => {
    render(
        <Show
            show={exampleShowData}
            selectedSeason={'none'}
        />
    );
});

test('renders Loading component when prop show is null', () => {
    render(<Show show={null} />);
    const loading = screen.getByTestId('loading-container');
    expect(loading).toBeInTheDocument();
});

test('renders same number of options seasons are passed in', () => {
    render(
        <Show
            show={exampleShowData}
            selectedSeason={'none'}
        />
    );
    const options = screen.getAllByTestId('season-option');
    expect(options).toHaveLength(exampleShowData.seasons.length);
});

test('handleSelect is called when an season is selected', () => {
    const handleSelect = jest.fn();
    render(
        <Show
            show={exampleShowData}
            selectedSeason={'none'}
            handleSelect={handleSelect}
        />
    );
    const select = screen.getByRole('combobox', { name: /Select A Season/i });
    fireEvent.change(select, { target: { value: '0' } });
    expect(handleSelect).toHaveBeenCalled();
});

test('component renders when no seasons are selected and when rerenders with a season passed in', () => {
    const { rerender } = render(
        <Show
            show={exampleShowData}
            selectedSeason={'none'}
        />
    );

    let episodes = screen.queryByTestId('episodes-container');

    expect(episodes).not.toBeInTheDocument();

    rerender(
        <Show
            show={exampleShowData}
            selectedSeason={0}
        />
    );

    episodes = screen.queryByTestId('episodes-container');
    expect(episodes).toBeInTheDocument();
});

export default exampleShowData;
