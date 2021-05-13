import React from "react";
import "./style.css";

function Card(img, title, authors, description, link) {
    return (
       <div className="card">
           <img src={img} className="card-img-top" alt="book-image"></img>
           <div className="card-body">
               <h5 className="card-title">{title}</h5>
               <h6>Written by: {authors}</h6>
               <p className="card-text">{description}</p>
               <a href={link} className="btn btn-primary">More Info</a>
           </div>
       </div> 
    )
}

export default Card;