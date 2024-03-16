import React, { useState } from "react";
import useInventory from "../custom_hooks/useInventory";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Card from "../components/Card";
import style from "../style_modules/shop.module.css";
import SearchBar from "../components/SearchBar";

function Shop() {
    const { products, error, loading } = useInventory();
    const [filterProducts, setFilterProducts] = useState("");

    function handleSearchUpdate(event) {
        setFilterProducts(event.target.value);
    }

    if (error) return <Error />

    if (loading) return <Loading />
    return (
        <div>
            <div className={style.searchContainer}>
                <SearchBar searchInput={filterProducts} handleSearchUpdate={handleSearchUpdate} />
            </div>
            <div className={style.shopContainer}>
                {products.map((product) => {
                    return <Card key={product.id} productDetails={product} />
                })}
            </div>
        </div>
    )
}
export default Shop;