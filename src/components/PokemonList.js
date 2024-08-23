import React from 'react';
import PokemonCard from './PokemonCard';
import '../styles/PokemonList.css';

const PokemonList = ({ pokemon }) => (
  <div className="pokemon-list">
    {pokemon.map((p) => (
      <PokemonCard key={p.id} pokemon={p} />
    ))}
  </div>
);

export default PokemonList;