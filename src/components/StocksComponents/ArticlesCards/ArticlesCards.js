import React from 'react'
import './ArticlesCards.scss'
import { useState } from "react";

function ArticlesCards(props) {

    const [articlesClick, setArticlesClick] = useState(false);

    return (
        <div
            className={articlesClick ? "articles-cards active" : "articles-cards"}
             onClick={()=> setArticlesClick(!articlesClick)}>
            <img src={process.env.PUBLIC_URL + "images/categories/" + props.image} alt=""/>
            <h4>{props.name}</h4>
            <div className="description">
                <p><span>Référence</span> :  {props.refe}</p>
                <p><span>Fournisseur</span> :  {props.fournisseur}</p>
                <p><span>Prix Unitaire</span> :  {props.prixUnitaire}</p>
                <p><span>Prix Kilos</span> :  {props.prixKilos}</p>
            </div>
        </div>
    );
}

export default ArticlesCards;
