import React from 'react';
import {connect} from "react-redux";
import {dopToggle} from "../redux/checkout/dopReducer";
import {toggleValuesCollapse} from "../redux/checkout/pointsReducer";
import {toggleChCollapse, toggleOptionCollapse} from "../redux/checkout/carBodyReducer";
import {togglePackageCollapse, togglePalletCollapse} from "../redux/checkout/cargoReducer";
import Loader from "react-loader-spinner";
const CategoryContainer = React.lazy(() => import('./Checkout/Category/CategoryContainer'));
const CarBodyContainer = React.lazy(() => import('./Checkout/CarBody/CarBodyContainer'));
const DopContainer = React.lazy(() => import('./Checkout/Dop/DopContainer'));
const DocReturnContainer = React.lazy(() => import('./Checkout/DocReturn/DocReturnContainer'));
const PointsContainer = React.lazy(() => import('./Checkout/Points/PointsContainer'));
const CargoContainer = React.lazy(() => import('./Checkout/Cargo/CargoContainer'));
const CargoItemsContainer = React.lazy(() => import('./Checkout/CargoItems/CargoItemsContainer'));
const TariffContainer = React.lazy(() => import('./Checkout/Tariff/TariffContainer'));
const PaymentContainer = React.lazy(() => import('./Checkout/Payment/PaymentContainer'));
const ClientFormContainer = React.lazy(() => import('./Checkout/ClientForm/ClientFormContainer'));
const SummaryContainer = React.lazy(() => import('./Checkout/Summary/SummaryContainer'));

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

                <React.Suspense fallback={<div className="start-loader"><Loader type="Puff" color="#FFB700" height={60} width={60}/></div>}>
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
                </React.Suspense>
            </div>
        );
    };
}

let mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {dopToggle, toggleValuesCollapse, toggleOptionCollapse, toggleChCollapse, togglePalletCollapse, togglePackageCollapse})(Checkout);