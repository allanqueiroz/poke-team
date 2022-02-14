import React from "react";
import Pokedex from "./pages/pokedex";
import MyTeams from "./pages/myTeams";
import Berries from "./pages/berries";
import Detailed from "./pages/detailed";
import { Route, Routes } from "react-router-dom"

import Container from '@mui/material/Container';

const AllRoutes = () => {
    return (
            <Container maxWidth="lg" >
                <Routes>
                    <Route path="/" element={<Pokedex />} exact />
                    <Route path="/teams" element={<MyTeams />} />
                    <Route path="/berries" element={<Berries/>} />
                    <Route path="/detailed/:id" element={<Detailed/>}/>
                </Routes>
            </Container>
    )
}

export default AllRoutes;