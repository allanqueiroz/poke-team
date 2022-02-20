import React from "react";
import { Link } from 'react-router-dom';

import BadgeSideMenu from "../components/Badge";
import {Typography, MenuItem, ListItemText} from '@mui/material';

const ItemFromMenu = ({moveTo, icon, title, nameItem, setOpenSideMenu}) => {
    const myStylesSideMenu = {
        topog: {
            fontWeight: "bold",
            letterSpacing: 1.3
        }
    }
    return (
        <MenuItem component={Link} to={moveTo} onClick={() => setOpenSideMenu(value => !value)} >
            <BadgeSideMenu pathImg={icon}
                title={title}
                width={17} />
            <ListItemText>
                <Typography sx={myStylesSideMenu.topog}>
                    {nameItem}
                </Typography>
            </ListItemText>
        </MenuItem>
    )
}
export default ItemFromMenu;