import React from "react";
import './clientwork.css'
export default function Product(props) {
  return (
    <div className="card">
      <img className="product--image" src={props.url} alt="product image" />
      <div className="clienth2">{props.name}</div>
            {/* <p>{props.description}</p>
       */}
    </div>
  );
}