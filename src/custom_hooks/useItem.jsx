import React from "react";
import { useState, useEffect } from "react";

function useItem(id) {
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getProducts() {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${id}`, { mode: "cors" });
                const actualData = await response.json();

                if (!response.ok) {
                    throw new Error(
                        `This is an HTTP Error: The status is ${response.data}`
                    )
                }
                setProduct(actualData);
                setError(null);
            } catch (err) {
                setError(err.message);
                setProduct(null);
            } finally {
                setLoading(false);
            }
        };
        getProducts();

    }, []);

    return { product, error, loading };
}

export default useItem;