import React, { useContext, useEffect, useState } from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./buy.css"
import { ShopContext } from "../../context/buy-context";
import { BuyProductCredentials } from "./buyProductCredentials";
import axios from "axios";
import { baseUrl } from "../../basicConfig";
export const Buy = () => {
    const { ProductDisplay } = useContext(ShopContext)
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(baseUrl + 'saleProducts').then((response) => {
            // console.log(response);
            setProducts(response.data);
        })
    },[])
    return <div className="shop">
        <div style={{display: ProductDisplay?"none":"block"}}>
            <div className="shopTitle">
                <h1>CampusMart Shop</h1>
            </div>
            <div className="products">
                {products.map((product)=>{
                    return <Product data = {product}/>
                })}
            </div>
        </div>
        <BuyProductCredentials />
    </div>
}