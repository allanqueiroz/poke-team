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

    React.useEffect(() => {
        pokeApi.get("/pokemon")
            .then(({ data }) => {
                // console.log(data); 
                setPokeData(data);
                setLoadingData(false);
            })
            .catch(err => console.log(err));
    }, []);

    const renderItemPagination = (item, page) => {
        if(page == 1){
            pokeApi.get("/pokemon?offset=0")
            .then(({ data }) => {
                // console.log(data); 
                setPokeData(data);
                setLoadingData(false);
            })
            .catch(err => console.log(err));
        }else if(page == 44){
            pokeApi.get("/pokemon?offset=880")
            .then(({ data }) => {
                // console.log(data); 
                setPokeData(data);
                setLoadingData(false);
            })
            .catch(err => console.log(err));
        }
    }

    return (
        <Container sx={myStylesPokedex.container}>
            {loadingData ?
                <CircularProgress sx={{ display: "block", m: "0 auto" }} />
                :
                <PokeCard pokeAPIData={pokeData} />
            }
            <Pagination siblingCount={0} boundaryCount={0} count={44} shape="rounded"   showFirstButton={true} showLastButton={true} onChange={renderItemPagination} sx={myStylesPokedex.pagination} />
        </Container>
    )
}

export default Pokedex;