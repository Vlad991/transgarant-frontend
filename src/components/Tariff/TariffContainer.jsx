import React from 'react';
import Tariff from "./Tariff";
import {connect} from "react-redux";
import {setTariff} from "../../redux/tariffReducer";

class TariffContainer extends React.Component {
    render() {
        return (
            <Tariff tariffTypes={this.props.tariff_types} selectedTariff={this.props.selected_tariff} setTariff={this.props.setTariff}/>
        );
    };
}

let mapStateToProps = (state) => ({
    tariff_types: state.tariffReducer.tariff_types,
    selected_tariff: state.tariffReducer.selected_tariff
});

export default connect(mapStateToProps, {setTariff})(TariffContainer);