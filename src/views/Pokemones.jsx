import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// Usando los hooks para guardar estados, guardar info de api, pokemones selecionados, navegar por la app y parametro :name para info 
export default function Pokemones() {
    const [pokemones, setPokemones] = useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState("");
    const { name } = useParams();
    const navigate = useNavigate();
    const [pokemonDetalles, setPokemonDetalles] = useState(null);

    // Consumiendo Pokeapi para cargar las lista de pokemones limite 300
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=300')
            .then(response => response.json())
            .then(data => setPokemones(data.results));
    }, []);

    // Cargando pokemones cuando se selecciona un nombre con el select
    useEffect(() => {
        if (name) {
            fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
                .then(response => response.json())
                .then(data => setPokemonDetalles(data))
                .catch(error => console.error("Error al cargar detalles del Pokémon:", error));
        }
    }, [name]);

    const handleVerDetalle = () => {
        navigate(`/pokemones/${selectedPokemon}`);
    };
    // Renderizando los detalles del pokemon seleccionado si el parametro name está en la url 
    if (name && pokemonDetalles) {
        return (
            <div className="containerPokemon">
                <div className="card-body">
                    <img src={pokemonDetalles.sprites.other['official-artwork'].front_default} alt={pokemonDetalles.name} />
                    <div className="text-content">
                        <h5>{pokemonDetalles.name}</h5>
                        <ul>
                            {pokemonDetalles.stats.map(stat => (
                                <li key={stat.stat.name}>{`${stat.stat.name.toUpperCase()}: ${stat.base_stat}`}</li>
                            ))}
                            <li>Type: {pokemonDetalles.types.map(type => type.type.name).join(', ')}</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    } else {
        // Renderizando el select y el boton para selecionar pokemon
        return (
            <div className="containerForm">
                <h1>Selecciona un Pokémon</h1>
                <select value={selectedPokemon} onChange={(e) => setSelectedPokemon(e.target.value)}>
                    <option value="">Selecciona un Pokemón</option>
                    {pokemones.map(pokemon => (
                        <option key={pokemon.name} value={pokemon.name}>
                            {pokemon.name}
                        </option>
                    ))}
                </select>
                <button onClick={handleVerDetalle} disabled={!selectedPokemon}>
                    Ver detalle
                </button>
            </div>
        );
    }
}



