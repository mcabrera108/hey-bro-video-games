import React from "react";
import style from "../style_modules/error.module.css";
import Header from "../components/Header";
function ErrorPage() {
    return (
        <>
            <Header />
            <div className={style.mainErrorContainer}>
                <span className={style.errorHeader}>Error Page 404</span>
                <span className={style.errorSubHeader}>We couldn't find your URL</span>
            </div>
        </>

    )
}
export default ErrorPage;