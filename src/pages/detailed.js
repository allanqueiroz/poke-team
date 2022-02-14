import React from "react";
import pokeApi from "../services/pokeAPI";
import { useParams } from "react-router-dom";
import {Typography } from "@mui/material";

const Detailed = () => {
    const [getPokemonByID, setGetPokemonByID] = React.useState([]);
    const {id} = useParams();

    React.useEffect(() => {
        pokeApi.get(`/pokemon/${id}`)
            .then(pokemon => setGetPokemonByID([pokemon.data]))
            .catch(err => console.log(err))
    },[])

    return (
        <React.Fragment>
            {
                getPokemonByID ? getPokemonByID.map(pokemon=>(<React.Fragment key={id}>
                    <Typography variant="h4" component="div">Nome: {pokemon.name}</Typography>
                    <Typography variant="h4" component="div">Nº Pokedex: {pokemon.id}</Typography>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} />
                    <Typography>Altura: {(pokemon.height)/10} m</Typography>
                    <Typography>Peso: {(pokemon.weight)/10} Kg</Typography>
                    <Typography>Exp. base: {pokemon.base_experience}</Typography>
                </React.Fragment>)) : <h1>Loading</h1>
            }
        </React.Fragment>
    )
}
export default Detailed;