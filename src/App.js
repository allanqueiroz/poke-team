import React from 'react';
import AllRoutes from "./routes";
import MenuBar from './components/MenuBar';
import SideMenu from "./components/SideMenu";
import BasicSpeedDial from './components/BasicSpeedDial';
import { PokeDataProvider } from './hooks/pokeDataContext';
import { SearchProvider } from './hooks/searchContext';
import { MyTeamProvider } from './hooks/myTeamContext';
import { BrowserRouter } from "react-router-dom"

import Box from '@mui/material/Box';

const App = () => {
    const [openSideMenu, setOpenSideMenu] = React.useState(false);
    return (
        <React.Fragment>
            <BrowserRouter>
                <PokeDataProvider>
                    <SearchProvider>
                        <MyTeamProvider>
                            <MenuBar setOpenSideMenu={setOpenSideMenu} />
                            <Box sx={{ display: "flex", minHeight: "100vh", }}>
                                <SideMenu openSideMenu={openSideMenu} setOpenSideMenu={setOpenSideMenu} />
                                <AllRoutes />
                                <BasicSpeedDial/>
                            </Box>
                        </MyTeamProvider>
                    </SearchProvider>
                </PokeDataProvider>
            </BrowserRouter>
        </React.Fragment>
    )
}
export default App;
