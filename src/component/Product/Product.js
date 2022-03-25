
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css'

const Product = (props) => {

    const { name, img, price } = props.product;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <p className='product-name'>{name}</p>
                <p>Salary: ${price} per week</p>
            </div>
            <button onClick={() => props.handleAddToCart(props.product)} className='btn-card'>
                <p>Choose Assistant</p>
                <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;