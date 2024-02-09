import React, {useContext} from 'react';
import { ShopContext } from '../context/shop-context';
import { PRODUCTS } from '../products';
import { CartItem } from './cart-item';

export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  return (
    <div className='cart'>
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className='cartItems'>
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product}/>
          }
        }
        )}
      </div>
      <div className='checkOut'>
        <p>Sub Total $ {totalAmount} </p>
        <button>Continue Shopping</button>
        <button>Check Out</button>
      </div>
    </div>
  )
}

