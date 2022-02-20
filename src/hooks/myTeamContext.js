import React from "react";

const MyTeamContext = React.createContext({});
export function MyTeamProvider(props){
    const [newTeam, setNewTeam] = React.useState({});
    const [allTeams, setAllTeams] = React.useState([]);

    return(
        <MyTeamContext.Provider value={{newTeam, setNewTeam, allTeams, setAllTeams}}>
            {props.children}
        </MyTeamContext.Provider>
    )
}
export function useMyTeam(){
    const{newTeam, setNewTeam, allTeams, setAllTeams} = React.useContext(MyTeamContext);
    return {newTeam, setNewTeam, allTeams, setAllTeams};
}