import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css"

export const Navbar = () =>{
    return <div className="navBar">
        <h1>CampusMart</h1>
        <div className="navbar1">
            <div className="links">
                <Link to="/">Buy</Link>
                <Link to="/sell">Sell</Link>
                <Link to="/request">Request</Link>
                <Link to="/rent">Rent</Link>
            </div>
        </div>
    </div>
}