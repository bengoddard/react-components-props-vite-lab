import React from "react";

//Formats information from posts
function Article({title,date = 'January 1, 1970',preview}) {
    return (
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
        </article>
    );
}
export default Article;
//Used in the ArticleList.jsx file