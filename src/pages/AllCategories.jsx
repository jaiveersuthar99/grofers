import React from 'react';
import { PulseLoader } from 'react-spinners';
class AllCategories extends React.Component {
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
                <div>
                    <h1 className="display-1 text-start fw-light p-2">Categories</h1>

                    <div className="p-2 my-2  d-flex flex-column">

                        <div className="px-1 py-4 text-center d-flex justify-content-center display-4"> <PulseLoader color="#555555" margin="15" size={20} /></div>
                    </div>
                </div>);
        } else {
            return (
                <div>
                    <h1 className="display-1 text-start fw-light p-2">Categories</h1>



                    <div className="container-fluid text-start">

                        {categories.map(category => (
                            <div key={category.id} className="p-1">
                                <a className="btn border-0 card shadow p-2 d-flex flex-row space-between" href="/">
                                    <div className=" d-flex flex-row">
                                        <div style={{ height: 200, width: 200 }}>
                                            <img className="img-fluid" alt={category.title} src={category.image}></img>
                                        </div>
                                        <h3 className="p-3">{category.title}</h3>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            );
        }
    }
}


export default AllCategories;