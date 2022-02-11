import React from "react";
import MenuBar from '../components/MenuBar';

import Container from '@mui/material/Container';

const Pokedex = () => {
    return (
        <React.Fragment>
            <h1>Teste de rota</h1>
            <MenuBar />
            <Container maxWidth="sm">
                <h1>Hello worldd</h1>
            </Container>
        </React.Fragment>
    )
}

export default Pokedex;