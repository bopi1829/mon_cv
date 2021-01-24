import React from 'react';
import { render, screen } from '@testing-library/react';
import Formations from './Formations';

test('renders Mike Codeur', () => {
  render(<Formations />);
  const linkElement = screen.getByText(/Mike Codeur/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders 26 Academy', () => {
    render(<Formations />);
    const linkElement = screen.getByText(/26 Academy/i);
    expect(linkElement).toBeInTheDocument();
  });
  
test('renders Linkedin', () => {
    render(<Formations />);
    const linkElement = screen.getByText(/LinkedIn/i);
    expect(linkElement).toBeInTheDocument();
})
