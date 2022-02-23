import React from "react";
import uniqid from 'uniqid';
import { useMyTeam } from "../hooks/myTeamContext";

import { Box, Button, TextField, Typography } from "@mui/material";

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from '@mui/material/Paper';
import Draggable from 'react-draggable';

function PaperComponent(props) {
    return (
        <Draggable
            handle="#draggable-dialog-title"
            cancel={'[class*="MuiDialogContent-root"]'}
        >
            <Paper {...props} />
        </Draggable>
    );
}

const MyTeams = () => {
    const MY_TEAM = "myteams";
    const { allTeams, setAllTeams, currentTeam, setCurrentTeam } = useMyTeam();
    const [nameTeam, setNameTeam] = React.useState("");
    const [open, setOpen] = React.useState(false);
    const myStyleMyTeam = {
        typog: {
            m: 3,
        },
        button: {
            width: "100%",
            height: 40
        },
        dialog: {
            display: "block",
            width: "100%"
        },
        yellowColor: {
            backgroundColor: "#ffde00a1",
            color: "#000",
            "&:hover": {
                backgroundColor: "#ffde00",
            }
        }
    }

    React.useEffect(()=>{
        console.log("useEffect:",allTeams)
        // JSON.parse(localStorage.getItem(MY_TEAM))
    },[allTeams])

    const handleClickOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    const handleClickCreateTeam = () => {
        if (!nameTeam) alert("Nome da equipe não pode ser vazio")
        else {
            const dataTeam = {
                id: uniqid(),
                name: nameTeam,
                team: []
            }
            setAllTeams(value => [...value, dataTeam])
            setCurrentTeam(dataTeam);
            setNameTeam("")
            localStorage.setItem(MY_TEAM, JSON.stringify([...allTeams, dataTeam]))
            setOpen(false);
        }
    }

    return (
        <React.Fragment>
            <Typography variant="h2" sx={myStyleMyTeam.typog}>Minhas Equipes</Typography>
            <Button onClick={handleClickOpen} variant="contained" sx={[myStyleMyTeam.button, myStyleMyTeam.yellowColor]}>
                Adicionar Nova equipe
            </Button>
            {
                allTeams.length ?
                    <Typography variant="h4">Olá equipe</Typography> :
                    <Box>
                        <Typography variant="h4">Não existem equipes criadas</Typography>
                    </Box>
            }
            <div>
                <Dialog
                    fullWidth={true}
                    maxWidth="md"
                    open={open}
                    onClose={handleClose}
                    PaperComponent={PaperComponent}
                    sx={myStyleMyTeam.dialog}
                    aria-labelledby="draggable-dialog-title"
                >
                    <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                        Criar nova equipe
                    </DialogTitle>
                    <DialogContent>
                        <TextField id="standard-basic" fullWidth label="Nome da equipe" variant="standard" value={nameTeam} onChange={(e) => setNameTeam(e.target.value)} />
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus onClick={handleClose}>
                            Cancelar
                        </Button>
                        <Button onClick={handleClickCreateTeam}>Criar</Button>
                    </DialogActions>
                </Dialog>
            </div>
        </React.Fragment>
    )
}

export default MyTeams;