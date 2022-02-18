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
import Typography from '@mui/material/Typography';

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

        },
        topog: {
            fontWeight: "bold",
            letterSpacing: 1.3
        }
    }

    return (
        <Paper sx={myStylesSideMenu.paper} >
            <MenuList >
                <MenuItem component={Link} to="/" onClick={() => setOpenSideMenu(value => !value)} >
                    <BadgeSideMenu pathImg={iconPokeball}
                        title="a pokeball icon"
                        width={17} />
                    <ListItemText>
                        <Typography sx={myStylesSideMenu.topog}>
                            Pokedex
                        </Typography>
                    </ListItemText>
                </MenuItem>
                <MenuItem component={Link} to="/teams" onClick={() => setOpenSideMenu(value => !value)}>
                    <BadgeSideMenu pathImg={iconTeam}
                        title="a triple pokeball icon"
                        width={17} />
                    <ListItemText>
                        <Typography sx={myStylesSideMenu.topog}>
                            My Teams
                        </Typography>
                    </ListItemText>
                </MenuItem>
                <MenuItem component={Link} to="/berries" onClick={() => setOpenSideMenu(value => !value)}>
                    <BadgeSideMenu pathImg={iconBerry}
                        title="a berries icon"
                        width={17} />
                    <ListItemText>
                        <Typography sx={myStylesSideMenu.topog}>
                            Berries
                        </Typography></ListItemText>
                </MenuItem>
            </MenuList>
        </Paper>
    )
}

export default SideMenu;
