import React from 'react';
import Tariff from "./Tariff";
import {connect} from "react-redux";
import {loadTariffThunk, setMapType, setTariffThunk} from "../../../redux/checkout/tariffReducer";

class TariffContainer extends React.Component {
    state = {
        isShown: false,
        yandexMapIsShown: false,
        osrmMapIsShown: false
    }

    setView = (value) => {
        this.setState({
            isShown: value
        });
    }

    setYandexMapView = (value) => {
        this.setState({
            yandexMapIsShown: value
        });
    }

    setOsrmMapView = (value) => {
        this.setState({
            osrmMapIsShown: value
        });
    }

    loadAllTariffs = () => {
        this.props.state.tariff_types.forEach(tariff => {
            this.props.loadTariffThunk(tariff.id);
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (
            (prevProps.active_category !== this.props.active_category) ||
            (prevProps.active_body_type !== this.props.active_body_type) ||
            (prevProps.active_body_option !== this.props.active_body_option) ||
            (prevProps.body_option_characteristics !== this.props.body_option_characteristics) ||
            (prevProps.additional_requirements !== this.props.additional_requirements) ||
            (prevProps.docReturn !== this.props.docReturn) ||
            (prevProps.docReturnNames !== this.props.docReturnNames) ||
            (prevProps.lastPointPrice !== this.props.lastPointPrice) ||
            (prevProps.date_from !== this.props.date_from) ||
            (prevProps.date_to !== this.props.date_to) ||
            (prevProps.points !== this.props.points) ||
            (prevProps.places !== this.props.places) ||
            (prevProps.pallets !== this.props.pallets) ||
            (prevProps.packages !== this.props.packages) ||
            (prevState.isShown !== this.state.isShown)) {
            if (this.state.isShown
                && this.props.points.length > 1
                && (this.props.pallets.length > 0 || this.props.packages.length > 0 || this.props.places.length > 0)) {
                this.loadAllTariffs();
            }
        }
        if (prevProps.date_from !== this.props.date_from || prevProps.date_to !== this.props.date_to) {
            this.props.setTariffThunk(this.props.state.selected_tariff);
        }
    }

    render() {
        return (
            <Tariff state={this.props.state}
                    yandexMapIsShown={this.state.yandexMapIsShown}
                    osrmMapIsShown={this.state.osrmMapIsShown}

                    setTariff={this.props.setTariffThunk}
                    setView={this.setView}
                    setYandexMapView={this.setYandexMapView}
                    setOsrmMapView={this.setOsrmMapView}
                    setMapType={this.props.setMapType}/>
        );
    };
}

let mapStateToProps = (state) => ({
    state: state.tariffReducer,
    active_category: state.categoryReducer.active_category,
    active_body_type: state.carBodyReducer.active_body_type,
    active_body_option: state.carBodyReducer.active_body_option,
    body_option_characteristics: state.carBodyReducer.body_option_characteristics,
    additional_requirements: state.dopReducer.additional_requirements,
    docReturn: state.docReturnReducer.show,
    docReturnNames: state.docReturnReducer.names,
    lastPointPrice: state.docReturnReducer.price,
    date_from: state.dateReducer.date_from,
    date_to: state.dateReducer.date_to,
    points: state.pointsReducer.points,
    places: state.cargoReducer.places,
    pallets: state.cargoReducer.pallets,
    packages: state.cargoReducer.packages,
});

export default connect(mapStateToProps, {setTariffThunk, loadTariffThunk, setMapType})(TariffContainer);