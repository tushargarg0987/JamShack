import React, { useContext } from "react";
import "./rent.css"
import { PRODUCTS } from "../../products";
import { RentProduct } from "./rentProduct";
import { RentProductCredentials } from "./rentProductCredentials";
import { ShopContext } from "../../context/buy-context";

export const Rent = () => {
    const {ProductDisplay} = useContext(ShopContext)
    return <div className="rent">
        <div style={{display:ProductDisplay?"none":"block"}}>
            <div className="rentTitle">
                <h1>Rent a Product</h1>
            </div>   
            <div className="products">
                {PRODUCTS.map((product)=>(
                    <RentProduct data={product}/>
                ))}
            </div>
        </div>
        <div>
            <RentProductCredentials  />
        </div>
    </div>
}