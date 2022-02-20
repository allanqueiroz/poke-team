import React from "react";
import { Link } from "react-router-dom"

import { CardActionArea, Card, CardMedia, Divider, Typography } from '@mui/material';

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

    return (
        <React.Fragment>
            {
                pokeAPIData.results ? pokeAPIData.results.map(pokemon => (
                    <Card sx={myStylesPokeCard.card} key={pokemon.name} component={Link} to={`/detailed/${getIDfromURL(pokemon.url)}`}>
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
                    </Card>))
                    :
                    <Card sx={myStylesPokeCard.card} key={pokeAPIData.name} component={Link} to={`/detailed/${pokeAPIData.id}`}>
                        <CardActionArea title={pokeAPIData.name}>
                            <CardMedia
                                component="img"
                                alt={`Pokemon card: ${pokeAPIData.name}`}
                                sx={myStylesPokeCard.cardMedia}
                                image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeAPIData.id}.png`}
                            />
                            <Divider sx={myStylesPokeCard.divider} />
                            <Typography variant="h6" component="div" align="center">
                                {pokeAPIData.name}
                            </Typography>
                        </CardActionArea>
                    </Card>
            }
        </React.Fragment>
    )
}
export default PokeCard;