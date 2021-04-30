import React from "react";
import "./Card.css";
import food2 from "../../assets/food2.jpg"; // Tell webpack this JS file uses this image
/* 
assets klasörü içerisinde eklediğim kebap resmini food2 olarak kaydettim. Sonrasında ilk başta App.js içerisinde recipeItem içerisinde belirttim sonra da Card Componenti içerisine props yardımıyla yolladım. Şuan da import ediyorum. 
*/
import heartOutline from "../../assets/heart-outline.png"; // Tell webpack this JS file uses this image
import heartFill from "../../assets/heart-fill.png"; // Tell webpack this JS file uses this image

export default function Card(props) {
  return (
    <div className="card">
      <div className="card-header">
        <div className="profile">
          <span className="letter">{props.author[0]}</span>
        </div>
        <div className="card-title-group">
          <h5 className="card-title">{props.recipeName}</h5>
          <div className="card-date">{props.recipeItem.date}</div>
        </div>
      </div>
      <img className="card-image" width="400" src={food2} alt="Logo" />
      <div className="card-text">{props.recipeItem.description}</div>
      <div className="card-like-bar">
        {props.isLiked ? (
          <img className="card-like-icon" src={heartFill} alt="Logo" />
        ) : (
          <img className="card-like-icon" src={heartOutline} alt="Logo" />
        )}
        <div className="like-text">
          <b>{props.likeCount}</b> kişi bu tarifi beğendi.
        </div>
      </div>
    </div>
  );
}
