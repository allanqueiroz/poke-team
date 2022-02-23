import React from "react";

const MyTeamContext = React.createContext({});
export function MyTeamProvider(props) {
    const [currentTeam, setCurrentTeam] = React.useState({});
    const [allTeams, setAllTeams] = React.useState([]);
    const [buttonClick, setButtonClick] = React.useState(false);

    return (
        <MyTeamContext.Provider value={{ currentTeam, setCurrentTeam, allTeams, setAllTeams, buttonClick, setButtonClick }}>
            {props.children}
        </MyTeamContext.Provider>
    )
}
export function useMyTeam() {
    const { currentTeam, setCurrentTeam, allTeams, setAllTeams, buttonClick, setButtonClick } = React.useContext(MyTeamContext);
    return { currentTeam, setCurrentTeam, allTeams, setAllTeams, buttonClick, setButtonClick };
}