import React from "react";
import Pokedex from "./pages/pokedex";
import MyTeams from "./pages/myTeams";
import Container from '@mui/material/Container';
import { Route, Routes } from "react-router-dom"

const AllRoutes = () => {
    return (
            <Container maxWidth="lg" >
                <Routes>
                    <Route path="/" element={<Pokedex />} exact />
                    <Route path="/teams" element={<MyTeams />} />
                </Routes>
            </Container>
    )
}

export default AllRoutes;