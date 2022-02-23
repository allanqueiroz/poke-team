import React from "react";
import uniqid from 'uniqid';
import { useMyTeam } from "../hooks/myTeamContext";

import { Box, Button, TextField, Typography, Dialog, DialogActions, DialogContent, DialogTitle, Paper } from "@mui/material";
import Draggable from 'react-draggable';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

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

    React.useEffect(() => {
        const localstor = JSON.parse(localStorage.getItem(MY_TEAM))
        if (localstor) setAllTeams(localstor)
    }, [])

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
    const handleClickRemoveTeam = (id) => {
        console.log(id)
        const newArrayOfTeams = allTeams.filter(item => {if(item.id != id) return item});
        localStorage.setItem(MY_TEAM, JSON.stringify(newArrayOfTeams));
        setAllTeams(newArrayOfTeams);
    }

    return (
        <React.Fragment>
            <Typography variant="h2" sx={myStyleMyTeam.typog}>Minhas Equipes</Typography>
            <Button onClick={handleClickOpen} variant="contained" sx={[myStyleMyTeam.button, myStyleMyTeam.yellowColor]}>
                Adicionar Nova equipe
            </Button>
            {
                allTeams.length ?
                    <React.Fragment>
                        {
                            allTeams.map(team => {
                                return(
                                    <Box key={team.id}>
                                        <Typography variant="h5">{team.name}</Typography>
                                        <Box>
                                        <Typography variant="h1">[-]</Typography>
                                        </Box>
                                        <Button title="Remover Equipe" onClick={()=>handleClickRemoveTeam(team.id)}>
                                            <DeleteForeverIcon/>
                                        </Button>
                                    </Box>
                                )
                            })
                        }
                    </React.Fragment>
                    :
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