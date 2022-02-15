import React from "react";
import CircularProgress from '@mui/material/CircularProgress';
import pokeApi from "../services/pokeAPI";
import PokeCard from "../components/PokeCard";

import Container from '@mui/material/Container';
import Pagination from '@mui/material/Pagination';

const Pokedex = () => {
    const myStylesPokedex = {
        container: {
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
        },
        pagination: {
            margin: "10px 0px",
        }
    }

    const [loadingData, setLoadingData] = React.useState(true);
    const [pokeData, setPokeData] = React.useState({});
    const [page, setPage] = React.useState(1);
    const [offSet, setOffSet] = React.useState(0);

    React.useEffect(() => {
        pokeApi.get("/pokemon?offset=0")
            .then(({ data }) => {
                setPokeData(data);
                setLoadingData(false);
            })
            .catch(err => console.log(err));
    }, []);

    React.useEffect(() => {
        pokeApi.get(`/pokemon?offset=${offSet}`)
            .then(({ data }) => {
                setPokeData(data);
                setLoadingData(false);
            })
            .catch(err => console.log(err));
    }, [offSet])

    const handleItemPagination = (evento, newPageNumber) => {
        setPage(newPageNumber);
        setOffSet((newPageNumber * 20) - 20);
    }

    return (
        <Container sx={myStylesPokedex.container}>
            {loadingData ?
                <CircularProgress sx={{ display: "block", m: "0 auto" }} />
                :
                <PokeCard pokeAPIData={pokeData} />
            }
            <Pagination page={page} onChange={handleItemPagination} count={45} shape="rounded" sx={myStylesPokedex.pagination} />
        </Container>
    )
}

export default Pokedex;