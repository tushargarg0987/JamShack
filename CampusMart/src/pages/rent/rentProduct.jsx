import React, { useContext } from "react";
import { ShopContext } from "../../context/buy-context";

export const RentProduct = (props) =>{
    const {id,productName,price,productImage} = props.data
    const {cartItems,addToCart,rentItem} = useContext(ShopContext)
    return <div className="product">
        <img src={productImage} />
        <div className="description">
            <p><b>{productName}</b></p>
        </div>
        <button className="addToCartBttn" onClick={()=>rentItem(props.data)}>Rent</button>
    </div>
}