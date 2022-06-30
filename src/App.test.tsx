import React from 'react';
import { render, screen } from '@testing-library/react';
import Carousel from './components/Carousel';

describe('Carousel', () => {
  test('Renders a card with text \'Card One\'', () => {
    render(<Carousel />);
    const linkElement = screen.getByText(/Card One/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('Renders a card with text \'Card Two\'', () => {
    render(<Carousel />);
    const linkElement = screen.getByText(/Card Two/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('Renders a card with text \'Card Three\'', () => {
    render(<Carousel />);
    const linkElement = screen.getByText(/Card Three/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('Renders a card with text \'Card Four\'', () => {
    render(<Carousel />);
    const linkElement = screen.getByText(/Card Four/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('Does not render a card with text \'Card Five\'', () => {
    render(<Carousel />);
    const linkElement = screen.queryByText(/Card Five/i);
    expect(linkElement).not.toBeInTheDocument();
  });

  test('Renders a total of four cards', function renderCarousel() {
    render(<Carousel />);
    let cards: HTMLElement[] = screen.getAllByTestId('card');
    expect(cards.length).toEqual(4);
  })
})

