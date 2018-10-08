import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div>
                <h1>Bienvenue sur l'accueil</h1>
                <Link to="/"> Retour à l'accueil </Link>
                {this.props.match.params.productNumber}
            </div>
        );
    }
}

export default Home;