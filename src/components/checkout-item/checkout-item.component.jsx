import React from 'react';
import { connect } from "react-redux";
import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.action';
import './checkout-item.styles.scss';

const CheckoutItem = ({cartItem, clearItemFromCart, addItem, removeItem}) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return(
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='item' />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div onClick={()=>removeItem(cartItem)} className="arrow">&#10094;</div>
                <span className="value">{quantity}</span>
                <div onClick={()=>addItem(cartItem)} className="arrow">&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <span className='remove-button' onClick={()=>clearItemFromCart(cartItem)}>&#10005;</span>
        </div>
    );
}

export default connect(null, {clearItemFromCart, addItem, removeItem})(CheckoutItem);