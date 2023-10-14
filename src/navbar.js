import React from "react";
import { MenuItems } from "./mymenu.js";
import  {Link} from "react-router-dom";

const lik={
    textDecoration:"none",
    color: "bisque",
     fontSize: "18px"
   
   
    
    
};
export default class NavBar extends React.Component{
render(){
    return (
        
        <nav className="Navbaritems">
            <ul className="nav-menu">{
                MenuItems.map((item,index )=>{
                    return <li ><Link style={lik} to={item.url}>{item.title}</Link>
                    </li> })
                                   }

            </ul>
        </nav>
         
        )
}
 }

 