import React from 'react';
import '../styles/PokemonCard.css';

const PokemonCard = ({ pokemon }) => (
  <div className="pokemon-card">
    <img
      className="pokemon-image"
      src={pokemon.sprites.front_default}
      alt={pokemon.name}
    />
    <h2 className="pokemon-name">{pokemon.name}</h2>
    <div className="pokemon-types">
      {pokemon.types.map((type) => (
        <span key={type.type.name} className="type-badge">
          {type.type.name}
        </span>
      ))}
    </div>
  </div>
);

export default PokemonCard;