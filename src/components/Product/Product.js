import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import './Product.css'

const Product = (props) => {
    // console.log(props.product)
    const {name, age,price, profession, gender, img} = props.product
    const cartIcon = <FontAwesomeIcon icon={faBook} />;
    return (
      <div className="product">
        <div className="product-cart">
          <img className="img" src={img} alt="" srcset="" />
          <div className="inner-div">
            <h3>
              Name: <strong className="title-name"> {name}</strong>
            </h3>
            <h4>Age: {age}</h4>
            <h4>Profession: {profession}</h4>
            <h4>Gender: {gender}</h4>
            <h4>For Write Book: {price}</h4>
            <button onClick={() => props.handleAddToCart(props.product)} className="btn-regular">
              add to cart
            </button>
            <p>{cartIcon}</p>
          </div>
        </div>
      </div>
    );
};

export default Product;