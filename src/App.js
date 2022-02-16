import React from 'react';
import AllRoutes from "./routes";
import MenuBar from './components/MenuBar';
import SideMenu from "./components/SideMenu";
import { SearchProvider } from './hooks/searchContext';

import { BrowserRouter } from "react-router-dom"

import Box from '@mui/material/Box';

const App = () => {
    const [openSideMenu, setOpenSideMenu] = React.useState(false);
    return (
        <React.Fragment>
            <BrowserRouter>
                <SearchProvider>
                    <MenuBar setOpenSideMenu={setOpenSideMenu} />
                    <Box sx={{ display: "flex", minHeight: "100vh", }}>
                        <SideMenu openSideMenu={openSideMenu} setOpenSideMenu={setOpenSideMenu} />
                        <AllRoutes />
                    </Box>
                </SearchProvider>
            </BrowserRouter>
        </React.Fragment>

    )
}

export default App;
