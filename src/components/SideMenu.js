import React from "react";
import BadgeSideMenu from "../components/Badge";
import iconPokeball from "../assets/icon-pokeball-2.png"
import iconTeam from "../assets/icon-team-2.png"

import Box from '@mui/material/Box';
import ListItemText from '@mui/material/ListItemText';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const SideMenu = () => {
    return (
        <Paper sx={{ width: "20%", maxWidth: '100%', backgroundColor: "#3b4cca", mt: 0.2, color: "#fff" }}>
            <MenuList>
                <MenuItem >
                    <BadgeSideMenu pathImg={iconPokeball} title="a pokeball icon" width={17} />
                    <ListItemText>Pokedex</ListItemText>
                </MenuItem>
                <MenuItem>
                    <BadgeSideMenu pathImg={iconTeam} title="a pokeball icon" width={17} />
                    <ListItemText>My Teams</ListItemText>
                </MenuItem>
            </MenuList>
        </Paper>

    )
}

export default SideMenu;