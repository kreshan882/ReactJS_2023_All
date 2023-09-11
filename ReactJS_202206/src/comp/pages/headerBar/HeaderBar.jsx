import React from "react";
import { Link } from "react-router-dom";

function HeaderBar(){
    return(
        <nav className="navbar navbar-expand-lg bg-light">
            <span className="navbar-brand mb-0 h1">Name List</span>
           
           <ul className="navbar-nav">
                <li className="nav-item">
                    <Link  className="nav-link" to="/home" >Home</Link >
                </li>
                <li className="nav-item">
                    <Link  className="nav-link" to="/about" >About</Link >
                </li>
                <li className="nav-item">
                    <Link  className="nav-link" to="/NameList_Func" >NameList_Funct</Link >
                </li>
                <li className="nav-item">
                    <Link  className="nav-link" to="/NameListCls" >NameList_Clsas</Link >
                </li>
                <li className="nav-item">
                    <Link  className="nav-link" to="/NewTask" >NewTaskForm</Link >
                </li>
                <li className="nav-item">
                    <Link  className="nav-link" to="/TaskList" >TaskList</Link >
                </li>
           </ul>
           
        </nav>
    );
}

export default HeaderBar;