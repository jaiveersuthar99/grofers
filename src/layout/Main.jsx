import Header from "../components/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";
import { useState, useEffect, useCallback } from "react";

export default function Main() {
    const [cartItems, setCartItems] = useState(null);



    const handleCallback = useCallback((childData) => {
        setCartItems(childData);

    }, [cartItems]);

    return (
        <div>
            <Header cartItems={cartItems} />
            <Content mainParentCallback={handleCallback} />
            <Footer />
        </div>
    );
}