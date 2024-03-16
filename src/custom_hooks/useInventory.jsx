import { useState, useEffect } from "react";

function useInventory() {
    const [products, setProducts] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getProducts() {
            try {
                const response = await fetch('https://fakestoreapi.com/products/', { mode: "cors" });
                const actualData = await response.json();

                if (!response.ok) {
                    throw new Error(
                        `This is an HTTP Error: The status is ${response.data}`
                    )
                }
                setProducts(actualData);
                setError(null);
            } catch (err) {
                setError(err.message);
                setProducts(null);
            } finally {
                setLoading(false);
            }
        };
        getProducts();

    }, []);

    return { products, error, loading };
}

export default useInventory;