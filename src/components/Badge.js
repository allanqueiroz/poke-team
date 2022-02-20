import React from "react";
const BadgeSideMenu = ({pathImg, title, width}) => {
    //icons from https://icon-icons.com/ || https://www.flaticon.com/
    return <img src={pathImg} title={title} width={width} style={{marginRight:6}} />
}
export default BadgeSideMenu;