import { React, createContext } from "react";

const cartContext = createContext({
    cartItems: [],
    handleAddCartItems: () => { },
    deleteEntries: () => { }
});

export default cartContext;