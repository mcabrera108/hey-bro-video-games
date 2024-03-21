import React from "react";
import Header from "../components/Header";
import style from "../style_modules/checkout.module.css";
import { useContext } from "react";
import Error from "../components/Error";
import Loading from "../components/Loading";
import cartContext from "../context/cartContext";
import CheckoutRow from "../components/CheckoutRow";
import useInventory from "../custom_hooks/useInventory";

function Checkout() {
    const { cartItems, deleteEntries } = useContext(cartContext);
    const { products, error, loading } = useInventory();

    if (error) return <Error />

    if (loading) return <Loading />

    return (
        <>
            <Header />
            <div className={style.checkoutContainer}>
                {cartItems.map((item) => {
                    return <CheckoutRow item={products[item.id - 1]} quantity={item.quantity} key={item.id} />
                })}
            </div>
            <div className={style.btnContainer}>
                <button className={style.checkoutBtn} type="button" onClick={deleteEntries}>Checkout</button>
            </div>

        </>
    )
}
export default Checkout;