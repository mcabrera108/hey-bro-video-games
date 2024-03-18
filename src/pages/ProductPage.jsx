import useItem from "../custom_hooks/useItem";
import Error from "../components/Error";
import Loading from "../components/Loading";
import { useParams } from "react-router-dom";
import style from "../style_modules/product.module.css";
import { useContext, useState } from "react";
import cartContext from "../context/cartContext";
import Header from "../components/Header";

function ProductPage() {
    const { id } = useParams();
    const { product, error, loading } = useItem(id);
    const { cartItems, handleAddCartItems } = useContext(cartContext);
    const [quantity, setQuantity] = useState(1);

    function handleQuantityChange(event) {
        setQuantity(event.target.value);
    }

    if (error) return <Error />

    if (loading) return <Loading />
    //Product Price is placed here until API has finished obtaining Product information
    const productPrice = product.price.toFixed(2);
    return (
        <>
            <Header />
            <div className={style.productContainer}>
                <div className={style.imageContainer}>
                    <img src={product.image} className={style.productImage} />
                </div>
                <div className={style.productSummaryContainer}>
                    <h1 className={style.productName}>{product.title}</h1>
                    <h2 className={style.productPrice}>${productPrice}</h2>
                    <span className={style.productCondition}>Condition: New</span>
                    <form onSubmit={(event) => { handleAddCartItems(event, id, quantity) }}>
                        <select name="quantity"
                            id="quantity"
                            className={style.quantitySelect}
                            onChange={handleQuantityChange}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                        <button className={style.cartBtn}>Add To Cart</button>
                    </form>
                </div>
            </div>
        </>

    )
}
export default ProductPage;