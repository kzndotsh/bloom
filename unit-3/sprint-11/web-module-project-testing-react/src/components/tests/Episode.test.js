import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Episode from './../Episode';

// ----- EXAMPLE EPISODE TEST OBJECT -----
const exampleEpisodeData = {
    id: 553946,
    image: 'https://static.tvmaze.com/uploads/images/medium_landscape/342/855786.jpg',
    name: 'Chapter One: The Vanishing of Will Byers',
    number: 1,
    runtime: 49,
    season: 1,
    summary:
        "A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girl in the forest.",
};

test('renders without error', () => {
    render(<Episode episode={exampleEpisodeData} />);
});

test('renders the summary test passed as prop', () => {
    render(<Episode episode={exampleEpisodeData} />);
    const summary = screen.getByText(exampleEpisodeData.summary);
    expect(summary).toBeInTheDocument();
});

test('renders default image when image is not defined', () => {
    const episodeData = { ...exampleEpisodeData, image: null };
    render(<Episode episode={episodeData} />);
    const defaultImage = screen.getByAltText(
        'https://i.ibb.co/2FsfXqM/stranger-things.png'
    );
    expect(defaultImage).toBeInTheDocument();
});

export default exampleEpisodeData;
