import React from "react";
import pokeApi from "../services/pokeAPI";
import { useParams } from "react-router-dom";
import { Typography, Box } from "@mui/material";

const Detailed = () => {
    const [getPokemonByID, setGetPokemonByID] = React.useState([]);
    const { id } = useParams();

    const myStyleDetailed = {
        box: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 30,
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2),0 6px 20px 0 rgba(0, 0, 0, 0.19)"
        },
        boxHeader: {
            backgroundColor: "#555",
            width: "100%"
        },
        typography: {
            padding: 5,
            marginLeft: 5,
            color: "#fff"
        }
    }

    React.useEffect(() => {
        pokeApi.get(`/pokemon/${id}`)
            .then(pokemon => setGetPokemonByID([pokemon.data]))
            .catch(err => console.log(err))
    }, [])

    return (
        <Box style={myStyleDetailed.box} >
            {
                getPokemonByID ? getPokemonByID.map(pokemon => (<React.Fragment key={id}>
                    <Box style={myStyleDetailed.boxHeader}>
                        <Typography style={myStyleDetailed.typography} variant="h4"> {pokemon.name.toUpperCase()}</Typography>
                        <Typography style={myStyleDetailed.typography} variant="h6">Nº Pokedex: {pokemon.id}</Typography>
                    </Box>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} width="350" alt="a pokemon image"/>
                    <Typography variant="h6" >Altura: {(pokemon.height) / 10} m</Typography>
                    <Typography variant="h6" >Peso: {(pokemon.weight) / 10} Kg</Typography>
                    <Typography variant="h6" sx={{marginBottom: 2}}>Exp. base: {pokemon.base_experience}</Typography>
                </React.Fragment>)) : <h1>Loading</h1>
            }
        </Box>  
    )
}
export default Detailed;