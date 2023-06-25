import React, { createContext, useState } from "react";
import { PRODUCTS } from "../products";

export const ShopContext = createContext(null);

export const BuyContextProvider = (props) => {
  const [SelectedItemContact, setSelectedItemContact] = useState("");
  const [ProductDisplay, setProductDisplay] = useState(false);
  const [SelectedItemImage, setSelectedItemImage] = useState("");
  const [SelectedItemName, setSelectedItemName] = useState("");
  const [SelectedItemPrice, setSelectedItemPrice] = useState("");
  const [SelectedItemOwnerName, setSelectedItemOwnerName] = useState("");
  const [SelectedItemEmail, setSelectedItemEmail] = useState("");
  const clickToBuy = (data) => {
    setSelectedItemContact(data.contact);
    setProductDisplay(true);
    setSelectedItemImage(data.productImage);
    setSelectedItemName(data.productName);
    setSelectedItemPrice(data.price);
    setSelectedItemEmail(data.email);
    setSelectedItemOwnerName(data.name);
  };
  const rentItem = (data) => {
    setSelectedItemContact(data.contact);
    setProductDisplay(true);
    setSelectedItemImage(data.productImage);
    setSelectedItemName(data.productName);
    setSelectedItemPrice(data.price);
    setSelectedItemEmail(data.email);
    setSelectedItemOwnerName(data.name);
  };
  const doneProcess = () => {
    setProductDisplay(false);
  };
  const contextValue = {
    clickToBuy,
    rentItem,
    SelectedItemContact,
    ProductDisplay,
    SelectedItemImage,
    SelectedItemName,
    SelectedItemPrice,
    SelectedItemEmail,
    SelectedItemOwnerName,
    doneProcess,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
