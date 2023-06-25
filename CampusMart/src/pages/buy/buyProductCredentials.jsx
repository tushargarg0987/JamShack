import React, { useContext } from "react";
import { ShopContext } from "../../context/buy-context";

export const BuyProductCredentials = () => {
    const {SelectedItemContact,ProductDisplay,SelectedItemImage,SelectedItemName,SelectedItemPrice,SelectedItemEmail,SelectedItemOwnerName,doneProcess} = useContext(ShopContext)
    const mailID = "mailto:" + {SelectedItemEmail}
    const telephoneNumber = "tel:" + {SelectedItemContact}
    return <div style={{display:ProductDisplay?"block":"none"}}>
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
                    <button className="doneProcess" onClick={()=>doneProcess()}>Done</button>
                </div>
            </div>
        </div>
    </div>
}