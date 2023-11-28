import './cart-block.scss'

export const CartItem = (props) => {
    return (
        <div className="cartItem">
            <div>
                <div>
                    <img src={props.productImg} alt="img" />
                    <p>{props.productName}</p>
                    <button>Remove</button>
                </div>
            </div>
            <div>$ {props.productPrice}</div>
            <div>
                <button>-</button>
                <div className="count">{props.cartQuantity}</div>
                <button>+</button>
            </div>
            <div className="total-price">{props.productPrice * props.cartQuantity}</div>
        </div>
    )
}