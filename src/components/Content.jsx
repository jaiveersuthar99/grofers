import Home from "../pages/Home";
import ProductView from "../pages/ProductView";
import Cart from "../pages/Cart";
import AllCategories from "../pages/AllCategories";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import About from "../pages/About";

export default function Content(props) {

    function handleCallback(childData) {
        props.mainParentCallback(childData);
    }

    return (
        <div className=" content p-2 " >
            <BrowserRouter>
                <Switch>
                    <Route path="/product/:id/:varientId?" render={(props) => <ProductView parentCallback={handleCallback} />} />
                    <Route path="/cart">
                        <Cart />
                    </Route> 
                    <Route path="/categories">
                        <AllCategories />
                    </Route> 
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}