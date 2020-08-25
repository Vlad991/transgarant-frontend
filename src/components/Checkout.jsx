import React from 'react';
import {connect} from "react-redux";
import CategoryContainer from "./Checkout/Category/CategoryContainer";
import CarBodyContainer from "./Checkout/CarBody/CarBodyContainer";
import DopContainer from "./Checkout/Dop/DopContainer";
import DocReturnContainer from "./Checkout/DocReturn/DocReturnContainer";
import PointsContainer from "./Checkout/Points/PointsContainer";
import CargoContainer from "./Checkout/Cargo/CargoContainer";
import CargoItemsContainer from "./Checkout/CargoItems/CargoItemsContainer";
import TariffContainer from "./Checkout/Tariff/TariffContainer";
import PaymentContainer from "./Checkout/Payment/PaymentContainer";
import ClientFormContainer from "./Checkout/ClientForm/ClientFormContainer";
import SummaryContainer from "./Checkout/Summary/SummaryContainer";
import {dopToggle} from "../redux/checkout/dopReducer";
import {toggleValuesCollapse} from "../redux/checkout/pointsReducer";
import {toggleChCollapse, toggleOptionCollapse} from "../redux/checkout/carBodyReducer";
import {togglePackageCollapse, togglePalletCollapse} from "../redux/checkout/cargoReducer";

class Checkout extends React.Component {
    closeAllCollapse = () => {
        this.props.dopToggle(false);
        this.props.toggleValuesCollapse(false);
        this.props.toggleOptionCollapse(false);
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
    };
}

let mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {dopToggle, toggleValuesCollapse, toggleOptionCollapse, toggleChCollapse, togglePalletCollapse, togglePackageCollapse})(Checkout);