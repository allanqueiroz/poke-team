import React from "react";
import pokeApi from "../services/pokeAPI";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const Berries = () => {
    const [allBerries, setAllBerries] = React.useState([]);
    const [berry, setBerry] = React.useState([]);

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
            <h1>Berries page 🍍️🍇️</h1>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Berry</TableCell>
                            <TableCell>Image</TableCell>
                            <TableCell>Effect</TableCell>
                            <TableCell>Category</TableCell>
                            <TableCell>Cost</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            berry.map(item => {
                                return (
                                    <TableRow key={item.id}>
                                        <TableCell>{item.name}</TableCell>
                                        <TableCell>img</TableCell>
                                        <TableCell>efeito</TableCell>
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