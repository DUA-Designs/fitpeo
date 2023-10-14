import React, { Component } from "react";
const s="This is dasari component getting rendered.";
class Dasari extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (<div>
            <h1>{this.props.st}</h1>
        </div>)
    }
}
  

class Aravind extends  Component{
    constructor(props){
        super(props);
        
    }
    
        render(){
         
            return (<div>
                <h1>I am just practising  react js</h1>
                <p>I am trying to export this file to another file. The cat plays with the   </p>
                <Dasari st={s}/>
               <ul>{this.props.args.map((i)=><li>{i}</li>)}</ul>
               <h1>{this.props.args}</h1>
            </div>);
        }
    }

    
 export default Aravind;