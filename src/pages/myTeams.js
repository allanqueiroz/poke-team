import React from "react";

import { Button, Typography } from "@mui/material";

const MyTeams = () => {
    const myStyleMyTeam = {
        typog: {
            m: 3,
        },
        button: {
            width: "100%"
        }
    }

    return(
        <React.Fragment>
            <Typography variant="h2" sx={myStyleMyTeam.typog}>Minhas Equipes</Typography>
            <Button variant="contained" sx={myStyleMyTeam.button}>Adicionar Nova equipe</Button>
        </React.Fragment>
    )
}

export default MyTeams;