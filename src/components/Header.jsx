import React from "react";
import Links from "./Links";
import { Link } from "react-router-dom";
import style from "../style_modules/component_module/header.module.css";
import { useContext } from "react";
import cartContext from "../context/cartContext";
function Header() {
    const { cartItems } = useContext(cartContext);
    return (
        <nav className={style.headerContainer}>
            <div className={style.logoContainer}>
                <img src="https://github.com/mcabrera108/shopping-cart-odin-project/blob/main/src/assets/logo.png?raw=true" alt="heybrovideogameslogo" className="logo-img" />
                <div>
                    <Link to="/" className={style.logoTitle}>Hey Bro!! Video Games</Link>
                </div>
            </div>
            <Links />
            <div className={style.shoppingIconContainer}>
                <Link to="/checkout">
                    <i className="fa fa-shopping-cart fa-3x" style={{ color: "white" }} aria-hidden="true"></i>
                    <span style={{ color: "gold" }}>{cartItems.length}</span>
                </Link>
            </div>
        </nav>
    )
}

export default Header;