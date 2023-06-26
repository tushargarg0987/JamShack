import axios from "axios"
import React, { useEffect, useState } from "react"
import { baseUrl } from "../../basicConfig";
import RequestElement from "./requestElement";
import AddRequest from "./addRequest";
// import 

export const Request = () => {
    const [isAdding, setIsAdding] = useState(false)
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        axios.get(baseUrl + 'allRequests').then((response) => {
            setRequests(response.data);
            console.log(response.data);
        })
    }, [])

    if (isAdding) {
        return <AddRequest cancelHandler={()=>{setIsAdding(false)}} />
    }

    return (
        <div>
            <div style={{display: 'flex',width: '100%',justifyContent: 'flex-end',padding: 20}}>
                <button onClick={() => {
                    setIsAdding(true)
                }} style={{backgroundColor: '#2171fc',borderRadius: 3,color: 'white',border: 'none',padding: '3px 7px'}}>Add Request</button>
            </div>
            {requests.map((ele) => {
                return <RequestElement data={ele} />
            })}
        </div>
    )
}