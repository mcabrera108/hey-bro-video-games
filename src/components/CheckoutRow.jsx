import React from "react";
import style from "../style_modules/component_module/checkoutrow.module.css";
import { Link } from "react-router-dom";

function CheckoutRow({ item, quantity }) {
    const itemPrice = item.price.toFixed(2);
    return (
        <div className={style.checkoutRowContainer}>
            <img src={item.image}
                alt={item.title}
                className={style.checkoutItem} />
            <div className={style.productSummaryRow}>
                <div className={style.productSummaryRow}>
                    <Link to={`/shop/${item.id}`} className={style.itemLink}>{item.title}</Link>
                </div>
                <div className={style.numContainer}>
                    <div className={style.priceContainer}>
                        <span className={style.price}>Price</span>
                        <span className={style.priceTag}>{itemPrice}</span>
                    </div>
                    <div className={style.quantityContainer}>
                        <span className={style.quantity}>Quantity</span>
                        <select name="quantity"
                            id="quantity"
                            className={style.quantitySelect}
                            defaultValue={quantity}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CheckoutRow;