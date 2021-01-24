import React from 'react';
import ReactDOM from 'react-dom';

import "@testing-library/jest-dom";
import Experiences from './Experiences';

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Experiences></Experiences>, div)
})
