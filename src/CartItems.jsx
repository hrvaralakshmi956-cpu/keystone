import React, { useState } from "react";
import axios from "axios";


function CartItems() {

    const [cartProducts, setCartProducts] = useState([]);
    function handleBtClick() {
        axios.get("http://localhost:8000/cartItems").then((cartItems) => {
            console.log(cartItems.data);
            setCartProducts(cartItems.data);
        }).catch((exe) => {
            console.log(exe);
        });
    }
    return (
        <div>
            Your Cart Items
            <button onClick={handleBtClick}>Click to load cart items</button>
            <div className="cartWrapper">
                {cartProducts.map((cartItem) => {
                    return (
                        <div className="cartItems">
                            <p>Name: {cartItem.title}</p>
                            <img src={cartItem.image} alt="cart-item" width={200} height={200} />
                            <p>Price: {cartItem.price}</p>
                            <p>Category:{cartItem.category}</p>
                            <button 
                            onClick={async () => {
                                
                                axios
                                .delete(
                                    'http://localhost:8000/removeCartItem?title=${cartItem.title}',
                                )
                                .then((res) => {
                                    alert(res.data);
                                })
                                .catch((exe) => {
                                    console.log(exe);
                                });
                            }}
                            >
                                Remove
                                </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default CartItems
