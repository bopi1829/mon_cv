import React from 'react';
import Pierrick from './Pierrick.jpg';
import './TitleCV.css'

export default class TitleCV extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return(
            <div className="Title">
                <div>
                    <img className="Img" src={Pierrick} alt="Pierrick" />
                </div>
                <div className="TitleCV">
                    <h1 className="TitleCV-H1">Développeur React JS</h1>
                    <h2 className="TitleCV-H2">{this.props.firstName} {this.props.lastName}</h2>
                </div>
            </div>
        )
    }
}
