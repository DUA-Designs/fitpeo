import React from "react";
import Mainelement from "./main";
const menu=[
    {title:"Dashboard",icon:<i class="fa-solid fa-gear"></i>},
    {title:"Product",icon:<i class="fa-solid fa-cube"></i>},{
        title:"Customers",icon:<i class="fa-solid fa-address-book"></i>
    },{
        title:"Income",icon:<i class="fa-solid fa-wallet"></i>
    },{
        title:"Promote",icon:<i class="fa-solid fa-percent"></i>
    },{
        title:"Help",icon:<i class="fa-solid fa-circle-info"></i>
    }
]

class Fitpeo extends React.Component{
    constructor(){
        super();
        this.state={title:"Dashboard",icon:<i class="fa-solid fa-gear"></i>}
         this.display=this.display.bind(this);
    }
      display(index){
        console.log(document.getElementById("topguy").innerHTML);
        
        
         
        

        
    }
    
    
    
    render(){
      
        return (<>
        <div id="layout"><nav>
            <h1 id="topguy"><span>{this.state.icon}</span><span id="tit">{this.state.title}</span>   </h1>
            <ul>{menu.map((item,index)=><li   onClick={this.display.bind(index) }  ><span >{item.icon}</span> <span>{item.title}</span> <span>{" >"}</span></li>)}</ul>
            <div id="manager">
                 <div><img src="" alt="proPic"/></div>
                 <div id="details"><h3>Evaria</h3>
                 <p>Project Manager</p></div>
            </div>
            </nav>
        <Mainelement/>
        </div>
        </>)
    }
}

 
export default Fitpeo


