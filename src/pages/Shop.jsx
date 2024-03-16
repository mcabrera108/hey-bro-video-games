import React from "react";
import useInventory from "../custom_hooks/useInventory";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Card from "../components/Card";
import style from "../style_modules/shop.module.css";

function Shop() {
    const { products, error, loading } = useInventory();

    if (error) return <Error />

    if (loading) return <Loading />
    return (
        <>
            <div className={style.shopContainer}>
                {products.map((product) => {
                    return <Card key={product.id} productDetails={product} />
                })}
            </div>
        </>
    )
}
export default Shop;