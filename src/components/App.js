import React, { useState } from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import PokemonList from './PokemonList';
import LoadingSpinner from './LoadingSpinner';
import usePokemonData from '../hooks/usePokemonData';
import '../styles/App.css';

function App() {
  const { pokemonData, isLoading, error } = usePokemonData();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPokemon = pokemonData.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <Header />
      <SearchBar onSearch={setSearchTerm} />
      {isLoading && <LoadingSpinner />}
      {error && <p className="error-message">{error}</p>}
      {!isLoading && !error && (
        <PokemonList pokemon={filteredPokemon} />
      )}
    </div>
  );
}

export default App;