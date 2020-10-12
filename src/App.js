import React from 'react';
import './sass/common.sass';
import './sass/checkout/checkout.sass';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {connect, Provider} from "react-redux";
import store from "./redux/store";
import Checkout from "./components/Checkout";

class App extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Checkout}/>
            </Switch>
        );
    }
}

const mapStateToProps = (state) => ({});

let AppContainer = connect(mapStateToProps, {})(App);

const CheckoutApp = (props) => {
    return <Provider store={store}>
        <BrowserRouter basename="/">
            <AppContainer/>
        </BrowserRouter>
    </Provider>
}

export default CheckoutApp;
