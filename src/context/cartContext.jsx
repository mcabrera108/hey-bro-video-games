import { React, createContext } from "react";

const cartContext = createContext({
    cartItems: [],
    handleAddCartItems: () => { },
});

export default cartContext;