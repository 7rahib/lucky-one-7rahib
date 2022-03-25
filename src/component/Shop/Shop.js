import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Person from '../Person/Person';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([]);
    const [person, setPerson] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleAddToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart);
        const name = product.name;
        setPerson(name);
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product =>
                        <Product
                            key={product.id}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        ></Product>)
                }
            </div>
            <div className='cart-container'>
                <div className='cart'>
                    <div>
                        <Cart cart={cart}></Cart>
                    </div>
                    <div>
                        <Person person={person}></Person>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Shop;