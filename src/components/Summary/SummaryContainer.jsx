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

    render() {
        return (
            <Summary
                showSummary={this.state.showSummary}
                toggleSummary={this.toggleSummary}
                tariffTypes={this.props.tariff_types}
                selectedTariff={this.props.selected_tariff}
                categories={this.props.categories}
                activeCategory={this.props.activeCategory}
                bodyOptionCh={this.props.body_option_characteristics}
                bodyOptions={this.props.body_options}
                activeBodyOption={this.props.active_body_option}
                additional={this.props.additional_requirements}
                dateFrom={this.props.dateFrom}
                dateTo={this.props.dateTo}
                points={this.props.points}
                docReturn={this.props.docReturn}
                lastPoint={this.props.lastPoint}
                cargoName={this.props.cargoName}
                totalWeight={this.props.total_weight}
                totalVolume={this.props.total_volume}
                totalArea={this.props.total_area}
                pallets={this.props.pallets}
                packages={this.props.packages}
                places={this.props.places}
                clientName={this.props.client_name}
                clientNumber={this.props.client_number}
                clientEmail={this.props.client_email}/>
        );
    };
}

let mapStateToProps = (state) => ({
    tariff_types: state.tariffReducer.tariff_types,
    selected_tariff: state.tariffReducer.selected_tariff,
    categories: state.categoryReducer.categories,
    activeCategory: state.categoryReducer.activeCategory,
    body_options: state.carBodyReducer.body_options,
    active_body_option: state.carBodyReducer.active_body_option,
    additional_requirements: state.dopReducer.additional_requirements,
    dateFrom: state.dateReducer.dateFrom,
    dateTo: state.dateReducer.dateTo,
    body_option_characteristics: state.carBodyReducer.body_option_characteristics,
    points: state.pointsReducer.points,
    docReturn: state.docReturnReducer.show,
    lastPoint: {
        address: state.docReturnReducer.address,
        address_longitude: state.docReturnReducer.address_longitude,
        address_latitude: state.docReturnReducer.address_latitude,
        fullName: state.docReturnReducer.fullName,
        phone: state.docReturnReducer.phone
    },
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
});

export default connect(mapStateToProps, {})(SummaryContainer);