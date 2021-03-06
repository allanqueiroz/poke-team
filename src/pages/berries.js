import React from "react";
import pokeApi from "../services/pokeAPI";
import BerryTable from "../components/BerryTable";

import { Typography, TableContainer, TableHead, TableCell, TableBody, TableRow, Table} from "@mui/material";

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
            <Typography variant="h2" sx={myStylesBerries.typog}>Berries from pokemon world</Typography>
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