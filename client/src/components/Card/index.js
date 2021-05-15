import React from "react";
import "./style.css";

// id: { type: String },
// title: { type: String },
// authors: { type: Array },
// description: { type: String },
// image: { type: String },
// link: { type: String }

function Card({ title, authors, description, image, link }) {
    return (

        <div className="card" >
            <img src={image} className="img" alt="book-cover"></img>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <h4 className="card-title">by {authors}</h4>
                <p className="card-text">{description}</p>
                <div class="d-grid gap-2">
                    <a href={link} className="btn btn-primary">Buy The book</a>
                </div>
            </div>
        </div>


    );
}

export default Card;