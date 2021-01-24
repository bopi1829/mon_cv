import TitleCV from './TitleCV'
import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import "@testing-library/jest-dom";

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<TitleCV></TitleCV>, div)
})

const props = {
    firstName: "Pierrick",
    lastName: "Boucharlat"
}
describe("TitleCV render good title", () => {
    it("TitleCV render good title", () => {
        const titleCv = render(<TitleCV {...props} />)
        expect(titleCv).toBeTruthy()
    })
} )
