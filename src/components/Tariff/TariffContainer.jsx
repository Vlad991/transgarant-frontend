import React from 'react';
import Tariff from "./Tariff";
import {connect} from "react-redux";
import {loadTariffThunk, setTariff} from "../../redux/tariffReducer";

class TariffContainer extends React.Component {

    loadTariff = (inView) => {
        if (inView) {
            this.props.tariff_types.forEach(tariff => {
                this.props.loadTariffThunk(tariff.id);
            });
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.loadTariff(true);
    }

    render() {
        return (
            <Tariff tariffTypes={this.props.tariff_types}
                    selectedTariff={this.props.selected_tariff}
                    setTariff={this.props.setTariff}
                    loadTariff={this.loadTariff}/>
        );
    };
}

let mapStateToProps = (state) => ({
    tariff_types: state.tariffReducer.tariff_types,
    selected_tariff: state.tariffReducer.selected_tariff,
});

export default connect(mapStateToProps, {setTariff, loadTariffThunk})(TariffContainer);