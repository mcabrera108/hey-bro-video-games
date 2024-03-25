import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import style from "../style_modules/component_module/banner.module.css";
import image_1 from "../assets/heybrovideogames_1.jpg";
import image_2 from "../assets/heybrovideogames_2.jpg";
import image_3 from "../assets/heybrovideogames_3.jpeg";
import { Link } from "react-router-dom";

function Banner() {
    const imageList = [
        image_1,
        image_2,
        image_3,
    ]

    const slideStyle = (image) => {

        return {
            "background": `url(${image})`,
            "backgroundSize": "cover",
            "backgroundPosition": "center",
            "backgroundRepeat": "no-repeat",
            "filter": "blur(4px)",
        }

    }
    return (
        <>
            <Fade transitionDuration={600} arrows={false}>
                <div className={style.eachSlideEffect}>
                    <div style={slideStyle(imageList[0])} title="banner-img-1">
                    </div>
                </div>
                <div className={style.eachSlideEffect}>
                    <div style={slideStyle(imageList[1])} title="banner-img-2">
                    </div>
                </div>
                <div className={style.eachSlideEffect}>
                    <div style={slideStyle(imageList[2])} title="banner-img-3">
                    </div>
                </div>
            </Fade>
            <div className={style.bannerSubContainer}>
                <span className={style.bannerTitleContainer}>
                    Hey Bro!! Video Games
                </span>
                <span className={style.bannerSubtitleContainer}>
                    We BUY, SELL, & TRADE all video games!
                </span>
                <div className={style.bannerBtnContainer}>
                    <Link to="/shop" className={style.bannerRedirectShopBtn}>SHOP NOW</Link>
                </div>
            </div>
        </>
    )
}
export default Banner;