import React from "react";
import CircularProgress from '@mui/material/CircularProgress';

const Pokedex = () => {
    const [loadingData, setLoadingData] = React.useState(true);
    // const [pokeData, setPokeData] = React.useState({});
    return (
        <React.Fragment>
            <h1>HELLO WORLD: {`${loadingData}`}</h1>
            {loadingData ? <CircularProgress sx={{ display: "block", m: "0 auto" }} /> : <h1>Carregou os poke</h1>}
        </React.Fragment>
    )
}

export default Pokedex;