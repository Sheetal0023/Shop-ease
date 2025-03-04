import React from "react";
import { NavLink } from "react-router-dom";
import '../Header/Header.css'
import ShopImg from '../Assets/shopping-bag.png'
import ThemeOptions from "../ThemeOptions";

const Header = () => {
    return (
        <div className="header_main">
            <div className="header_logo">
                <NavLink to={"/"}>
                <img src={ShopImg} alt="Image" width="64px"/>
                </NavLink>
            </div>
            <div className="navLinks">
                <div>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/sign">Sign Up</NavLink>
                    <NavLink to="/login">Login</NavLink>
                    
                </div>  
                <div className="theme-options">
                    <ThemeOptions theme="dark" />
                    <ThemeOptions theme="light"  />
                </div>
            </div>
            
        </div>
    )
}

export default Header