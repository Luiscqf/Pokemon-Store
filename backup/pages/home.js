import React, { Component, useState, useEffect } from 'react';
import { getAllPokemon } from './services/pokemon';
import App from '../containers/App';
// import Api from './api';
const Home =() => (
    <App>
        <h1>Pokemon Shop</h1>
    </App>
)

function App2() {
    const [pokemonData, setPokemonData] = useState([]);
    const [nextUrl, setNextUrl] = useState('');
    const [prevUrl, setPrevUrl] = useState('');
    const [loading, setLoading] = useState(true);
    const initialUrl = 'https://api.reinaldowft.com/pokestore?page=1&limit=150'

    useEffect(() => {
        async function fetchData() {
            let response = await getAllPokemon(initialUrl);
            console.log(response);
            setNextUrl(response.next);
            setPrevUrl(response.previous);
            setLoading(false);
        }
        fetchData();
    }, [])
    return (
        <div>
            { loading ? <h1>Loading...</h1> : (
                <h1>Data is fetched</h1>
            )}
        </div>
    )
}

export default Home;