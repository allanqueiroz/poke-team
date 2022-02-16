import React from "react";

const PokeDataContext = React.createContext({});

export function PokeDataProvider(props){
    const [pokeData, setPokeData] = React.useState({});
    return(
        <PokeDataContext.Provider value={{pokeData, setPokeData}}>
            {props.children}
        </PokeDataContext.Provider>
    )
}

export function usePokeData(){
    const {pokeData, setPokeData} = React.useContext(PokeDataContext);
    return {pokeData, setPokeData};
}