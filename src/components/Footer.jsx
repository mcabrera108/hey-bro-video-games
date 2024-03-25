import style from "../style_modules/component_module/footer.module.css";

function Footer() {
    const iconStyle = {
        "color": "white",
        "margin": "0px 5px"
    }
    return (
        <footer className={style.footerContainer}>
            <div className={style.connectContainer}>
                <span className={style.connectHeader}>Connect With Us</span>
                <div className={style.iconContainer}>
                    <a href="https://www.instagram.com/heybrovideogames/?hl=en" target="_blank">
                        <i className="fa fa-instagram fa-3x" aria-hidden="true" style={iconStyle}></i>
                    </a>
                    <a href="https://www.facebook.com/p/Hey-Bro-Video-Games-100059801695413/" target="_blank">
                        <i className="fa fa-facebook-official fa-3x" aria-hidden="true" style={iconStyle}></i>
                    </a>
                    <a href="https://www.youtube.com/@HeyBroVideoGames" target="_blank">
                        <i className="fa fa-youtube-play fa-3x" aria-hidden="true" style={iconStyle}></i>
                    </a>
                </div>
                <span className={style.copyrightTitle}>© 2023 by Hey Bro!! Video Games</span>
            </div>
        </footer>
    )
}
export default Footer;