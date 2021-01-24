import React from 'react';
import './Competences.css';

export default function Competences() {
    return(
        <div className="Competences">
            <div className="Competences-tech">
                <h3 className="Competences-tech-h3">Compétences techniques</h3>
                <p className="Competences-p">
                    <ul>
                        <li>JavaScript et framework React JS</li>
                        <li>WordPress et plugin Elementor</li>
                        <li>PHP et MySQL et framework Laravel et Symfony</li>
                        <li>HTML et CSS</li>
                    </ul>
                </p>
            </div>
            <div className="Competences-pro">
                <h3 className="Competences-tech-h3">Qualités professionnelles</h3>
                <p className="Competences-p">
                    <ul>
                        <li>Autonomie de travail</li>
                        <li>Capacité d'adaptation</li>
                        <li>Persévérance</li>
                        <li>Capacité d'écoute et de propositions</li>
                    </ul>
                </p>
            </div>
        </div>
    )
}
