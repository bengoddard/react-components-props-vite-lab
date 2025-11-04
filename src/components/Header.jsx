import React from "react";

//Displays the name of the blog
function Header({name}) {
    return (
        <header>
            <h1>{name}</h1>
        </header>
    );
}
export default Header;
//Used in the App.jsx file