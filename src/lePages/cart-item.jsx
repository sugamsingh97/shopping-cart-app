import React, { useContext } from 'react';
import './cart.css';
import { ShopContext } from '../context/shop-context';

export const CartItem = (props) => {
const { cartItems, addToCart, removeFromCart, updateItemCount } = useContext(ShopContext);
const { id, productName, price, productImage } = props.data;
  return (
    <div className='cartItem'>
      <img src={productImage}/>
    <div className="cartDescription">
        <p>
            <b>{productName}</b>
        </p>
        <p>{price}</p>
        <div className='countHandler'>
            <button onClick={() => {removeFromCart(id)}}> - </button>
            <input value={cartItems[id]} onChange={(e) => {updateItemCount(Number(e.target.value), id  )}}/>
            <button onClick={() => {addToCart(id)}}> - </button>
        </div>
    </div>
    </div>
  )
}


