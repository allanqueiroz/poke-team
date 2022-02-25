import React from "react";
import { Link } from "react-router-dom"
import { useMyTeam } from "../hooks/myTeamContext";

import { CardActionArea, Card, CardMedia, Divider, Typography, Button } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';

const PokeCard = ({ pokeAPIData }) => {
    const { buttonClick, currentTeam, setCurrentTeam } = useMyTeam();
    const myStylesPokeCard = {
        card: {
            width: {
                xs: "70%",
                md: "23%"
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
        },
        buttonAdd: {
            backgroundColor:"#f1f1f1"
        }
    }

    function getIDfromURL(url) { return url.slice(33).replace(/\//g, ""); }
    const handleClickAddToTeam = (name, urlImage) =>{
        console.log(currentTeam);
        if(currentTeam.team == undefined){
            alert("Por favor, adicione uma equipe")
        }else{
            if(currentTeam.team.length <= 5){
                setCurrentTeam(value =>{
                    const a = {...value};
                    a.team.push({name, urlImage})
                    return a;
                })
            }else{
                alert("A equipe atual não pode ter mais que 6 pokemons")
            }
        }
    }

    return (
        <React.Fragment>
            {
                pokeAPIData.results ? pokeAPIData.results.map(pokemon => (
                    <Card key={pokemon.name} 
                    sx={myStylesPokeCard.card} 
                    component={buttonClick ? null : Link} 
                    to={buttonClick ? null : `/detailed/${getIDfromURL(pokemon.url)}`}
                    >
                        {buttonClick ?
                            <Button onClick={() => handleClickAddToTeam(pokemon.name, `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${getIDfromURL(pokemon.url)}.png`)} title="Adicionar pokemon à equipe" fullWidth={true} sx={myStylesPokeCard.buttonAdd}
                            >
                                <AddBoxIcon />
                            </Button> : null
                        }
                        <CardActionArea title={pokemon.name}>
                            <CardMedia
                                component="img"
                                alt={`Pokemon card: ${pokemon.name}`}
                                sx={myStylesPokeCard.cardMedia}
                                image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${getIDfromURL(pokemon.url)}.png`}
                            />
                            <Divider sx={myStylesPokeCard.divider} />
                            <Typography variant="h6" component="div" align="center">
                                #{getIDfromURL(pokemon.url)}
                            </Typography>
                            <Typography variant="h6" component="div" align="center" gutterBottom={true}>
                                {pokemon.name}
                            </Typography>
                        </CardActionArea>
                    </Card>
                ))
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