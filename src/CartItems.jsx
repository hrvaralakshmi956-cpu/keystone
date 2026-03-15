import React from 'react'
import axios from "axios";


function CartItems() {
    function handleBtClick() {
        axios.get("http://localhost:8000/cartItems").then((cartItems) => {
            console.log(cartItems.data)
        }).catch((exe) => {
            console.log(exe);
        });
    }
    return (
        <div>
            Your Cart Items
            <button onClick={handleBtClick}>Click to load cart items</button>
        </div>
    )
}

export default CartItems
