import React from 'react';
import './Formations.css';

export default function Formations() {
    return(
        <div className="Formations-App">
            <h3 className="Formations-title">
                Formation React JS Entreprise
            </h3>
            <p className="Formations-link" style={{textAlign: 'left'}}><em>Avec <a href="https://formations.mikecodeur.com/react-js-entreprise" target="_blank">Mike Codeur</a></em></p>
            <p className="Formations-p">Apprendre à créer des applications web avec le framework React JS.
            Comprendre la philosophie de React, orientée composants.
            Etre capable de faire un site web en React JS :
                <ul>
                    <li>Concevoir, Coder et Déployer</li>
                    <li>ES2015 et syntaxe JSX</li>
                    <li>Les webpacks</li>
                    <li>Conception d'une application avec <strong>Create React App</strong> pour apprendre à créer des composants avec ou sans Props ou State et les manipuler</li>
                    <li>Les starters Packs (boilerplate, next.js)</li>
                    <li>Initialisation aux <strong>Tests Unitaires</strong></li>        
                    <li>
                        Application web, avec <strong>React Boilerplate</strong>, qui va permettre de rechercher des personnages Marvel (via API Marvel)
                        <ul>
                            <li>Utilisation de Material-UI</li>
                            <li>Appel d'API Marvel</li>
                            <li>Création de route avec React Router</li>
                            <li>Internationalisation</li>
                            <li>Déploiement sur un serveur (Apache, Node, Netlify)</li>
                        </ul>
                    </li>
                </ul>
            </p>
            <h3 className="Formations-title">
                Formation PHP
            </h3>
            <p className="Formations-link" style={{textAlign: 'left'}}><em>Avec <a href="https://www.26academy.com/cours/devenir-un-developpeur-php-2/#programme" target="_blank">26 Academy</a></em></p>
            <p className="Formations-p">Apprendre les bases de PHP sur la plateforme <a href="https://www.linkedin.com/in/pierrick-boucharlat-6699b533/" target="_blank">LinkedIn</a> Learning réparti en plusieurs modules : 
                <ul>
                    <li>La conception orientée objet</li>
                    <li>L'essentiel de PHP 7</li>
                    <li>Les Tests Unitaires simplifiés avec PHPUnit</li>
                    <li>PHP 5 : L'API interne et la gestion de la mémoire</li>
                    <li>L'essentiel de Symfony 4 et Laravel 5.7</li>
                    <li>Découverte d'API Plateform</li>
                </ul>
            </p>
        </div>
    )
}
