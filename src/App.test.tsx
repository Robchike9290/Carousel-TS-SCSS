import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders Card One', () => {
  render(<App />);
  const linkElement = screen.getByText(/Card One/i);
  expect(linkElement).toBeInTheDocument();
});

test('Renders Card Two', () => {
  render(<App />);
  const linkElement = screen.getByText(/Card Two/i);
  expect(linkElement).toBeInTheDocument();
});

test('Renders Card Three', () => {
  render(<App />);
  const linkElement = screen.getByText(/Card Three/i);
  expect(linkElement).toBeInTheDocument();
});

test('Renders Card Four', () => {
  render(<App />);
  const linkElement = screen.getByText(/Card Four/i);
  expect(linkElement).toBeInTheDocument();
});

test('Renders Card Five', () => {
  render(<App />);
  const linkElement = screen.getByText(/Card Five/i);
  expect(linkElement).toBeInTheDocument();
});
