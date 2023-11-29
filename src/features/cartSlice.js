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
                    position: 'top-right'
                })
            } else {
                const tempProduct = { ...action.payload, cartQuantity: 1 }
                state.cartItems.push(tempProduct)
                toast.success(`${action.payload.productName} added to Cart`, {
                    position: 'top-right'
                })
            }
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
        },
        removeFromCart(state, action) {
            const newSetOfItems = state.cartItems.filter((item) => item.id !== action.payload.id)
            state.cartItems = newSetOfItems
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
            toast.error(`${action.payload.productName} removed from Cart`, {
                position: 'top-right'
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
                    position: 'top-right'
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
                    position: 'top-right'
                })
            }
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
        }
    }
})

export const { addToCart, removeFromCart, decreaseCartItem, increaseCartItem } = cartSlice.actions
export default cartSlice.reducer