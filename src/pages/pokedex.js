import React from "react";
import MenuBar from '../components/MenuBar';
import SideMenu from "../components/SideMenu";

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';

const LoadingButton = (props) => {
    return (
        <button
            onClick={() => props.setLoading(value => !value)}
            style={{ display: "block", marginBottom: 50, padding: 10 }}
        >
            {props.loading ? "StopLoading" : "Load"}
        </button>
    )
}

const Pokedex = () => {
    const [loadingData, setLoadingData] = React.useState(true);
    // const [pokeData, setPokeData] = React.useState({});
    return (
        <React.Fragment>
            <MenuBar />
            <Box sx={{ display: "flex", minHeight: "100vh",  }}>
                <SideMenu />
                <Container maxWidth="lg" >
                    <h1>HELLO WORLD: {`${loadingData}`}</h1>
                    <LoadingButton loading={loadingData} setLoading={setLoadingData} />
                    {loadingData ? <CircularProgress sx={{ display: "block", m: "0 auto" }} /> : <h1>Carregou os poke</h1>}
                </Container>
            </Box>
        </React.Fragment>
    )
}

export default Pokedex;