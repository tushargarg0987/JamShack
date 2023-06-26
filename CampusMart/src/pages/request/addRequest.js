import React, { useState } from "react";
import { baseUrl } from "../../basicConfig";
import axios from "axios";

function AddRequest({cancelHandler}) {
    const [message,setMessage] = useState('')
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [contact,setContact] = useState('')

    function submitHandler() {
        axios.post(baseUrl + 'addRequest', {
            message: message,
            name: name,
            email: email,
            contact: contact
        }).then((response) => {
            
        })
        cancelHandler();

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
                <input value={name} placeholder="Name" onChange={(e) => {
                    setName(e.target.value)
                }}></input>
                <label>Email</label>
                <input value={email} placeholder="Email" onChange={(e) => {
                    setEmail(e.target.value)
                }}></input>
                <label>Message</label>
                <input value={message} placeholder="Message" onChange={(e) => {
                    setMessage(e.target.value)
                }}></input>
                <label>Contact Number</label>
                <input value={contact} placeholder="Contact Number" onChange={(e) => {
                    setContact(e.target.value)
                }}></input>
                <div className="add-sale-btn-div">
                    <button onClick={()=>{cancelHandler()}}>Cancel</button>
                    <button onClick={submitHandler}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default AddRequest