import React from 'react';
import "@testing-library/jest-dom";
import Experiences from './Experiences';
import { render, screen } from '@testing-library/react';

test('renders Github', () => {
    render(<Experiences />);
    const linkElement = screen.getByAltText(/github/i);
    expect(linkElement).toBeInTheDocument()
})

test('renders LinkedIn', () => {
    render(<Experiences />);
    const linkElement = screen.getByAltText(/linkedin/i);
    expect(linkElement).toBeInTheDocument()
})
