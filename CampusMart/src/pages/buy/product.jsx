import React, { useContext } from "react";
import { ShopContext } from "../../context/buy-context";

export const Product = (props) => {
    const {id,productName,price,productImage} = props.data
    const {clickToBuy,cartItems} = useContext(ShopContext)
    // const cartItemAmount = cartItems[id]
    return <div className="product">
        <img src={productImage} />
        <div className="description">
            <p><b>{productName}</b></p>
            <p>Rs.{price}</p>
        </div>
        <button className="addToCartBttn" onClick={() => clickToBuy(props.data)}> 
            Buy 
        </button>
    </div>
}