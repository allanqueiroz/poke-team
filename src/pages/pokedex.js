import React from "react";
import CircularProgress from '@mui/material/CircularProgress';
import pokeApi from "../services/pokeAPI";
import PokeCard from "../components/PokeCard";
import { usePokeData } from "../hooks/pokeDataContext";

import { Box, Pagination, Container, Typography } from '@mui/material';

const Pokedex = () => {
    const { pokeData, setPokeData } = usePokeData();
    const [loadingData, setLoadingData] = React.useState(true);
    const [page, setPage] = React.useState(1);
    const [offSet, setOffSet] = React.useState(0);
    const myStylesPokedex = {
        container: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        },
        typog: {
            m: 3,
        },
        box: {
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
        },
        pagination: {
            margin: "10px 0px",
        }
    }

    React.useEffect(() => {
        pokeApi.get(`/pokemon?offset=${offSet}`)
            .then(({ data }) => {
                setPokeData(data);
                setLoadingData(false);
            })
            .catch(err => console.log(err));
    }, [offSet])

    const handleItemPagination = (e, newPageNumber) => {
        setPage(newPageNumber);
        setOffSet((newPageNumber * 20) - 20);
    }

    return (
        <Container sx={myStylesPokedex.container}>
            <Typography variant="h2" sx={myStylesPokedex.typog}>Pokemons</Typography>
            {
                loadingData ?
                    <CircularProgress sx={{ display: "block", m: "0 auto" }} />
                    : <Box sx={myStylesPokedex.box}>
                        <PokeCard pokeAPIData={pokeData} />
                    </Box>
            }
            <Pagination page={page} onChange={handleItemPagination} count={45} shape="rounded" sx={myStylesPokedex.pagination} />
        </Container>
    )
}
export default Pokedex;