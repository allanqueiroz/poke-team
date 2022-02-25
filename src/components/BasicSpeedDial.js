import React from "react";
import { useMyTeam } from "../hooks/myTeamContext";

import { Box, SpeedDialAction, SpeedDialIcon, SpeedDial } from "@mui/material";
import SaveIcon from '@mui/icons-material/Save';
import BackspaceIcon from '@mui/icons-material/Backspace';

const BasicSpeedDial = () => {
  const { setButtonClick, setCurrentTeam } = useMyTeam();
  const actions = [
    { icon: <SpeedDialIcon />, name: 'Enable Add to team', click:function(){setButtonClick(oldV => !oldV)} },
    { icon: <BackspaceIcon />, name: 'Clear Team', click:function(){
      setCurrentTeam(value =>{
        const a = {...value};
        a.team = [];
        return a;
    })
    } },
    { icon: <SaveIcon />, name: 'Save', click: function(){console.log("salvou a equipe")} },
  ];
  const myStyleBasicSpeedDial = {
    box: {
      height: 320,
      transform: 'translateZ(0px)',
      flexGrow: 1,
      position: 'sticky',
      top: 0,
      marginTop: 3,
      marginRight: 3
    }
  }

  return (
    <Box sx={myStyleBasicSpeedDial.box}>
      <SpeedDial
        title="Opções de equipe"
        ariaLabel="speed-dial"
        icon={<SpeedDialIcon />}
        direction="down"
      >
        {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={action.click}
              tooltipOpen={true}
            />
          ))}
      </SpeedDial>
    </Box>
  );
}
export default BasicSpeedDial;