import React from "react";
import "./Menu.css";

function Menu(props) {
    return (
        <div id="MenuPrincipal">
            <div className="btnMenu" id="Icone1">
                <a href="">{props.icone1}{props.info1}</a>
                
            </div>
            <div className="btnMenu" id="Icone2">
            <a href="">{props.icone2}{props.info2}</a>
            </div>
            <div className="btnMenu" id="Icone3">
            <a href="">{props.icone3}{props.info3}</a>
            </div>
            <div className="btnMenu" id="Icone4">
            <a href="">{props.icone4}{props.info4}</a>
            </div>
        </div>

    );
};
export default Menu;