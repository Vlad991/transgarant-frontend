import React from 'react';
import './sass/checkout.sass';
import {BrowserRouter} from "react-router-dom";
import CategoryContainer from "./components/Category/CategoryContainer";
import CarBodyContainer from "./components/CarBody/CarBodyContainer";
import DopContainer from "./components/Dop/DopContainer";
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
import {toggleChCollapse, toggleOptionCollapse} from "./redux/carBodyReducer";
import {togglePackageCollapse, togglePalletCollapse} from "./redux/cargoReducer";
import PointsContainer from "./components/Points/PointsContainer";

class App extends React.Component {
    closeAllCollapse = () => {
        this.props.dopToggle(false);
        this.props.toggleValuesCollapse(false);
        this.props.toggleOptionCollapse(false);
        // store.getState().carBodyReducer.body_option_characteristics.forEach(item => {
        //     this.props.toggleChCollapse(item.id, false);
        // });
        this.props.togglePalletCollapse(false);
        this.props.togglePackageCollapse(false);
    }

    render() {
        return (
            <div className="checkout" onClick={this.closeAllCollapse}>
                <h1 className="checkout__heading">РАСЧЕТ СТОИМОСТИ и ОФОРМЛЕНИЕ ЗАКАЗА</h1>

                <CategoryContainer/>

                <CarBodyContainer/>

                <DopContainer/>

                <DocReturnContainer/>

                <PointsContainer/>

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

const mapStateToProps = (state) => ({

});

let AppContainer = connect(mapStateToProps, {dopToggle, toggleValuesCollapse, toggleOptionCollapse, toggleChCollapse, togglePalletCollapse, togglePackageCollapse})(App);

const CheckoutApp = (props) => {
    return <BrowserRouter basename="/">
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}

export default CheckoutApp;
