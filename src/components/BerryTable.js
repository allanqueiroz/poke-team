import React from "react";
import pokeApi from "../services/pokeAPI";

import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

const BerryTable = ({ berriesData }) => {
    const [berries, setBerries] = React.useState([]);
    const myStyleBerryTable = {
        bodyTableRow: {
            '&:hover': {
                backgroundColor: "#f1f1f1",
            },
        }
    }

    React.useEffect(() => {
        if (berriesData.results.length) {
            berriesData.results.map(berry => {
                pokeApi.get(`https://pokeapi.co/api/v2/item/${berry.name}-berry/`)
                    .then(({ data }) => setBerries(val => [...val, data]))
                    .catch(err => console.log(err))
            })
        }
    }, [])

    return (
        <React.Fragment>
            {
                berries.length ?
                    berries.map(berry => (<TableRow key={berry.id} sx={myStyleBerryTable.bodyTableRow}>
                        <TableCell>{berry.name.replace("-berry", "")}</TableCell>
                        <TableCell>
                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${berry.name}.png`} />
                        </TableCell>
                        <TableCell> {berry.effect_entries.map(effc => effc.effect)}</TableCell>
                        <TableCell>{berry.category.name}</TableCell>
                        <TableCell>{berry.cost}</TableCell>
                    </TableRow>))
                    : null
            }
        </React.Fragment>
    )
}

export default BerryTable;

