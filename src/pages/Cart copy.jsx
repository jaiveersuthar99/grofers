import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


export default function Cart(props) {
    let localCart = JSON.parse(window.localStorage.getItem("cart"));
  
    let cartItems = [];
    const { id } = useParams();
    // const [cartItems, setCartItems] = useState(0);
    let [cart, setCart] = useState([])
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [productVariation, setProductVariation] = useState([]);
    const [productCount, setProductCount] = useState(0);
    const [selectedVariation, setSelectedVariation] = useState(null);
    const [orderLimit, setOrderLimit] = useState(0);
    const [stockLeft, setStockLeft] = useState(null);

    useEffect(() => {
        if (localCart) {
            for (let i = 0; i < localCart.length; i++) {
                fetch("http://134.209.150.130:5037/api/products/" + localCart[i].itemId + "/")
                    .then(res => res.json())
                    .then(
                        (result) => {
                            setCart(prevArray => [...prevArray, { item: result, varient: result.variations.find(item => item.id == localCart[i].varientId), quantity: localCart[i].quantity }]);
                            setIsLoaded(true);
                            console.log(result);
                        },
                        (error) => {
                            setIsLoaded(true);
                            setError(error);
                        },
                    );
            }
        }
        else {
            setIsLoaded(true);
        }
        console.log(localCart);
    }, [])


    if (error) {
        return <div>Error: {error.message}</div>;
    }
    else if (!isLoaded) {
        return <div>Loading...</div>;
    }
    else {
        return (
            <div>
                <h1 className="display-1 text-start fw-light p-2">Cart</h1>
                {cart.length == 0 ? <div className="display-1 fw-lighter py-5 text-secondary">Nothing Here</div> : <div></div>}
                <div className="container-fluid text-start">
                    {cart.map((items, index) =>
                        <div className="p-1 my-1" key={index}>
                            <div className="card shadow p-2 d-flex flex-row space-between">
                                <div >
                                    <img className="img-fluid" style={{ height: 220 }} alt={items.item.title} src={items.item.image}></img>
                                </div>
                                <div className="p-1">
                                    <h3>{items.item.title}</h3>
                                    <h5>Selected Varient : {items.varient.value}</h5>
                                    <h5>Quantity : {items.quantity}</h5>
                                </div>
                            </div>
                            {console.log(cart.length)}
                        </div>
                    )}
                </div>
            </div>
        );
    }
}
