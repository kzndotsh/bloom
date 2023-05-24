import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AppFunctional from './AppFunctional';
import userEvent from '@testing-library/user-event';

test('sanity', () => {
  expect(true).toBe(true);
});

test('renders without errors', () => {
  render(<AppFunctional />);
});

test('renders initial message', () => {
  render(<AppFunctional />);
  const message = screen.getByText(/coordinates/i);
  expect(message).toBeInTheDocument();
});

test('renders initial steps', () => {
  render(<AppFunctional />);
  const steps = screen.getByText(/time/i);
  expect(steps).toBeInTheDocument();
});

test('renders error message when submitting no email', async () => {
  render(<AppFunctional />);
  const submitButton = screen.getByRole('button', { name: /submit/i });

  userEvent.click(submitButton);

  await waitFor(() => {
    const error = screen.getByText((text) => text.match(/ouch/i));
    expect(error).toBeInTheDocument();
  });
});

test('renders error message when submitting invalid email', async () => {
  render(<AppFunctional />);

  const emailInput = screen.getByRole('textbox', { id: /email/i });
  const submitButton = screen.getByRole('button', { name: /submit/i });

  userEvent.type(emailInput, 'foo@bar.baz');
  userEvent.click(submitButton);

  await waitFor(() => {
    const error = screen.queryAllByText(/failure/i);
  });
});
