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
    const [previousPage, SetPreviousPage] = React.useState(0);

    React.useEffect(() => {
        pokeApi.get("/pokemon?offset=0")
            .then(({ data }) => {
                // console.log(data); 
                setPokeData(data);
                setLoadingData(false);
            })
            .catch(err => console.log(err));
    }, []);

    React.useEffect(() => {
        console.log("PAGE_", page)
        console.log("OFFSET", offSet)

        pokeApi.get(`/pokemon?offset=${offSet}`)
            .then(({ data }) => {
                setPokeData(data);
                setLoadingData(false);
            })
            .catch(err => console.log(err));
    }, [offSet])

    const handleItemPagination = (evento, newPageNumber) => {

        if (page == 1 && offSet != 0) {
            setOffSet(0);
            console.log("ainda estou no 1")
        } else {
            SetPreviousPage(page);
            setPage(newPageNumber);
            const newValueOffSet = (((newPageNumber - (previousPage + 1)) * 20) + offSet);
            setOffSet(newValueOffSet);
        }

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