import quotes from '../data/quotes.json';

export const getQuote = () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    return randomQuote;
};
