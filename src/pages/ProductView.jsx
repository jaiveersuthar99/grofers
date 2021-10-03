import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GridLoader } from "react-spinners";

export default function ProductView(props) {
    let localCart = JSON.parse(window.localStorage.getItem("cart"));
    const { id, varientId } = useParams();
    const [cartItems, setCartItems] = useState(0);
    let [cart, setCart] = useState([])
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [productVariation, setProductVariation] = useState([]);
    const [productCount, setProductCount] = useState(0);
    const [selectedVariation, setSelectedVariation] = useState(null);
    const [orderLimit, setOrderLimit] = useState(0);
    const [MRP, setMRP] = useState(0);
    const [sellingPrice, setSellingPrice] = useState(0);
    const [discountPrice, setDiscountPrice] = useState(0);
    const [discountPercentage, setDiscountPercentage] = useState(0);
    const [stockLeft, setStockLeft] = useState(null);

    useEffect(() => {
        fetch("http://134.209.150.130:5037/api/products/" + id + "/")
            .then(res => res.json())
            .then(
                (result) => {
                    setItems(result);
                    setProductVariation(result.variations);
                    setSelectedVariation(
                        varientId == null ? result.variations[0] : result.variations.find(items => items.id == varientId)
                    );
                    setOrderLimit(
                        // result.variations[0].order_limit
                        varientId == null ? result.variations[0].order_limit : result.variations.find(items => items.id == varientId).order_limit
                    );
                    setStockLeft(
                        varientId == null ? result.variations[0].stock_left : result.variations.find(items => items.id == varientId).stock_left
                    );
                    setMRP(
                        varientId == null ? result.variations[0].mrp : result.variations.find(items => items.id == varientId).mrp
                    );
                    setSellingPrice(
                        varientId == null ? result.variations[0].price : result.variations.find(items => items.id == varientId).price
                    );
                    setDiscountPrice(
                        varientId == null ? result.variations[0].discount_price : result.variations.find(items => items.id == varientId).discount_price
                    );
                    setDiscountPercentage(
                        varientId == null ? result.variations[0].discount_percentage : result.variations.find(items => items.id == varientId).discount_percentage
                    );
                    setProductCount(
                        localCart ? varientId == null ? localCart.find(items => items.varientId == result.variations[0].id) ? localCart.find(items => items.varientId == result.variations[0].id).quantity : 0 : localCart.find(items => items.varientId == varientId) ? localCart.find(items => items.varientId == varientId).quantity : 0 : 0
                    );
                    setIsLoaded(true);
                },
                (error) => {
                    setError(error);
                    setIsLoaded(true);
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
        let variation = productVariation.find(items => items.id == target.id);
        setSelectedVariation(variation);
        setStockLeft(variation.stock_left);
        setOrderLimit(variation.order_limit);
        setMRP(variation.mrp);
        setSellingPrice(variation.price);
        setDiscountPrice(variation.discount_price);
        setDiscountPercentage(variation.discount_percentage);
        setProductCount(cart.find(items => items.varientId == target.id) ? cart.find(items => items.varientId == target.id).quantity : 0);
    }

    function decreaseCount() {
        let cartCopy = [...cart];
        let varientId = parseInt(selectedVariation.id);
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
        let varientId = parseInt(selectedVariation.id);
        let existingItem = cartCopy.find(cartItem => cartItem.varientId == varientId);
        cartCopy = cartCopy.filter(item => item.varientId != varientId)


        if (existingItem) {
            existingItem.quantity += 1;
            cartCopy.push({ itemId: id, varientId: varientId, quantity: existingItem.quantity });

            setProductCount(existingItem.quantity)
        } else {
            cartCopy.push({ itemId: id, varientId: varientId, quantity: 1 });
            setProductCount(1);
        }


        setCart(cartCopy)
        let stringCart = JSON.stringify(cartCopy);
        localStorage.setItem("cart", stringCart);
        props.parentCallback(cartItems + 1);
        setCartItems(cartItems + 1);

    }

    if (error) {
        return <div>

            <div className="ps-2 py-5 text-start">
                <h1 className="display-1 text-secondary">Error</h1>

                <p className="display-4 text-secondary">{error.message}</p>
            </div>

        </div>;
    } else if (!isLoaded) {
        return <div className="p-5">

            <div className="p-5 d-flex flex-row align-items-center justify-content-center">
                <GridLoader color="#555555" margin="10" size={30} />
            </div>
        </div>;
    } else {
        return (
            <div className="pt-3">
                <h2 className="display-4 m-0 ps-2 pb-2 text-start">{items.title}</h2>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6">
                            <img className="img-fluid" alt={items.title} src={items.image}></img>
                        </div>
                        <div className="col-sm-6  text-start align-items-center">
                            <div>
                                <p className="pt-3">{items.description}</p>
                            </div>

                            <div className="py-2 ">
                                < p className="p-0 m-0"><s>MRP : &#x20B9;{MRP}</s></p>
                                <h4 className="p-0 m-0"><s>Selling Price :  &#x20B9;{sellingPrice}</s></h4>
                                <div className="d-flex flex-column ">
                                    <div className="d-flex flex-row ">
                                        <h1 className="d-flex fw-light flex-column justify-content-end">Discount Price : </h1>
                                        <p className="display-4  d-inline m-0"> &#x20B9;{discountPrice}</p>

                                    </div>

                                    <h4 className="text-success fw-bold">You save {discountPercentage}%</h4>

                                </div>
                            </div>
                            <div className="py-3">
                                <h4>  <strong className="py-2">Select a Variation </strong></h4>
                                <div className="py-1 d-flex flex-row overflow-auto" onChange={onChangeValue} >
                                    {productVariation.map((item, index) =>
                                        <div className="m-3 d-flex flex-row" key={item.id}>
                                            <input type="radio" className="form-check-input" name="product_variations" id={item.id} value={item.id} autoComplete="off" defaultChecked={varientId == null ? index === 0 : item.id == varientId} />
                                            <label className="form-check-label px-1" htmlFor={item.id}>{item.value}</label>
                                        </div>
                                    )}
                                </div>
                                <div className='text-danger'><small><strong>Stock Left : {stockLeft}</strong></small></div>


                            </div>
                            <div className="py-3" id="quantity">
                                <h4 >  <strong className="py-2">Add to Cart</strong></h4>
                                <div >
                                    <strong>Quantity : </strong>
                                    <button type="button" id="decreaseBtn" disabled={productCount == 0} onClick={() => decreaseCount()} className="btn mx-2 p-0 px-2"><strong>-</strong></button>
                                    <strong className="px-2 mx-2  "><div id="quantity-badge" className={getBadge()}>{productCount} </div></strong>
                                    <button type="button" id="increaseBtn" disabled={productCount == selectedVariation.order_limit} onClick={() => increaseCount()} className="btn mx-2 p-0 px-2"><strong>+</strong></button>

                                    <div className={productCount === selectedVariation.order_limit ? ' text-danger ' : ' text-secondary'}><small><strong>Order Limit : {orderLimit}</strong></small></div>
                                </div>

                            </div>


                        </div>
                    </div>
                </div>
                <div className="py-1 text-start">
                    {items.keyspecs.map(item =>
                        <div className="py-1" key={item.key}>
                            <small> <strong>{item.key} : </strong>{item.value} </small>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

