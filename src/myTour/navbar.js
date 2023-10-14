import React from "react";


const menu=[
    {
        title:"Home"
    }
    ,{
        title:"Destination"
    },{
        title:"Packages"
    },
    {
        title:"Holiday Theme"
    },
    {
        title:"About Us"
    },{
        title:"Contact Us"
    },{
        title:"Blog"
    },{
        title:"|"
    },{
        title:"+919212553175"
    }
]

 export default class NavBar extends React.Component{
    render(){
        return (<>
        <nav >
            <ul>
                {menu.map((item,index)=><li key={index}>{item.title}</li>)}
                 
            </ul>
        </nav>
       
        </>)
    }
}
 