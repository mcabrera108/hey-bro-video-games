import { Link } from "react-router-dom";
import style from "../style_modules/component_module/links.module.css";

function Links() {
    return (<>
        <ul>
            <li><Link to="/" className={style.navLink}>Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/shop">Shop</Link></li>
        </ul>
    </>)
}
export default Links;