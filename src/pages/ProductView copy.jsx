import React, { useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";
import Header from "../components/Header";


export default function ProductView(props) {
    let localCart = JSON.parse(window.localStorage.getItem("cart"));
    const { id } = useParams();
    const [cartItems, setCartItems] = useState(0);
    let [cart, setCart] = useState([])
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [productVariation, setProductVariation] = useState([]);
    const [productCount, setProductCount] = useState(0);
    const [selectedVariation, setSelectedVariation] = useState(null);

    useEffect(() => {
        fetch("http://134.209.150.130:5037/api/products/" + id + "/")
            .then(res => res.json())
            .then(
                (result) => {
                    setItems(result);
                    setProductVariation(result.variations);
                    setSelectedVariation(
                        result.variations[0].id
                    );
                    setProductCount(
                        localCart ? localCart.find(items => items.varientId == result.variations[0].id) ? localCart.find(items => items.varientId == result.variations[0].id).quantity : 0 : 0
                    );
                    setIsLoaded(true);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
        if (localCart) {
            setCart(localCart);
            let sum = localCart.reduce((total, currentItem) => total = total + currentItem.quantity, 0);
            props.parentCallback(sum);
            setCartItems(sum);
        }
        else {
            setCartItems(0);
        }
    }, [])


    function getBadge() {
        let classes = "badge bg-";
        classes += productCount == 0 ? "warning" : "primary";
        return classes;
    };

    const onChangeValue = ({ target }) => {
        setSelectedVariation(target.id);
        setProductCount(cart.find(items => items.varientId == target.id) ? cart.find(items => items.varientId == target.id).quantity : 0);
    }

    function decreaseCount() {
        let cartCopy = [...cart];
        let varientId = parseInt(selectedVariation);
        let existingQuantity = cartCopy.find(cartItem => cartItem.varientId == varientId).quantity;
        cartCopy = cartCopy.filter(item => item.varientId != varientId)
        existingQuantity -= 1;
        cartCopy.push({ itemId: id, varientId: varientId, quantity: existingQuantity });
        setProductCount(existingQuantity);

        if (!existingQuantity) {
            cartCopy = cartCopy.filter(item => item.varientId != varientId)
        };

        setCart(cartCopy);
        let stringCart = JSON.stringify(cartCopy);
        localStorage.setItem("cart", stringCart);
        props.parentCallback(cartItems - 1 ? cartItems - 1 : 0);
        setCartItems(cartItems - 1);


    }

    function increaseCount() {
        let cartCopy = [...cart];
        let varientId = parseInt(selectedVariation);
        let existingItem = cartCopy.find(cartItem => cartItem.varientId == varientId);
        if (existingItem) {
            existingItem.quantity += 1
            setProductCount(existingItem.quantity)
        } else {
            cartCopy.push({ itemId: id, varientId: varientId, quantity: 1 });
            setProductCount(1);
        }

        console.log(selectedVariation)

        setCart(cartCopy)
        let stringCart = JSON.stringify(cartCopy);
        localStorage.setItem("cart", stringCart);
        props.parentCallback(cartItems + 1);
        setCartItems(cartItems + 1);
        
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div >
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6">
                            <img className="img-fluid" alt={items.title} src={items.image}></img>
                        </div>
                        <div className="col-sm-6 p-5 text-start align-items-center">
                            <div>
                                <h2>{items.title}</h2>
                                <p className="py-1">  <strong>Description : </strong> {items.description}</p>
                            </div>
                            <div className="py-1">
                                <strong className="py-2">Variations </strong><br />
                                <div className="py-2" onChange={onChangeValue} >
                                    {productVariation.map((item, index) =>
                                        <div className="m-1 d-inline" key={item.id}>
                                            <input type="radio" className="btn-check" name="product_variations" id={item.id} value={item.id} autoComplete="off" defaultChecked={index === 0} />
                                            <label className="btn btn-outline-secondary" htmlFor={item.id}>{item.value}</label>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="py-1" id="quantity">
                                <strong className="p-2 m-2  ">Quantity : </strong>
                                <button type="button" id="decreaseBtn" disabled={productCount == 0} onClick={() => decreaseCount()} className="btn m-2  p-2"><strong>-</strong></button>
                                <strong className="p-2 m-2  "><div id="quantity-badge" className={getBadge()}>{productCount} </div></strong>
                                <button type="button" id="increaseBtn" disabled={productCount==productVariation.find(items => items.id == selectedVariation).order_limit} onClick={() => increaseCount()} className="btn m-2 px-2"><strong>+</strong></button>
                            </div>
                            {console.log(productVariation)}
                            <div>
                                {items.keyspecs.map(item =>
                                    <div className="py-1" key={item.key}>
                                        <small> <strong>{item.key} : </strong>{item.value} </small>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
