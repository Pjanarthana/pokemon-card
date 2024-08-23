import { useState, useEffect } from 'react';
import { fetchPokemonList, fetchPokemonDetails } from '../utils/api';

const usePokemonData = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { results } = await fetchPokemonList();
        const detailedData = await Promise.all(
          results.map(pokemon => fetchPokemonDetails(pokemon.url))
        );
        setPokemonData(detailedData);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { pokemonData, isLoading, error };
};

export default usePokemonData;