import React from 'react';
import './TopBar.scss'
import { AiFillSetting } from "react-icons/ai";
import {FaCentercode} from "react-icons/fa";


function TopBar() {
    return (
        <>
            <div className="topBar-container">
                <div className="logo">
                    <h1>Or<span>ion</span></h1>
                    <h2>Shop <span>Manager</span></h2>
                </div>
                <div className="searchbar">
                    <input type="search" placeholder="Effectuer une recherche"/>
                </div>
                <div className="profile">
                    <div className="user">
                        <div className="user_image">
                            <img src={process.env.PUBLIC_URL + "panda.png"} alt="panda"/>
                        </div>
                        <div className="user_information">
                            <h2>Mathieu Cara</h2>
                            <h3>Administrator</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TopBar;
