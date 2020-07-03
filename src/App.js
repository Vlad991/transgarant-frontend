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
import ClientFormContainer from "./components/ClientForm/ClientFormContainer";
import {connect, Provider} from "react-redux";
import store from "./redux/store";
import CargoItemsContainer from "./components/CargoItems/CargoItemsContainer";
import DocReturnContainer from "./components/DocReturn/DocReturnContainer";
import SummaryContainer from "./components/Summary/SummaryContainer";
import {dopToggle} from "./redux/dopReducer";
import {toggleValuesCollapse} from "./redux/pointsReducer";

class App extends React.Component {
    closeAllCollapse = () => {
        this.props.dopToggle(false);
        this.props.toggleValuesCollapse(false);
    }

    render() {
        return (
            <div className="checkout" onClick={this.closeAllCollapse}>
                <h1 className="checkout__heading">Оформление заказа</h1>

                <CategoryContainer/>

                <CarBodyContainer/>

                <DopContainer/>

                <DocReturnContainer/>

                <RouteContainer/>

                <CargoContainer/>

                <CargoItemsContainer/>

                <TariffContainer/>

                <PaymentContainer/>

                <ClientFormContainer/>

                <SummaryContainer/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({});

let AppContainer = connect(mapStateToProps, {dopToggle, toggleValuesCollapse})(App);

const CheckoutApp = (props) => {
    return <BrowserRouter basename="/oformlenie-zakaza">
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}

export default CheckoutApp;
