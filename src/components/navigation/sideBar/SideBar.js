import React from 'react'
import './SideBar.css'
import { FaCentercode, FaHouseUser } from "react-icons/fa";
import {BiStats} from "react-icons/bi"


function SideBar() {
    return (
        <>
            <div className="sideBar-container">
                <h2>Menu</h2>
                <ul>
                    <li><FaHouseUser className="icon active"/> Accueil</li>
                    <li><BiStats className="icon"/> Statistiques</li>
                    <li><FaCentercode className="icon"/> Stocks</li>
                    <li><FaCentercode className="icon"/> Articles</li>
                    <li><FaCentercode className="icon"/> Panier</li>

                </ul>
                <h2>Category</h2>
               <ul>
                   <li>{/* Mettre un icone*/} Test</li>
                   <li>{/* Mettre un icone*/} Test</li>
                   <li>{/* Mettre un icone*/} Test</li>
                   <li>{/* Mettre un icone*/} Test</li>
                   <li>{/* Mettre un icone*/} Test</li>
               </ul>
            </div>
        </>
    );
}

export default SideBar;
