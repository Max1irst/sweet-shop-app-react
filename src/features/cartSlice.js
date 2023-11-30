import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify'

const initialState = {
    cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id)
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1
                toast.info(`Increased ${state.cartItems[itemIndex].productName} cart quantity`, {
                    position: 'top-left'
                })
            } else {
                const tempProduct = { ...action.payload, cartQuantity: 1 }
                state.cartItems.push(tempProduct)
                toast.success(`${action.payload.productName} added to Cart`, {
                    position: 'top-left'
                })
            }
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
        },
        removeFromCart(state, action) {
            const newSetOfItems = state.cartItems.filter((item) => item.id !== action.payload.id)
            state.cartItems = newSetOfItems
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
            toast.error(`${action.payload.productName} removed from Cart`, {
                position: 'top-left'
            })
        },
        decreaseCartItem(state, action) {
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id)
            if (state.cartItems[itemIndex].cartQuantity > 1) {
                state.cartItems[itemIndex].cartQuantity -= 1
            } else if (state.cartItems[itemIndex].cartQuantity === 1) {
                const newSetOfItems = state.cartItems.filter((item) => item.id !== action.payload.id)
                state.cartItems = newSetOfItems
                toast.error(`${action.payload.productName} removed from Cart`, {
                    position: 'top-left'
                })
            }
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
        },
        increaseCartItem(state, action) {
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id)
            if (state.cartItems[itemIndex].cartQuantity < 10) {
                state.cartItems[itemIndex].cartQuantity += 1
            } else if (state.cartItems[itemIndex].cartQuantity >= 10) {
                state.cartItems[itemIndex].cartQuantity += 1
                toast.info(`Вижу у нас тут сладкоежка`, {
                    position: 'top-left'
                })
            }
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
        },
        clearCart(state, action) {
            state.cartItems = []
            toast.info(`Card is cleared`, {
                position: 'top-left'
            })
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
        },
        getTotals(state, action) {
            let { totalPrice, totalQuantity } = state.cartItems.reduce((cartTotal, cartItem) => {
                const { productPrice, cartQuantity } = cartItem
                const itemTotal = productPrice * cartQuantity
                console.log(productPrice);
                cartTotal.totalPrice += itemTotal
                cartTotal.totalQuantity += cartQuantity
                return cartTotal
            }, {
                totalPrice: 0,
                totalQuantity: 0
            })
            state.cartTotalAmount = totalPrice
            state.cartTotalQuantity = totalQuantity
        }
    }
})

export const { addToCart, removeFromCart, decreaseCartItem, increaseCartItem, clearCart, getTotals } = cartSlice.actions
export default cartSlice.reducer