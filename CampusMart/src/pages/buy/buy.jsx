import React, { useContext } from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./buy.css"
import { ShopContext } from "../../context/buy-context";
import { BuyProductCredentials } from "./buyProductCredentials";
export const Buy = () => {
    const {ProductDisplay} = useContext(ShopContext)
    return <div className="shop">
        <div style={{display: ProductDisplay?"none":"block"}}>
            <div className="shopTitle">
                <h1>CampusMart Shop</h1>
            </div>
            <div className="products">
                {PRODUCTS.map((product)=>{
                    return <Product data = {product}/>
                })}
            </div>
        </div>
        <BuyProductCredentials />
    </div>
}