import React, {Component} from 'react';
import Topbar from "./layout/Navbar/Navbar";
import './App.css'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage/ProductPage";
import CartPage from "./pages/CartPage/CartPage";

class App extends Component {

    render() {
        return (
            <Router>
                <Topbar/>
                <Switch>
                    <Route exact path={'/'} component={CategoryPage}/>
                    <Route path={'/product/:id'} component={ProductPage}/>
                    <Route path={'/cart'} component={CartPage}/>
                </Switch>
            </Router>
        )
    }
}
export default App;