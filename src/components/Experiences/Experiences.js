import React from 'react';
import './Experiences.css';
import LinkPerso from './LinkPerso';

export default class Experiences extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="Experiences">
                <h3>Création CV en ligne</h3>
                <p className="Experiences-p">Coder en React JS pour mettre en application la formation React JS Enterprise, utilisation de props, création de plusieurs composants. Présentation des différentes formations avec le détail de celles-ci.</p>
                <LinkPerso />
            </div>
        )
    }
}
