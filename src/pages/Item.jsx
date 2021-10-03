import React from 'react';

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            productVariations: [],
            productCount: 0,
            selectedVariation: null
        };
        this.onChangeValue = this.onChangeValue.bind(this);

    }

    componentDidMount() {
        const id = this.props.match.params.id;
        fetch("http://134.209.150.130:5037/api/products/" + id + "/")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        items: result,
                        productVariations: result.variations,
                        productCount: window.localStorage.getItem(result.variations.id) ? window.localStorage.getItem(result.variations.id) : 0,
                        isLoaded: true
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

    increaseCount = () => {
        console.log(this.state.items.product_id);

        let id = this.state.items.product_id;
        if (!window.localStorage.getItem(id)) {
            window.localStorage.setItem(id, 1);
            this.setState({ productCount: 1 });
        }
        else {
            let count = parseInt(window.localStorage.getItem(id));
            window.localStorage.setItem(id, count + 1)
            this.setState({ productCount: window.localStorage.getItem(id) })
        }
    }
    decreaseCount = () => {
        // let count = parseInt(window.localStorage.getItem(id));
        // window.localStorage.setItem(id, count - 1)
        // this.setState({ productCount: window.localStorage.getItem(id) })
    }

    onChangeValue(event) {
        this.setState({ selectedVariation: event.target.id });
        this.setState({ productCount: event.target.id});
        console.log(event.target.id)
    }

    render() {
        const { error, isLoaded, items, productVariations, productCount } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>
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
                                    <div className="py-2" onChange={this.onChangeValue} >
                                        {productVariations.map(item =>
                                            <div className="m-1 d-inline" key={item.id}>
                                                <input type="radio" className="btn-check" name="product_variations" id={item.id} autoComplete="off" />
                                                <label className="btn btn-outline-secondary" htmlFor={item.id}>{item.value}</label>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="py-1">
                                    <strong className="p-2 m-2  ">Quantity : </strong>
                                    <button type="button" id="decreaseBtn" disabled={productCount == 0} onClick={this.decreaseCount} className="btn m-2  p-2"><strong>-</strong></button>
                                    <strong className="p-2 m-2  "><div id="quantity-badge" className={this.getBadge()}>{productCount} </div></strong>
                                    <button type="button" id="increaseBtn" onClick={this.increaseCount} className="btn m-2 px-2"><strong>+</strong></button>
                                </div>
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

    getBadge() {
        let classes = "badge bg-";
        classes += this.state.productCount == 0 ? "warning" : "primary";
        return classes;
    }
}

export default Item;