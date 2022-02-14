import React from "react";
import pokeApi from "../services/pokeAPI";
import { useParams } from "react-router-dom";

const Detailed = () => {
    const [getPokemonByID, setGetPokemonByID] = React.useState(null);
    let {id} = useParams();

    React.useEffect(() => {
        setGetPokemonByID(id)
        pokeApi.get(`/pokemon/${id}`)
            .then(pokemon => console.log(pokemon.data))
            .catch(err => console.log(err))
    },[])

    return (
        <h1> O cara clicou no pokemon ID: {getPokemonByID}</h1>
    )
}
export default Detailed;