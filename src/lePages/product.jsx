import React from 'react';
import './shop';
import {ShopContext} from './../context/shop-context';
import { useContext } from 'react';
export const Product = (props) => {
    const { addToCart, cartItems } = useContext(ShopContext);
    const { id, productName, price, productImage } = props.data;
    const cartItemsAmount = cartItems[id]
    return (
      <div className="product">
        <img src={productImage} />
        <div className="description">
          <p>
            <b>{productName}</b>
          </p>
          <p> ${price}</p>
        </div>
        <button className='addToCartBttn' onClick={() => addToCart(id)}>
            Add to cart {cartItemsAmount > 0 && <>{cartItemsAmount}</>}
            </button>
      </div>
    );
  };