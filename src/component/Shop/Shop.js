import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Person from '../Person/Person';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([]);
    const [persons, setPerson] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleAddToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart);
        const name = [...persons, product];
        if (name.length <= 4) {
            setPerson(name);
        }
        else {
            alert("Can't choose more than 4")
        }

    }
    const handleChooseAgain = () => {
        setPerson([])
        setCart([])
    }
    const handleChooseOne = (persons) => {
        const length = persons.length
        console.log(length)
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
                        {
                            persons?.map(person => <Person
                                key={person.id}
                                person={person}
                            ></Person>
                            )
                        }
                        <div>
                            <button onClick={handleChooseOne} className='btn-cart'>Choose 1 for me</button>
                        </div>
                        <div>
                            <button onClick={handleChooseAgain} className='btn-cart2'>Choose Again</button>
                        </div>
                    </div>
                </div>


            </div>
        </div >
    );
};

export default Shop;