import React from 'react'
import './ArticlesCards.scss'
import Categories from "../../../data/category.json";
import {BiHash} from "react-icons/bi";

function ArticlesCards() {
    return (
        <>
            {Categories.map(post => {return(
              <div className="articles-cards">
                  <h2>{post.title}</h2>
              </div>
            )})}
        </>
    );
}

export default ArticlesCards;
