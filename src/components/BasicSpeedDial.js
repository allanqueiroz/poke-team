import React from "react";
import { useMyTeam } from "../hooks/myTeamContext";

import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import { Box } from "@mui/material";

const BasicSpeedDial = () => {
  const { setButtonClick } = useMyTeam();
  const myStyleBasicSpeedDial = {
    box: {
      height: 320,
      transform: 'translateZ(0px)',
      flexGrow: 1,
      position: 'sticky',
      top: 0,
    }
  }
  return (
    <Box sx={myStyleBasicSpeedDial.box}>
      <SpeedDial
        title="Clique aqui para liberar a opção de adicionar pokemons a sua equipe atual"
        ariaLabel="speed-dial"
        icon={<SpeedDialIcon />}
        onClick={() => setButtonClick(oldV => !oldV)}
      />
    </Box>
  );
}
export default BasicSpeedDial;