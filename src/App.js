import React from 'react';
import AllRoutes from "./routes";
import MenuBar from './components/MenuBar';
import SideMenu from "./components/SideMenu";

import { BrowserRouter} from "react-router-dom"

import Box from '@mui/material/Box';

const App = () => {
    return (
        <React.Fragment>
            <BrowserRouter>
                <MenuBar />
                <Box sx={{ display: "flex", minHeight: "100vh", }}>
                    <SideMenu />
                    <AllRoutes />
                </Box>
            </BrowserRouter>
        </React.Fragment>

    )
}

export default App;
