import React from "react";
import Pokedex from "./pages/pokedex";
import MyTeams from "./pages/myTeams";
import {BrowserRouter, Route, Routes} from "react-router-dom"

const AllRoutes = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Pokedex/>} />
                <Route path="/teams" element={<MyTeams/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AllRoutes;