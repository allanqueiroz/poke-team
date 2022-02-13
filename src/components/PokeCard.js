import React from "react";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const PokeCard = ({ pokeAPIData }) => {
    const myStylesPokeCard = {
        card: {
            width: {
                xs: "36%",
                md: 180
            },
            m: 3,
        },
        cardMedia: {
            objectFit: "fill",
            height: {
                xs: 100,
                md: 130
            }
        },
        divider: {
            m: 1
        }
    }

    function getIDfromURL(url) { return url.slice(33).replace(/\//g, ""); }
    function handleClickCard(name) {
        console.log(`Clicou no CARD: ${name}`)
    }
    return (
        <React.Fragment>
            {
                pokeAPIData.results.map(pokemon => (
                    <Card sx={myStylesPokeCard.card} key={pokemon.name} onClick={() => handleClickCard(pokemon.name)}>
                        <CardActionArea title={pokemon.name}>
                            <CardMedia
                                component="img"
                                alt={`Pokemon card: ${pokemon.name}`}
                                sx={myStylesPokeCard.cardMedia}
                                image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${getIDfromURL(pokemon.url)}.png`}
                            />
                            <Divider sx={myStylesPokeCard.divider} />
                            <Typography variant="h6" component="div" align="center">
                                {pokemon.name}
                            </Typography>
                        </CardActionArea>
                    </Card>
                ))
            }
        </React.Fragment>
    )
}

export default PokeCard;