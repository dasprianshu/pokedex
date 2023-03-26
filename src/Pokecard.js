import React, { Component } from 'react';
import './Pokecard.css';
const POKE_API = 
"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number)
class Pokecard extends Component {
    render() {
        let imgsrc = `${POKE_API}${padToThree(this.props.id)}.png`;
        return (
        <div className='Pokecard'>
            <h2>{this.props.name}</h2>
            <img src={imgsrc} alt='Pokemon-Photo'/>
            <p>Type : {this.props.type}</p>
            <p>EXP : {this.props.exp}</p>
        </div>
        )
    }
}

export default Pokecard;