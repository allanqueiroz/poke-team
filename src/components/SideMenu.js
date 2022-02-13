import React from "react";
import { Link } from 'react-router-dom';
import BadgeSideMenu from "../components/Badge";
import iconPokeball from "../assets/icon-pokeball-2.png";
import iconTeam from "../assets/icon-team-2.png";
import iconBerry from "../assets/icon-berry-3.png";

import ListItemText from '@mui/material/ListItemText';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';

const SideMenu = ({ openSideMenu, setOpenSideMenu }) => {
    const myStyles = {
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
                xs: "fixed",
                md: "relative"
            }

        }
    }

    return (
        <Paper sx={myStyles.paper} >
            <MenuList >
                <MenuItem component={Link} to="/" onClick={() => setOpenSideMenu(value => !value)} >
                    <BadgeSideMenu pathImg={iconPokeball}
                        title="a pokeball icon"
                        width={17} />
                    <ListItemText>Pokedex</ListItemText>
                </MenuItem>
                <MenuItem component={Link} to="/teams" onClick={() => setOpenSideMenu(value => !value)}>
                    <BadgeSideMenu pathImg={iconTeam}
                        title="a triple pokeball icon"
                        width={17} />
                    <ListItemText>My Teams</ListItemText>
                </MenuItem>
                <MenuItem component={Link} to="/berries" onClick={() => setOpenSideMenu(value => !value)}>
                    <BadgeSideMenu pathImg={iconBerry}
                        title="a berries icon"
                        width={17} />
                    <ListItemText>Berries</ListItemText>
                </MenuItem>
            </MenuList>
        </Paper>
    )
}

export default SideMenu;
