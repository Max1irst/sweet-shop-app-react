import { useSelector } from 'react-redux/es/hooks/useSelector'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import './cart-block.scss'
import { clearCart } from '../../features/cartSlice'
import { CartItem } from './cart-item'

export const CartBlock = () => {
    const cart = useSelector((state) => state.cart)
    const dispatch = useDispatch()
    const handleClearCard = () => {
        dispatch(clearCart())
    }
    return (
        <div className="cart-block">
            <div className='title'>
                <h2>Shopping Cart</h2>
            </div>
            {cart.cartItems.length === 0 ? (
                <div className='emptyCart'>
                    <h3>Cart is empty</h3>
                    <NavLink to="/sweet-shop-app">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-left">
                            <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                        </svg>
                        <span>Start Shopping</span>
                    </NavLink>
                </div>

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
                        <button onClick={() => handleClearCard()} className='clear-cart'>
                            Clear Cart
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-stars">
                                <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z" />
                            </svg>
                        </button>
                        <div className="check-out">
                            <div className="sub-total">
                                <span>Subtotal</span>
                                <span>  $ {cart.cartTotalAmount}</span>
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