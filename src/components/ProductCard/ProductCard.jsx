import { useState } from "react";
import "./productCard.css";

const ProductCard = ({title, price, imageId, addToCart}) => {

  const[counter, setCounter]= useState(0);

  const handleAddToCartClick = () => {
    addToCart(price);
    const newCounter = counter + 1;
    setCounter(newCounter);
  }


  return (
    <>
      <div className="card">
        <img src={"https://picsum.photos/id/"+imageId+"/600/400"} 
             className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {price}€
          </p>
          <button className="btn btn-primary" onClick={handleAddToCartClick}>+</button>
          <span className="ms-3">{counter}</span>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
