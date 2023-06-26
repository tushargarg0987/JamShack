import axios from "axios"
import React, { useEffect, useState } from "react"
import { baseUrl } from "../../basicConfig";
// import 

export const Request = () => {
    const [isAdding, setIsAdding] = useState(false)
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        axios.get(baseUrl + 'rentProducts').then((response) => {
            setRequests(response.data);
        })
    })

    return (
        <div>
            
        </div>
    )
}