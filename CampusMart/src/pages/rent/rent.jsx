import React, { useContext, useEffect, useState } from "react";
import "./rent.css"
import { PRODUCTS } from "../../products";
import { RentProduct } from "./rentProduct";
import { RentProductCredentials } from "./rentProductCredentials";
import { ShopContext } from "../../context/buy-context";
import { baseUrl } from "../../basicConfig";
import axios from "axios";

export const Rent = () => {
    const { ProductDisplay } = useContext(ShopContext)
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(baseUrl + 'rentProducts').then((response) => {
            setProducts(response.data);
        })
    },[])

    return <div className="rent">
        <div style={{display:ProductDisplay?"none":"block"}}>
            <div className="rentTitle">
                <h1>Rent a Product</h1>
            </div>   
            <div className="products">
                {products.map((product)=>(
                    <RentProduct data={product}/>
                ))}
            </div>
        </div>
        <div>
            <RentProductCredentials  />
        </div>
    </div>
}