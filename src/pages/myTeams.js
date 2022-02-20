import React from "react";

import { Button } from "@mui/material";

const MyTeams = () => {
    const myStyleMyTeam = {
        button: {
            width: "100%"
        }
    }

    return(
        <React.Fragment>
            <h1>MyTeamsPage</h1>
            <Button variant="contained" sx={myStyleMyTeam.button}>Adicionar Nova equipe</Button>
        </React.Fragment>
    )
}

export default MyTeams;