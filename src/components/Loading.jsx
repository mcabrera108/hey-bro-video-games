import React from "react";
import style from "../style_modules/component_module/loading.module.css";

function Loading() {
    return (
        <>
            <div className={style.overlay}></div>
            <div className={style.loaderLayout}>
                <div className={style.loader}></div>
            </div>
        </>


    )
}
export default Loading;