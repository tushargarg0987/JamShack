import React, { createContext, useState } from "react";
import { PRODUCTS } from "../products";

export const ShopContext = createContext(null)

export const BuyContextProvider = (props) => {
    const [SelectedItemContact,setSelectedItemContact] = useState("")
    const [ProductDisplay,setProductDisplay] = useState(false)
    const [SelectedItemImage,setSelectedItemImage] = useState("")
    const [SelectedItemName,setSelectedItemName] = useState("")
    const [SelectedItemPrice,setSelectedItemPrice] = useState("")
    const [SelectedItemOwnerName,setSelectedItemOwnerName] = useState("")
    const [SelectedItemEmail,setSelectedItemEmail] = useState("")
    const clickToBuy = (itemId) => {
        const found = PRODUCTS.find((object)=>{
            return object.id === itemId 
        })
        setSelectedItemContact(found.contact)
        setProductDisplay(true)
        setSelectedItemImage(found.productImage)
        setSelectedItemName(found.productName)
        setSelectedItemPrice(found.price)
        setSelectedItemEmail(found.email)
        setSelectedItemOwnerName(found.name)
    }
   const rentItem = (id) => {
    const found = PRODUCTS.find((object)=>{
        return object.id === id 
    })
    setSelectedItemContact(found.contact)
    setProductDisplay(true)
    setSelectedItemImage(found.productImage)
    setSelectedItemName(found.productName)
    setSelectedItemPrice(found.price)
    setSelectedItemEmail(found.email)
    setSelectedItemOwnerName(found.name)
   }
   const doneProcess = () => {
    setProductDisplay(false)
   }
   const contextValue = {clickToBuy,rentItem,SelectedItemContact,ProductDisplay,SelectedItemImage,SelectedItemName,SelectedItemPrice,SelectedItemEmail,SelectedItemOwnerName,doneProcess}
    return <ShopContext.Provider value={contextValue}>
    {props.children}
    </ShopContext.Provider>
}