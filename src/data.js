import React from "react";
import {BrowserRouter, Routes,Route } from "react-router-dom";
import Quiz from "./quiz";
import Login from "./login";
import Signup from "./signup";
import Contact from "./contact";
import Home from "./home";

export default class Data extends React.Component{
    render(){
        return (<div>
            <Routes>
                <Route path="/" element={<Home/>} />
                
                <Route path="/login" element={<Login/>} /> 
                <Route path="/signup" element={<Signup/>} /> 
               
                <Route path="/contact" element={<Contact/>} /> 
                <Route path="/quiz" element={<Quiz/>} /> 
                
            </Routes>
        </div>);
    }
}