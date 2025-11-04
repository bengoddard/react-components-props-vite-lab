import React from "react";

//Displays a photo and info about the blog
function About({image = "https://via.placeholder.com/215",about}) {
    return (
            <aside>
                <img src={image} alt="blog logo"/>
                <p>{about}</p>
            </aside>
    );
}
export default About;
//Used in the App.jsx file