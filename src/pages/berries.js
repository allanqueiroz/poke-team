import React from "react";
import pokeApi from "../services/pokeAPI";
import BerryTable from "../components/BerryTable";

import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableContainer from '@mui/material/TableContainer';
import { Typography } from "@mui/material";

const Berries = () => {
    const [allBerries, setAllBerries] = React.useState([]);
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
    }

    React.useEffect(() => {
        pokeApi.get(`/berry`)
            .then(({ data }) => { setAllBerries(data); })
            .catch(err => console.log("UmError:", err))
    }, [])

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
                        {allBerries.results ? <BerryTable berriesData={allBerries} /> : null}
                    </TableBody>
                </Table>
            </TableContainer>
        </React.Fragment>
    )
}
export default Berries;