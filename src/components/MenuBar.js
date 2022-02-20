import React from "react";
import pokeApi from "../services/pokeAPI";
import { Link } from "react-router-dom";
import {useSearch} from "../hooks/searchContext";
import { usePokeData } from "../hooks/pokeDataContext";
import BadgeSideMenu from "../components/Badge";
import iconLogo from "../assets/icon-pokeball-3.png";

import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Button, styled, alpha, AppBar, Box, Toolbar, IconButton, Typography, MenuItem, InputBase } from "@mui/material";

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '50%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const myStylesMenuBar = {
  flexStyle: { display: "flex" },
  colorButton: {color:"#fff"},
  appBarColor:{ backgroundColor: "#3b4cca" }
}
const MenuBar = ({ setOpenSideMenu }) => {
  const {search, setSearch} = useSearch();
  const {setPokeData} = usePokeData();

  const handleClickSearchButton = () =>{
    if(!search) alert("O campo de pesquisa não pode ser vazio")
    else{
      pokeApi.get(`/pokemon/${search.toLowerCase()}`)
        .then(({data}) => {
          setPokeData(data);
          setSearch("");
        })
        .catch(err => alert("Por favor, verificar nome do pokemon"))
    }
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={myStylesMenuBar.appBarColor}>
        <Toolbar sx={[myStylesMenuBar.flexStyle, { justifyContent: "space-between" }]}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2, display: { xs: "block", md: "none" } }}
            onClick={() => setOpenSideMenu(value => !value)}
          >
            <MenuIcon />
          </IconButton>
          <MenuItem sx={myStylesMenuBar.flexStyle} component={Link} to="/">
            <BadgeSideMenu pathImg={iconLogo} title="logo" width={32} />
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              POKEMA1
            </Typography>
          </MenuItem>
          <Box sx={myStylesMenuBar.flexStyle}>
            <Search title="Digite o nome do pokemon que você deseja buscar. Este campo não pode ser vazio">
              <StyledInputBase
                placeholder="Buscar"
                inputProps={{ 'aria-label': 'search' }}
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
            </Search>
            <Button onClick={handleClickSearchButton} variant="outlined" title="Buscar pokemon"> 
              <SearchIcon sx={myStylesMenuBar.colorButton}/>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default MenuBar;

