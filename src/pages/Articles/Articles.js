import React from 'react'
import './Articles.scss'

import ArticlesCards from "../../components/StocksComponents/ArticlesCards/ArticlesCards";
import CategoriesCards from "../../components/StocksComponents/CategoriesCards/CategoriesCards";
import ArticlesData from "../../data/articles.json";

function Articles() {
    return (
        <>
            <div className="overlay">
                <div className="container-stocks">
                    <h2>Visualisation des <span>articles</span></h2>
                    <h3>Dernière actualisation : Mardi 13 novembre</h3>
                    <div className="container-stocks--content">
                        {/* <CategoriesCards />*/}

                        {ArticlesData.map(articles => {return(
                            <ArticlesCards
                                name={articles.name}
                                fournisseur={articles.fournisseur}
                                refe={articles.refe}
                                prixUnitaire={articles.prixUnitaire}
                                prixKilos={articles.prixKilos}
                                image={articles.image}
                            />
                        )})}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Articles;
