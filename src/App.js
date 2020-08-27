import React from 'react';
import './sass/common.sass';
import './sass/checkout/checkout.sass';
import './sass/registration/registration.sass';
import {BrowserRouter, Route} from "react-router-dom";
import {connect, Provider} from "react-redux";
import store from "./redux/store";
import Checkout from "./components/Checkout";
import Registration from "./components/Registration";

class App extends React.Component {
    render() {
        return (
            <div className="container-wrap">
                <Route exact path='/' render={() => <Checkout/>}/>
                <Route path='/checkout' render={() => <Checkout/>}/>
                <Route path='/registration' render={() => <Registration/>}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({});

let AppContainer = connect(mapStateToProps, {})(App);

const CheckoutApp = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}

export default CheckoutApp;
