import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import ContactForm from './ContactForm';

test('renders without errors', () => {
  render(<ContactForm />);
});

test('renders the contact form header', () => {
  render(<ContactForm />);
  const header = screen.getByText(/contact form/i);
  expect(header).toBeInTheDocument();
});

test('renders ONE error message if user enters less than 5 characters into firstname.', async () => {
  render(<ContactForm />);
  const firstNameInput = screen.getByLabelText(/first name/i);
  userEvent.type(firstNameInput, 'test');
  const submitButton = screen.getByRole('button', { name: /submit/i });
  userEvent.click(submitButton);
  await waitFor(() => {
    const errorMessage = screen.queryByText(
      /firstName must have at least 5 characters/i
    );
    expect(errorMessage).toBeInTheDocument();
  });
});

test('renders THREE error messages if user enters no values into any fields.', async () => {
  render(<ContactForm />);
  const submitButton = screen.getByRole('button', { name: /submit/i });
  userEvent.click(submitButton);
  await waitFor(() => {
    const firstNameError = screen.queryByText(
      /firstName must have at least 5 characters/i
    );
    const lastNameError = screen.queryByText(/lastName is a required field/i);
    const emailError = screen.queryByText(
      /email must be a valid email address/i
    );
    expect(firstNameError).toBeInTheDocument();
    expect(lastNameError).toBeInTheDocument();
    expect(emailError).toBeInTheDocument();
  });
});

test('renders ONE error message if user enters a valid first name and last name but no email.', async () => {
  render(<ContactForm />);
  const firstNameInput = screen.getByLabelText(/first name/i);
  userEvent.type(firstNameInput, 'test');
  const lastNameInput = screen.getByLabelText(/last name/i);
  userEvent.type(lastNameInput, 'test');
  const submitButton = screen.getByRole('button', { name: /submit/i });
  userEvent.click(submitButton);
  await waitFor(() => {
    const errorMessage = screen.queryByText(
      /email must be a valid email address/i
    );
    expect(errorMessage).toBeInTheDocument();
  });
});

test('renders "email must be a valid email address" if an invalid email is entered', async () => {
  render(<ContactForm />);
  const emailInput = screen.getByLabelText(/email/i);
  userEvent.type(emailInput, 'test');
  const submitButton = screen.getByRole('button', { name: /submit/i });
  userEvent.click(submitButton);
  await waitFor(() => {
    const errorMessage = screen.queryByText(
      /email must be a valid email address/i
    );
    expect(errorMessage).toBeInTheDocument();
  });
});

test('renders "lastName is a required field" if an last name is not entered and the submit button is clicked', async () => {
  render(<ContactForm />);
  const lastNameInput = screen.getByLabelText(/last name/i);
  userEvent.type(lastNameInput, '');
  const submitButton = screen.getByRole('button', { name: /submit/i });
  userEvent.click(submitButton);
  await waitFor(() => {
    const errorMessage = screen.queryByText(/lastName is a required field/i);
    expect(errorMessage).toBeInTheDocument();
  });
});

test('renders all firstName, lastName and email text when submitted. Does NOT render message if message is not submitted.', async () => {
  render(<ContactForm />);
  const firstNameInput = screen.getByLabelText(/first name/i);
  userEvent.type(firstNameInput, 'tester');
  const lastNameInput = screen.getByLabelText(/last name/i);
  userEvent.type(lastNameInput, 'mctest');
  const emailInput = screen.getByLabelText(/email/i);
  userEvent.type(emailInput, 'test@test.com');

  const submitButton = screen.getByRole('button', { name: /submit/i });
  userEvent.click(submitButton);

  await waitFor(() => {
    const firstNameDisplay = screen.getByTestId('firstnameDisplay');
    const lastNameDisplay = screen.getByTestId('lastnameDisplay');
    const emailDisplay = screen.getByTestId('emailDisplay');
    const messageDisplay = screen.queryByTestId('messageDisplay');

    expect(firstNameDisplay).toBeInTheDocument();
    expect(lastNameDisplay).toBeInTheDocument();
    expect(emailDisplay).toBeInTheDocument();
    expect(messageDisplay).not.toBeInTheDocument();
  });
});

test('renders all fields text when all fields are submitted.', async () => {});
