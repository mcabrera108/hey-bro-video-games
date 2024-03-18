import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ErrorPage from "./pages/ErrorPage";
import { useState } from "react";
import Footer from "./components/Footer";
import Shop from "./pages/Shop";
import ProductPage from "./pages/ProductPage";
import cartContext from "./context/cartContext";


function Router() {
    const [cartItems, setCartItems] = useState([]);

    const handleAddCartItems = (e, id, quantity) => {
        e.preventDefault();
        setCartItems([
            ...cartItems,
            {
                id: id,
                quantity: quantity
            }
        ])
    }
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            errorElement: <ErrorPage />
        },
        {
            path: "/shop",
            element: <Shop />
        },
        {
            path: "/shop/:id",
            element: <ProductPage />
        }
    ])

    return (
        <cartContext.Provider value={{ cartItems, handleAddCartItems }}>
            <RouterProvider router={router} />
            <Footer />
        </cartContext.Provider>
    )
}
export default Router;