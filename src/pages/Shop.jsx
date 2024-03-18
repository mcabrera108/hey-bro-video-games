import React, { useState } from "react";
import useInventory from "../custom_hooks/useInventory";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Card from "../components/Card";
import style from "../style_modules/shop.module.css";
import SearchBar from "../components/SearchBar";
import Header from "../components/Header";

function Shop() {
    const { products, error, loading } = useInventory();
    const [filterProducts, setFilterProducts] = useState("");

    function handleSearchUpdate(event) {
        setFilterProducts(event.target.value);
    }

    if (error) return <Error />

    if (loading) return <Loading />
    return (
        <>
            <Header />
            <div className={style.mainContainer}>
                <div className={style.searchContainer}>
                    <SearchBar searchInput={filterProducts} handleSearchUpdate={handleSearchUpdate} />
                </div>
                <div className={style.shopContainer}>
                    {products.filter((product) => product.title.toLowerCase().includes(filterProducts.toLowerCase()))
                        .map((product) => {
                            return <Card productDetails={product} key={product.id} />
                        })}
                </div>
            </div >
        </>

    )
}
export default Shop;