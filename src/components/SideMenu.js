import React from "react";
import ItemFromMenu from "./ItemMenu";
import iconPokeball from "../assets/icon-pokeball-2.png";
import iconTeam from "../assets/icon-team-2.png";
import iconBerry from "../assets/icon-berry-3.png";
import iconEgg from "../assets/icon-egg-2.png"

import {Paper, MenuList} from '@mui/material';

const SideMenu = ({ openSideMenu, setOpenSideMenu }) => {
    
    const myStylesSideMenu = {
        paper: {
            display: {
                xs: openSideMenu ? "block" : "none",
                md: "block"
            },
            width: {
                xs: "100%",
                md: "20%"
            },
            maxWidth: '100%',
            backgroundColor: "#3b4cca",
            mt: 0.2,
            color: "#fff",
            position: {
                xs: "absolute",
                md: "relative"
            },
            zIndex: 33
        }
    }

    return (
        <Paper sx={myStylesSideMenu.paper} >
            <MenuList >
                <ItemFromMenu setOpenSideMenu={setOpenSideMenu} moveTo="/" icon={iconPokeball} title="a pokeball icon" nameItem="Pokedex" />
                <ItemFromMenu setOpenSideMenu={setOpenSideMenu} moveTo="/teams" icon={iconTeam} title="a triple pokeball icon" nameItem="My Teams" />
                <ItemFromMenu setOpenSideMenu={setOpenSideMenu} moveTo="/berries" icon={iconBerry} title="a berries icon" nameItem="Berries" />
                <ItemFromMenu setOpenSideMenu={setOpenSideMenu} moveTo="/info" icon={iconEgg} title="a egg icon" nameItem="Gráficos" />
            </MenuList>
        </Paper>
    )
}
export default SideMenu;
