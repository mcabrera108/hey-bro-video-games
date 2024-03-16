import React from "react";
import style from "../style_modules/component_module/card.module.css";
import PropTypes from "prop-types";
import CardButton from "./CardButton";

function Card({ productDetails }) {
    const productPrice = productDetails.price.toFixed(2);
    return (
        <div className={style.cardContainer}>
            <img src={productDetails.image}
                alt={productDetails.title}
                key={productDetails.key}
                className={style.productCardImage} />
            <p className={style.productTitle}>{productDetails.title}</p>
            <span className={style.productTag}>{productDetails.category}</span>
            <span className={style.priceTag}>{productPrice} USD</span>
            <CardButton />
        </div>
    )
}

Card.propTypes = {
    productDetails: PropTypes.object.isRequired,
}
Card.defaultProps = {
    productDetails: { id: "noNum", title: "Invalid Product", price: "noPrice", image: "No Image" }
}
export default Card;