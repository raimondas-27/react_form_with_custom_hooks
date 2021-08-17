import React from "react";


const Product = (props) => {
   return (
       <div>
         <p> {props.oneBoot.bootName}</p>
          <h2>{props.oneBoot.bootModel}</h2>
          <i className="fa fa-star"></i>
          <p>{props.oneBoot.price.min} - {props.oneBoot.price.max}</p>
       </div>
   )
}

export default Product;