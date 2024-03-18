import React from "react";
import style from "../style_modules/component_module/cardbutton.module.css";
import { Link } from "react-router-dom";
function CardButton({ productID }) {
    return (
        <Link className={style.link} to={`/shop/${productID}`}>
            <button className={style.viewProductBtn}>View Product</button>
        </Link>

    )
}
export default CardButton;