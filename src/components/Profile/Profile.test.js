import Profile from "./Profile"
import React from 'react';
import ReactDOM from 'react-dom';
import "@testing-library/jest-dom";

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Profile></Profile>, div)
})
