import axios from "axios";
import React, { useState } from "react";
import { baseUrl } from "../../basicConfig";

export const Sell = () => {
    const [productName, setProductName] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [price,setPrice] = useState('')
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [contact,setContact] = useState('')

    function submitHandler() {
        axios.post(baseUrl + 'addForSale', {
            productName: productName,
            price: price,
            productImage: imageUrl,
            name: name,
            email: email,
            contact: contact
        }).then((response) => {
            
        })
        console.log(productName);
        console.log(price);
        console.log(imageUrl);
        setProductName('');
        setPrice('');
        setImageUrl('')

    }

    return (
        <div
            style={{
                display: "flex",
                width: "100%",
                height: "70vh",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <div className="sell-input">
            <label>Name</label>
                <input value={price} placeholder="Name" onChange={(e) => {
                    setName(e.target.value)
                }}></input>
                <label>Email</label>
                <input value={price} placeholder="Email" onChange={(e) => {
                    setEmail(e.target.value)
                }}></input>
                <label>Product Name</label>
                <input placeholder="Product Name" value={productName} onChange={(e) => {
                    setProductName(e.target.value)
                }}></input>
                <label>Image URL</label>
                <input value={imageUrl} placeholder="Image URL" onChange={(e) => {
                    setImageUrl(e.target.value)
                }}></input>
                <label>Price</label>
                <input value={price} placeholder="Price" onChange={(e) => {
                    setPrice(e.target.value)
                }}></input>
                <label>Price</label>
                <input value={price} placeholder="Price" onChange={(e) => {
                    setPrice(e.target.value)
                }}></input>
                <label>Contact Number</label>
                <input value={price} placeholder="Contact Number" onChange={(e) => {
                    setContact(e.target.value)
                }}></input>
                <div className="add-sale-btn-div">
                    <button onClick={submitHandler}>Submit</button>
                </div>
            </div>
        </div>
    );
};
