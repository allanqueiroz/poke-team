import React from "react";
import CircularProgress from '@mui/material/CircularProgress';
import pokeApi from "../services/pokeAPI";
import PokeCard from "../components/PokeCard";

import Container from '@mui/material/Container';

const Pokedex = () => {
    const myStylesPokedex = {
        container:{
            display: "flex",
            flexWrap: "wrap",
            justifyContent:"center",
        }
    }

    const [loadingData, setLoadingData] = React.useState(true);
    const [pokeData, setPokeData] = React.useState({});

    React.useEffect(() => {
        pokeApi.get("/pokemon")
            .then(({ data }) => {
                // console.log(data); 
                setPokeData(data);
                setLoadingData(false);
            })
            .catch(err => console.log(err));
    }, [])

    return (
        <Container sx={myStylesPokedex.container}>
            {loadingData ?
                <CircularProgress sx={{ display: "block", m: "0 auto" }} />
                :
                <PokeCard pokeAPIData={pokeData}/>
            }
        </Container>
    )
}

export default Pokedex;