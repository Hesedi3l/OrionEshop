import React from 'react'
import './StatisticsGlobal.scss'
import {BiStats} from "react-icons/bi"

function StatisticsGlobal() {
    return (
        <>
            <div className="globalStats-card">
                <BiStats className="icon"/>
                <div className="information">
                    <h4><span>Nombres</span> d'articles</h4>
                    <h5>85 645</h5>
                </div>
            </div>
            <div className="globalStats-card">
                <BiStats className="icon"/>
                <div className="information">
                    <h4><span>Nombres</span> d'articles</h4>
                    <h5>85 645</h5>
                </div>
            </div>
            <div className="globalStats-card">
                <BiStats className="icon"/>
                <div className="information">
                    <h4><span>Nombres</span> d'articles</h4>
                    <h5>85 645</h5>
                </div>
            </div>
        </>
    );
}

export default StatisticsGlobal;