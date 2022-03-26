import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Chosen from '../Chosen/Chosen';
import Person from '../Person/Person';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([]);
    const [persons, setPerson] = useState([]);
    const [length, setLength] = useState([]);
    const [currentItem, setCurrentItem] = useState([]);
    const [currentRandom, setCurrentRandom] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleAddToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart);
        const name = [...persons, product];
        setPerson(name);
        setLength(name.length)
        setCurrentItem([])

    }
    const handleChooseOne = () => {

        if (cart == 0) {
            alert('Please choose one first')
            return
        }
        const random = Math.floor(Math.random() * length);


        if (currentRandom !== random) {
            const item = persons[random];
            setCurrentRandom(random);
            setCurrentItem(item);
        }
        else {
            handleChooseOne();
        }
        setPerson([])
        setCart([])
    }
    const handleChooseAgain = () => {
        setPerson([])
        setCart([])
        setCurrentItem([])
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
                        <div>

                            <Chosen currentItem={currentItem}></Chosen>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Shop;