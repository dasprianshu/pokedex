import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css'

class Pokedex extends Component {
    render(){

        return (
            <div className='Pokedex'>

                {/* <h1>{this.props.name}</h1> */}

                <div className='Pokedex-headers'>
                    <p id='hand'>{this.props.name}</p>
                    <p>Total Experience : {this.props.total}</p>
                    {(this.props.iswinner) ? (<p className='isWinner'>WINNER!!!</p>) : (<p className='isLoser'>LOSER!</p>)}
                </div>

                <div className='Pokedex-cards'>
                {this.props.pokemons.map((p) => (
                    <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
                ))}
                </div>
            </div>
        );
    }
}

export default Pokedex;