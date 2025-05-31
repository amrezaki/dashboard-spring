import React from "react";
import { Link } from "react-router-dom";
 import {BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'
function Sidebar ({openSiderbarToggle}) {
    return (
        <aside id="sidebar" className={openSiderbarToggle ? "sidebar-responsive":""}>

            
          
           <div className="sidebar-title">
               <div className="sidebar-brand" >
                <BsCart3 className="icon" /> Shop

                </div> 
               
                
            </div>

             <div className="sidebar-title">
               <div className="sidebar-brand" >
                <BsPeopleFill className="icon" /> <Link to="/users" > Users</Link>

                </div> 
                
            </div>
          
                <li className="sidebar-list-item"> 
                    <a href="">
                           <BsGrid1X2Fill className="icon"/> Dashboard

                    </a>

                </li>
                <li className="sidebar-list-item"> 
                    <a href="">
                           <BsFillArchiveFill className="icon"/> Products

                    </a>

                </li>
                <li className="sidebar-list-item"> 
                    <a href="">
                           <BsFillGrid3X3GapFill className="icon"/> Categories

                    </a>

                </li>
                <li className="sidebar-list-item"> 
                    <a href="">
                           <BsListCheck className="icon"/> Customers

                    </a>

                </li>
                <li className="sidebar-list-item"> 
                    <a href="">
                           <BsListCheck className="icon"/> Inventory

                    </a>

                </li>
                <li className="sidebar-list-item"> 
                    <a href="">
                           <BsMenuButtonWideFill className="icon"/> Reports

                    </a>

                </li>
                <li className="sidebar-list-item"> 
                    <a href="">
                           <BsFillGearFill className="icon"/> Setting
                    </a>

                </li>
                  
        </aside>
    )
    
}

export default Sidebar