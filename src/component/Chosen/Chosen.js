import React from 'react';
import './Chosen.css'

const Chosen = (props) => {
    const { name, img } = props.currentItem;
    return (
        <div>
            <div className='cart-items'>
                {img || name ? <div><img className='image' src={img} alt="" height={50} width={50} /><span className='name'>{name}</span></div> : ''}

            </div>
        </div>
    );
};

export default Chosen;