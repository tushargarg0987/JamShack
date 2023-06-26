import React, { useContext, useState } from "react";
import { ShopContext } from "../../context/buy-context";
import ChatScreen from "../chat";

export const BuyProductCredentials = () => {
    const {SelectedItemId,SelectedItemContact,ProductDisplay,SelectedItemImage,SelectedItemName,SelectedItemPrice,SelectedItemEmail,SelectedItemOwnerName,doneProcess} = useContext(ShopContext)
    const mailID = "mailto:" + {SelectedItemEmail}
    const telephoneNumber = "tel:" + {SelectedItemContact}
    const [isChatting,setIsChatting] = useState(false)

    function chatHandler() {
        setIsChatting(true);
    }

    if (isChatting) {
        return <ChatScreen id={SelectedItemId} name={"User"} setIsChatting={setIsChatting} />
    }

    return <div style={{ display: ProductDisplay ? "block" : "none" }}>
        {/* <div className="productTitle">
            <h1>Product Name: {SelectedItemName}</h1>
        </div> */}
        <div className="buyProduct">
            <div className="card">
                <div className="card-header">
                    <h1 >Product Name : {SelectedItemName}</h1>
                </div>
                <div className="card-body">
                    <img src={SelectedItemImage} />
                    <h2>Price: Rs.{SelectedItemPrice}</h2>
                    <h2 className="description">Name: {SelectedItemOwnerName}</h2>
                    <h2 className="description">Contact: <a href={telephoneNumber} style={{textDecoration:"none"}}>{SelectedItemContact}</a></h2>
                    <h2 className="description">Email: <a href={mailID} style={{textDecoration:"none"}}>{SelectedItemEmail}</a></h2>
                    <button className="doneProcess" onClick={() => doneProcess()}>Done</button>
                    <button onClick={chatHandler}>Chat</button>
                </div>
            </div>
        </div>
    </div>
}