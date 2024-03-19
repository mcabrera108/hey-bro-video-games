import React from "react";
import Header from "../components/Header";
import style from "../style_modules/about.module.css";

function About() {
    return (
        <>
            <Header />
            <div className={style.aboutBannerContainer}>
                <img src="https://raw.githubusercontent.com/mcabrera108/shopping-cart-odin-project/main/src/assets/heybrovideogamesentrance.jpg" className={style.aboutBannerImg} />
            </div>
            <div className={style.aboutBannerHeaderContainer}>
                <div className={style.aboutBannerTitleContainer}>About Us</div>
            </div>
            <div className={style.aboutDescriptionContainer}>
                <div className={style.aboutBannerDescription}>
                    Hey Bro!! Video Games started with one man, Mousa.
                    For as long as he could remember, video games were Mousa's passion which is why he began to sell video games from his garage at home.
                    From humble beginnings, he expanded and grew the Hey Bro!! brand, relocating inside Traders Village back in 2017. Him and his team have been there ever since and hope to expand out in the near future!
                </div>
                <div className={style.aboutBannerPhotoContainer}>
                    <img className={style.aboutBannerImage} src="https://raw.githubusercontent.com/mcabrera108/shopping-cart-odin-project/main/src/assets/heybrovideogames_about.jpeg" alt="heybrovideogamesvintageimage" />
                </div>
            </div>

        </>
    )
}
export default About;