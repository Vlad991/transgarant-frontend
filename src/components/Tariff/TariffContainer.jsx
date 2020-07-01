import React from 'react';
import Tariff from "./Tariff";
import {connect} from "react-redux";
import {loadTariffThunk, setTariff} from "../../redux/tariffReducer";

class TariffContainer extends React.Component {

    loadTariff = () => {
        this.props.tariff_types.forEach(tariff => {
            this.props.loadTariffThunk(tariff.id);
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (
            (prevProps.activeCategory !== this.props.activeCategory) ||
            (prevProps.active_body_type !== this.props.active_body_type) ||
            (prevProps.active_body_option !== this.props.active_body_option) ||
            (prevProps.body_option_characteristics !== this.props.body_option_characteristics) ||
            (prevProps.additional_requirements !== this.props.additional_requirements) ||
            (prevProps.docReturn !== this.props.docReturn) ||
            (prevProps.docReturnNames !== this.props.docReturnNames) ||
            (prevProps.lastPointPrice !== this.props.lastPointPrice) ||
            (prevProps.dateFrom !== this.props.dateFrom) ||
            (prevProps.dateTo !== this.props.dateTo) ||
            (prevProps.points !== this.props.points) ||
            (prevProps.places !== this.props.places) ||
            (prevProps.pallets !== this.props.pallets) ||
            (prevProps.packages !== this.props.packages)) {
            this.loadTariff();
        }
    }

    render() {
        return (
            <Tariff tariffTypes={this.props.tariff_types}
                    selectedTariff={this.props.selected_tariff}
                    setTariff={this.props.setTariff}/>
        );
    };
}

let mapStateToProps = (state) => ({
    tariff_types: state.tariffReducer.tariff_types,
    selected_tariff: state.tariffReducer.selected_tariff,
    activeCategory: state.categoryReducer.activeCategory,
    active_body_type: state.carBodyReducer.active_body_type,
    active_body_option: state.carBodyReducer.active_body_option,
    body_option_characteristics: state.carBodyReducer.body_option_characteristics,
    additional_requirements: state.dopReducer.additional_requirements,
    docReturn: state.docReturnReducer.show,
    docReturnNames: state.docReturnReducer.names,
    lastPointPrice: state.docReturnReducer.price,
    dateFrom: state.dateReducer.dateFrom,
    dateTo: state.dateReducer.dateTo,
    points: state.pointsReducer.points,
    places: state.cargoReducer.places,
    pallets: state.cargoReducer.pallets,
    packages: state.cargoReducer.packages,
});

export default connect(mapStateToProps, {setTariff, loadTariffThunk})(TariffContainer);