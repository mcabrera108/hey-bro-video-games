import React from "react";
import style from "../style_modules/component_module/error.module.css";

function Error() {
    return (
        <div className={style.errorContainer}>
            <span className={style.errorMessage}>A network error occurred while fetching inventory</span>
        </div>
    )
}

export default Error;