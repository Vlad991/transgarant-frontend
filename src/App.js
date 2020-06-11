import React from 'react';
import './sass/checkout.sass';
import {BrowserRouter} from "react-router-dom";
import CategoryContainer from "./components/Category/CategoryContainer";
import CarBodyContainer from "./components/CarBody/CarBodyContainer";
import DopContainer from "./components/Dop/DopContainer";
import RouteContainer from "./components/Route/RouteContainer";
import CargoContainer from "./components/Cargo/CargoContainer";
import TariffContainer from "./components/Tariff/TariffContainer";
import PaymentContainer from "./components/Payment/PaymentContainer";
import SocialContainer from "./components/Social/SocialContainer";
import ClientFormContainer from "./components/ClientForm/ClientFormContainer";
import {connect, Provider} from "react-redux";
import store from "./redux/store";

class App extends React.Component {
    render() {
        return (
            <div className="checkout">
                <h1 className="checkout__heading">Оформление заказа</h1>

                <CategoryContainer/>

                <CarBodyContainer/>

                <DopContainer/>

                <RouteContainer/>

                <CargoContainer/>

                <TariffContainer/>

                <PaymentContainer/>

                <SocialContainer/>

                <ClientFormContainer/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    state: state
})

let AppContainer = connect(mapStateToProps, {})(App);

const CheckoutApp = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}

export default CheckoutApp;
