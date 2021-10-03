import React from 'react';
import { PulseLoader,GridLoader } from 'react-spinners';
import { Link } from 'react-router-dom';

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            cart: [],
            lastItem: false
        };
    }
    async componentDidMount() {
        let localCart = JSON.parse(window.localStorage.getItem("cart"));
        if (localCart) {
            for (let i = localCart.length - 1; i >= 0; i--) {
                const res = await fetch("http://134.209.150.130:5037/api/products/" + localCart[i].itemId + "/");
                const data = await res.json();
                this.setState(prevState => ({
                    cart: [...prevState.cart, {id:  localCart[i].itemId , item: data, varient: data.variations.find(item => item.id == localCart[i].varientId), quantity: localCart[i].quantity }]
                }))
                if (!this.state.isLoaded) this.setState({ isLoaded: true })
                if (i == 0) this.setState({ lastItem: true })
            }
        }
        else {
            this.setState({
                isLoaded: true,
            });
        }
    }

    render() {
        const { error, isLoaded, cart } = this.state;
        if (error) {
            return <div>
                <h1 className="display-1 text-start fw-light p-2">Cart</h1>
                <div className="p-5">
                    <h1 className="display-2 text-danger">Error:</h1>

                    <strong>{error.message}</strong>
                </div>

            </div>;
        }
        else if (!isLoaded) {
            return (
                <div >
                    <h1 className="display-1 text-start fw-light p-2">Cart</h1>

                    <div className="p-5 d-flex flex-row align-items-center justify-content-center">
                    <GridLoader color="#555555" margin="10" size={30} />
                    </div>

                </div>);
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
                                 
                                <Link  to={`/product/${items.id}/${items.varient.id}`} >

                                        <img className="img-fluid" style={{ height: 200 }} alt={items.item.title} src={items.item.image}></img>
                                    </Link>

                                    <div className="p-1">
                                        <h3>{items.item.title}</h3>
                                        <h5>Selected Varient : {items.varient.value}</h5>
                                        <h5>Quantity : {items.quantity}</h5>
                                    </div>
                                </div>
                            </div>

                        )}

                        {!this.state.lastItem ?  <div className="p-5 text-center d-flex justify-content-center display-4"> <PulseLoader color="#555555" margin="15"  size={20} /></div>: <div></div>}

                    </div>
                </div>
            );
        }
    }
}

export default Cart;