import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class History extends Component {
    render() {
        return (
            <div>
                <h1>Notre histoire</h1>
                <Link to="/"> Retour à l'accueil </Link>
                {this.props.match.params.productNumber}
            </div>
        );
    }
}

export default History;