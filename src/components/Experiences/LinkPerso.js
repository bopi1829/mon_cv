import React from 'react'
import './Experiences.css';


export default class LinkPerso extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="LinkPerso">
                <h3>Liens personnels :</h3>
                <p>
                    <a href="https://github.com/bopi1829" target="_blank" style={{paddingRight: '20px'}}>
                    <img src="https://img.icons8.com/fluent-systems-filled/100/000000/github.png" style={{marginRight: '2.5em'}}/></a>
                    <a href="https://www.linkedin.com/in/pierrick-boucharlat-6699b533/" target="_blank" style={{paddingRight: '20px'}}>
                    <img src="https://img.icons8.com/fluent/100/000000/linkedin.png" style={{marginRight: '2.5em'}}/></a>
                </p>
            </div>
        )
    }
}
