import React from "react";
import {Link} from 'react-router-dom';
import BadgeSideMenu from "../components/Badge";
import iconPokeball from "../assets/icon-pokeball-2.png"
import iconTeam from "../assets/icon-team-2.png"

import ListItemText from '@mui/material/ListItemText';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';

const SideMenu = () => {
    return (
            <Paper sx={{ width: "20%", maxWidth: '100%', backgroundColor: "#3b4cca", mt: 0.2, color: "#fff" }}>
                <MenuList>
                    <Link to="/">
                        <MenuItem >
                            <BadgeSideMenu pathImg={iconPokeball} title="a pokeball icon" width={17} />
                            <ListItemText>Pokedex</ListItemText>
                        </MenuItem>
                    </Link>
                    <Link to="/teams">
                        <MenuItem>
                            <BadgeSideMenu pathImg={iconTeam} title="a triple pokeball icon" width={17} />
                            <ListItemText>My Teams</ListItemText>
                        </MenuItem>
                    </Link>
                </MenuList>
            </Paper>
    )
}

export default SideMenu;