import React from 'react'
import Contact from './Contact';
import './Experiences.css';


export default function LinkPerso()  {
    return(
        <div className="LinkPerso">
            <div className="Icone">
                <h3 className="LinkPerso-H3">Liens personnels :</h3>
                <p className="LinkPerso-Icone">
                    <a href="https://github.com/bopi1829" target="_blank" >
                    <img src="https://img.icons8.com/fluent-systems-filled/100/000000/github.png" style={{marginRight: '2.5em'}} alt="github"/></a>
                    <a href="https://www.linkedin.com/in/pierrick-boucharlat-6699b533/" target="_blank" >
                    <img src="https://img.icons8.com/fluent/100/000000/linkedin.png" style={{marginRight: '2.5em'}} alt="linkedin" /></a>
                </p>
            </div>
            <div className="Contact">
                <Contact/>
            </div>
        </div>
    )
}
