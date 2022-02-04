import React from 'react'
import './Stocks.scss'
import ArticlesCards from "../../components/StocksComponents/ArticlesCards/ArticlesCards";


function Stocks() {
    return (
        <>
           <div className="container-stocks">
               <h2>Visualisation des <span>articles</span></h2>
               <h3>Dernière actualisation : Mardi 13 novembre</h3>
               <div className="container-stocks-categories">
                   <ArticlesCards />
               </div>
           </div>
        </>
    );
}

export default Stocks;
