import React from 'react';
import './TitleCV.css'

export default class TitleCV extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return(
            <div className="TitleCV">
                <h1>Développeur React JS</h1>
                <h2>{this.props.firstName} {this.props.lastName}</h2>
            </div>
        )
    }
}
