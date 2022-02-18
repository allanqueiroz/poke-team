import React from "react";
import pokeApi from "../services/pokeAPI";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Typography } from "@mui/material";

const Berries = () => {
    const [allBerries, setAllBerries] = React.useState([]);
    const [berry, setBerry] = React.useState([]);

    const myStylesBerries = {
        typog: {
            m: 3,
        },
        header: {
            backgroundColor: "#ffde00",
        },
        headTableCell: {
            fontSize: "1em",
        },
        bodyTableCell: {
            '&:hover': {
                backgroundColor: "#f1f1f1",
            },
        }

    }

    React.useEffect(() => {
        pokeApi.get(`/berry?limit=10`)
            .then(({ data }) => setAllBerries(data.results))
            .catch(err => console.log("UmError:", err))
    }, [])

    React.useEffect(() => {
        allBerries.map(item => {
            pokeApi.get(`https://pokeapi.co/api/v2/item/${item.name}-berry/`)
                .then(({ data }) => setBerry(v => [...v, data]))
                .catch(err => console.log(err))
        })
    }, [allBerries])

    return (
        <React.Fragment>
            <Typography variant="h2" sx={myStylesBerries.typog}>BERRIES FROM POKEMON WORLD </Typography>
            <TableContainer>
                <Table>
                    <TableHead sx={myStylesBerries.header}>
                        <TableRow>
                            <TableCell sx={myStylesBerries.headTableCell}>Berry</TableCell>
                            <TableCell sx={myStylesBerries.headTableCell}>Image</TableCell>
                            <TableCell sx={myStylesBerries.headTableCell}>Effect</TableCell>
                            <TableCell sx={myStylesBerries.headTableCell}>Category</TableCell>
                            <TableCell sx={myStylesBerries.headTableCell}>Cost</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            berry.map(item => {
                                return (
                                    <TableRow key={item.id} sx={myStylesBerries.bodyTableCell}>
                                        <TableCell>{item.name.replace("-berry","")}</TableCell>
                                        <TableCell>
                                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${item.name}.png`} />
                                        </TableCell>
                                        <TableCell>
                                            {
                                                item.effect_entries.map(effc => effc.effect)
                                            }
                                        </TableCell>
                                        <TableCell>{item.category.name}</TableCell>
                                        <TableCell>{item.cost}</TableCell>
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer>

        </React.Fragment>
    )
}
export default Berries;