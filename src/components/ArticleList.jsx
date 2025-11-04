import React from "react";
import Article from "./Article";

//Displays info from Articles
function ArticleList({ posts }) {
    return (
        <main>
            {posts.map((post) => (
                <Article
                    key={post.id}
                    title={post.title}
                    date={post.date}
                    preview={post.preview}
                />
            ))}
        </main>
    );
}
export default ArticleList;
//Used in the App.jsx file 