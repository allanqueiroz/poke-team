import React from "react";

//icons from https://icon-icons.com/ || https://www.flaticon.com/
const BadgeSideMenu = ({pathImg, title, width}) => {
    return <img src={pathImg} title={title} width={width} style={{marginRight:6}} />
}

export default BadgeSideMenu;