import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ErrorPage from "./pages/ErrorPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Shop from "./pages/Shop";


function Router() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            errorElement: <ErrorPage />
        },
        {
            path: "/shop",
            element: <Shop />
        }
    ])

    return (
        <>
            <Header />
            <RouterProvider router={router} />
            <Footer />
        </>
    )
}
export default Router;