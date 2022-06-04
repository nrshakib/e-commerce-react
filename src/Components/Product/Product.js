import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const { name, img, seller, ratings, price } = props.product;

    return (
        <div className='product'>
            <img src={img} alt=''></img>
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>${price}</p>
                <p>{seller}</p>
                <p>{ratings} stars</p>
            </div>
            <button onClick={() => props.handleAddToCart(props.product)} className='button-cart'>
                <p className='button-text'>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;