import React from 'react'
import './SideBar.scss'
import { FaHouseUser } from "react-icons/fa";
import {BiStats, BiHash} from "react-icons/bi"
import {FiBox} from "react-icons/fi"
import {GiKiwiFruit} from "react-icons/gi"
import {BsBagPlus} from "react-icons/bs"
import Categories from '../../../data/category.json'

function SideBar() {
    return (
        <>
            <div className="sideBar-container">
                <h2>Menu</h2>
                <ul>
                    <li><FaHouseUser className="icon active"/> Accueil</li>
                    <li><BiStats className="icon"/> Statistiques</li>
                    <li><FiBox className="icon"/> Stocks</li>
                    <li><GiKiwiFruit className="icon"/> Articles</li>
                    <li><BsBagPlus className="icon"/> Panier</li>

                </ul>
                <h2>Categories</h2>
               <ul>
                   {Categories.map(post => {return  <li><BiHash className="icon"/> {post.title}</li>})}
               </ul>
            </div>
        </>
    );
}

export default SideBar;
