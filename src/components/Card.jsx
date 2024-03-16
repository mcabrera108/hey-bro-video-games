import React from "react";
import style from "../style_modules/component_module/card.module.css";
import PropTypes from "prop-types";

function Card({ productDetails }) {
    return (
        <div className={style.cardContainer}>
            <img src={productDetails.image}
                alt={productDetails.title}
                key={productDetails.key}
                className={style.productCardImage} />
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