import React from 'react'
import './ArticlesCards.scss'
import Articles from "../../../data/articles.json";

function ArticlesCards() {
    return (
        <>
            {Articles.map(articles => {return(
              <div className="articles-cards">
                  <img src={process.env.PUBLIC_URL + "images/categories/" + articles.image} alt=""/>
                  <h4>{articles.name}</h4>
              </div>
            )})}
        </>
    );
}

export default ArticlesCards;
