import React from 'react'
import './CategoriesCards.scss'
import Categories from "../../../data/category.json";

function ArticlesCards() {
    return (
        <>
            {Categories.map(post => {return(
                <div className="categories-cards">
                    <h2>{post.title}</h2>
                </div>
            )})}
        </>
    );
}

export default ArticlesCards;
