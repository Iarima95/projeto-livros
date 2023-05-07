import React from "react";
import "./Menu.css";
import {Link} from "react-router-dom";

function Menu(props) {
    return (
        <div id="MenuPrincipal">
            
            <Link to= "/Favoritos"><div className="btnMenu" >
               {props.icone1}{props.info1}
                
            </div></Link> 
            <Link to= "/Desejados"><div className="btnMenu" >
               {props.icone2}{props.info2}
                
            </div></Link> 
            <Link to= "/"><div className="btnMenu" >
               {props.icone3}{props.info3}
                
            </div></Link> 
            <Link to= "/Resenha"><div className="btnMenu" >
               {props.icone4}{props.info4}
                
            </div></Link> 

            
            
        </div>

    );
};
export default Menu;