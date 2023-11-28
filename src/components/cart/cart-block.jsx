import { useSelector } from 'react-redux/es/hooks/useSelector'
import { NavLink } from 'react-router-dom'
import './cart-block.scss'
import { CartItem } from './cart-item'

export const CartBlock = () => {
    const cart = useSelector((state) => state.cart)
    return (
        <div className="cart-block">
            <h2>Shopping Cart</h2>
            {cart.cartItems.length === 0 ? (
                <div>Cart is empty</div>
            ) :
                (<div className="cart">
                    <div className="fullCart">
                        <div className='titles'>
                            <p>Product</p>
                            <p>Price</p>
                            <p>Quantity</p>
                            <p>Total</p>
                        </div>
                        <div className='product-list'>
                            {cart.cartItems?.map(item => (
                                <CartItem key={item.id} {...item} />
                            ))}
                        </div>
                    </div>
                    <div className="cart-summary">
                        <button className='clear-cart'>Clear Cart</button>
                        <div className="check-out">
                            <div className="sub-total">
                                <span>Subtotal</span>
                                <span>${cart.cartTotalAmount}</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet</p>
                            <button>Check Out</button>
                            <NavLink to="/sweet-shop-app">
                                Continue Shopping
                            </NavLink>
                        </div>
                    </div>
                </div>)}
        </div>
    )
}