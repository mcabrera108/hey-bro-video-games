import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ErrorPage from "./pages/ErrorPage";
import { useState } from "react";
import Footer from "./components/Footer";
import Shop from "./pages/Shop";
import ProductPage from "./pages/ProductPage";
import cartContext from "./context/cartContext";
import About from "./pages/About";


function Router() {
    const [cartItems, setCartItems] = useState([]);

    const handleAddCartItems = (e, id, quantity) => {
        //Add function to add item to already existing item in cart. 
        //Don't increment cart counter when there are multiple of same product
        //Add function that prevents users from adding more than maximum quantity
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
        },
        {
            path: "/about",
            element: <About />
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