import React from 'react';
import { PulseLoader } from 'react-spinners';

class Categories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            categories: []
        };
    }

    componentDidMount() {
        fetch("http://134.209.150.130:5037/api/categories/?format=json")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        categories: result
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
        const { error, isLoaded, categories } = this.state;
        if (error) {
            return (
                <div className="p-2 my-2 card d-flex flex-column">
                    <h3 className="text-start px-3">Categories</h3>
                  <strong className="py-3"> Error: {error.message}</strong> 
                </div>);
        } else if (!isLoaded) {
            return (
                <div className="p-2 my-2 card d-flex flex-column">
                    <h3 className="text-start px-3">Categories</h3>
                    <div className="px-1 py-4 text-center d-flex justify-content-center display-4"> <PulseLoader color="#555555" margin="15"  size={20} /></div>

                </div>);
        } else {
            return (
                <div className="p-2 my-3 card d-flex flex-column">
                    <h3 className="text-start px-3">Categories</h3>
                    <ul className="d-flex flex-row overflow-auto p-1 m-0 list-unstyled bg-transparent">
                        {categories.map(category => (
                            <li key={category.id} className="p-1">
                                <a className="btn border-0" href="/">
                                    <div className=" d-flex flex-column align-items-center">
                                        <div style={{ height: 80, width: 80 }}>
                                            <img className="img-fluid" alt={category.title} src={category.image}></img>
                                        </div>
                                        <div >< small className="text-nowrap">{category.title}</small></div>
                                    </div>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            );
        }
    }
}


export default Categories;