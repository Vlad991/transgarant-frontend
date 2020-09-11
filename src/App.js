import React from 'react';
import './sass/common.sass';
import './sass/checkout/checkout.sass';
import './sass/registration/registration.sass';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {connect, Provider} from "react-redux";
import store from "./redux/store";
import Registration from "./components/Registration";

class App extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Registration}/>
            </Switch>
        );
    }
}

const mapStateToProps = (state) => ({});

let AppContainer = connect(mapStateToProps, {})(App);

const CheckoutApp = (props) => {
    return <Provider store={store}>
        <BrowserRouter>
            <AppContainer/>
        </BrowserRouter>
    </Provider>
}

export default CheckoutApp;
