import React from 'react';
import { Link } from 'react-router-dom';
import { PulseLoader } from 'react-spinners';
import './styles.css';
class Products extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            products: []
        };
    }

    componentDidMount() {
        fetch("http://134.209.150.130:5037/api/products/?format=json")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        products: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, products } = this.state;
        if (error) {
            return (
                <div className="p-2 my-2 card d-flex flex-column">
                    <h3 className="text-start px-3">Products</h3>
                    <strong className="py-3"> Error: {error.message}</strong> 

                </div>);

        } else if (!isLoaded) {
            return (
                <div className="p-2 my-2 card d-flex flex-column">
                    <h3 className="text-start px-3">Products</h3>
                    <div className="p-5 text-center d-flex justify-content-center display-4"> <PulseLoader color="#555555" margin="15"  size={20} /></div>

                </div>);
        } else {
            return (

                <div className="p-2 my-2 card d-flex flex-column">
                    <h3 className="text-start px-3">Products</h3>
                    <ul className=" overflow-auto p-1 m-0 list-unstyled bg-transparent">
                        {products.map(product => (
                            <li key={product.product_id} className="p-2 d-inline-block">
                                <Link className="p-1 btn btn-outline-secondary border-0" to={`/product/${product.id}`} >
                                    <div className=" d-flex flex-column align-products-center">
                                        <div style={{ height: 150, width: 150 }}>
                                            <img className="img-fluid" alt={product.title} src={product.image}></img>
                                        </div>
                                        <div className="bg-white text-secondary" >< small className="text-nowrap">{product.title}</small></div>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            );
        }
    }
}


export default Products;