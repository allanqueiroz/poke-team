import React from "react";
import { useMyTeam } from "../hooks/myTeamContext";

import { Box, Button, Typography } from "@mui/material";

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
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
    const { allTeams, setAllTeams, newTeam, setNewTeam } = useMyTeam();
    const [open, setOpen] = React.useState(false);
    const myStyleMyTeam = {
        typog: {
            m: 3,
        },
        button: {
            width: "100%"
        }
    }
    const handleClickOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    return (
        <React.Fragment>
            <Typography variant="h2" sx={myStyleMyTeam.typog}>Minhas Equipes</Typography>
            <Button onClick={handleClickOpen} variant="contained" sx={myStyleMyTeam.button}>Adicionar Nova equipe</Button>
            {
                allTeams ?
                    <Typography variant="h4">Olá equipe</Typography> :
                    <Box>
                        <Typography variant="h4">Não existem equipes criadas</Typography>
                    </Box>
            }
            <div>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    PaperComponent={PaperComponent}
                    aria-labelledby="draggable-dialog-title"
                >
                    <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                        Criar nova equippe
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            input-name-equipe aqui
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus onClick={handleClose}>
                            Cancelar
                        </Button>
                        <Button onClick={handleClose}>Criar</Button>
                    </DialogActions>
                </Dialog>
            </div>
        </React.Fragment>
    )
}

export default MyTeams;