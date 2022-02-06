import React from 'react'
import './SideBar.scss'
import { FaHouseUser } from "react-icons/fa";
import {BiStats, BiHash} from "react-icons/bi"
import {FiBox} from "react-icons/fi"
import {GiKiwiFruit} from "react-icons/gi"
import {BsBagPlus} from "react-icons/bs"
import Categories from '../../../data/category.json'
import {NavLink} from "react-router-dom";

function SideBar() {
    return (
        <>
            <div className="sideBar-container">
                <h2>Menu</h2>
                <ul>
                    <NavLink to="/" activeClassName='active'><li><FaHouseUser className="icon"/> Accueil</li></NavLink>
                    <NavLink to="/stats" activeClassName='active'><li><BiStats className="icon"/> Statistiques</li></NavLink>
                    <NavLink to="/stocks" activeClassName='active'><li><FiBox className="icon"/> Stocks</li></NavLink>
                    <NavLink to="/articles" activeClassName='active'><li><GiKiwiFruit className="icon"/> Articles</li></NavLink>
                    <NavLink to="/panier" activeClassName='active'><li><BsBagPlus className="icon"/> Panier</li></NavLink>

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
