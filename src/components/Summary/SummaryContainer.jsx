import React from 'react';
import Summary from "./Summary";
import {connect} from "react-redux";

class SummaryContainer extends React.Component {
    state = {
        showSummary: false
    }

    toggleSummary = () => {
        this.setState({
            showSummary: !this.state.showSummary
        })
    }

    scrollToBottom = () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            left: 0,
            behavior: 'smooth'
        });
    }

    render() {
        return (
            <Summary tariffTypes={this.props.tariff_types}
                     selectedTariff={this.props.selected_tariff}
                     categories={this.props.categories}
                     activeCategory={this.props.active_category}
                     bodyOptions={this.props.body_options}
                     activeBodyOption={this.props.active_body_option}
                     additional={this.props.additional_requirements}
                     dateFrom={this.props.date_from}
                     dateTo={this.props.date_to}
                     bodyOptionCh={this.props.body_option_characteristics}
                     points={this.props.points}
                     docReturn={this.props.docReturn}
                     lastPointAddress={this.props.last_point_address}
                     lastPointAddressLongitude={this.props.last_point_address_longitude}
                     lastPointAddressLatitude={this.props.last_point_address_latitude}
                     lastPointFullName={this.props.last_point_full_name}
                     lastPointPhone={this.props.last_point_phone}
                     cargoName={this.props.cargoName}
                     totalWeight={this.props.total_weight}
                     totalVolume={this.props.total_volume}
                     totalArea={this.props.total_area}
                     pallets={this.props.pallets}
                     packages={this.props.packages}
                     places={this.props.places}
                     clientName={this.props.client_name}
                     clientNumber={this.props.client_number}
                     clientEmail={this.props.client_email}
                     selectedPayment={this.props.selected_payment}
                     payments={this.props.payments}

                     scrollToBottom={this.scrollToBottom}
                     showSummary={this.state.showSummary}
                     toggleSummary={this.toggleSummary}
            />
        );
    };
}

let mapStateToProps = (state) => ({
    tariff_types: state.tariffReducer.tariff_types,
    selected_tariff: state.tariffReducer.selected_tariff,
    categories: state.categoryReducer.categories,
    active_category: state.categoryReducer.active_category,
    body_options: state.carBodyReducer.body_options,
    active_body_option: state.carBodyReducer.active_body_option,
    additional_requirements: state.dopReducer.additional_requirements,
    date_from: state.dateReducer.date_from,
    date_to: state.dateReducer.date_to,
    body_option_characteristics: state.carBodyReducer.body_option_characteristics,
    points: state.pointsReducer.points,
    docReturn: state.docReturnReducer.show,
    last_point_address: state.docReturnReducer.address,
    last_point_address_longitude: state.docReturnReducer.address_longitude,
    last_point_address_latitude: state.docReturnReducer.address_latitude,
    last_point_full_name: state.docReturnReducer.full_name,
    last_point_phone: state.docReturnReducer.phone,
    cargoName: state.cargoReducer.name,
    total_weight: state.cargoReducer.total_weight,
    total_volume: state.cargoReducer.total_volume,
    total_area: state.cargoReducer.total_area,
    pallets: state.cargoReducer.pallets,
    packages: state.cargoReducer.packages,
    places: state.cargoReducer.places,
    client_name: state.clientFormReducer.client_name,
    client_number: state.clientFormReducer.client_number,
    client_email: state.clientFormReducer.client_email,
    selected_payment: state.paymentReducer.selected_payment,
    payments: state.paymentReducer.payments
});

export default connect(mapStateToProps, {})(SummaryContainer);