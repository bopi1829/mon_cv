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
                <p className="Experiences-p">
                    Coder en React JS pour mettre en application la formation React JS Enterprise, utilisation de props, création de plusieurs composants, imbrication de composants. Présentation des différentes formations avec le détail de celles-ci et les différentes expériences professionnelles antérieures.
                    </p>
                <h3>Gérant site e-commerce</h3>
                <p className="Experiences-p">
                    Site <strong>Joy et Cie</strong>, créé sous le CMS propriétaire Taoma (CMS développé par une agence web)<br/>
                    Gestion du back-office, création de contenus (articles, nouveaux articles), gestion des commandes et des stocks.<br />
                    Garde d'animaux, taxi animalier et éducation canine
                </p>
                <h3>Attaché commercial</h3>
                <p className="Experiences-p">
                    Pour la société <strong>Piguy Sport</strong>, je m'occupais de la distribution de produits pour les golfs et magasins de golfs pour la région Sud-Est (04, 05, 06, 13, 30, 34, 84) et Corse.
                </p>
                <h3>Responsable Accueil</h3>
                <p className="Experiences-p">
                    Pour le <strong>Golf de Pont-Royal</strong>, responsable de l'annexe du Golf de la Durance, centre d'entraînement, gestions des stages, cours, cartes de seaux et droits de jeu, compétitions, gestions des stocks (snack, produits en vente, choix des différentes collections).<br />
                    Gestion du site internet avec l'ajout de contenu depuis le back-office.
                </p>
                <h3>Conseiller de vente</h3>
                <p className="Experiences-p">
                    Pour la société <strong>Space Golf</strong>, magasin spécialisé dans la vente d'articles de golf, gestions des stocks et des commandes clients.
                </p>
                <LinkPerso />
            </div>
        )
    }
}
