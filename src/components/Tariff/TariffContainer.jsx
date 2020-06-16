import React from 'react';
import Tariff from "./Tariff";
import {connect} from "react-redux";
import {loadTariffThunk, setTariff} from "../../redux/tariffReducer";

class TariffContainer extends React.Component {

    loadTariff = (inView) => {
        if (inView) {
            this.props.tariff_types.forEach(tariff => {
                this.props.loadTariffThunk(new Date(),
                    this.props.active_body_type,
                    this.props.active_body_option,
                    this.props.active_body_option_characteristics_values,
                    this.props.selected_additional_requirements.map(item => ({id: item.id, value: true})),
                    this.props.points.map((item, index) => ({
                        id: index,
                        adress: item.address,
                        adress_comment: item.comment,
                        // todo
                        adress_longitude: 55.778891,
                        adress_latitude: 37.559639,
                        company: item.company,
                        contact_persons: [
                            {
                                full_name: item.name,
                                phone: item.number,
                                phone_ext: item.number,
                                email: null
                            }
                        ],
                        what_to_do: item.todo,
                        working_hours: {
                            time_from: item.timeFrom,
                            time_to: item.timeTo,
                            lunch_from: item.pauseFrom,
                            lunch_to: item.pauseTo,
                            no_lunch: !item.hasPause,
                            max_landing_time: ''
                        },
                        action_documents: item.file,
                        action_loading: true,
                        action_unloading: false,
                        action_forwarder: false,
                        files_ids: [
                            "5fb444a1-f293-4973-aea9-87549ced9392"
                        ]
                    })),
                    this.props.name,
                    this.props.price,
                    this.props.places,
                    this.props.pallets,
                    this.props.packages,
                    tariff.id,
                    'full_name',
                    'phone',
                    'phone_ext',
                    'email',
                    'payment_type');
            });
        }
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
    active_body_type: state.carBodyReducer.active_body_type,
    active_body_option: state.carBodyReducer.active_body_option,
    active_body_option_characteristics_values: state.carBodyReducer.active_body_option_characteristics_values,
    selected_additional_requirements: state.dopReducer.selected_additional_requirements,
    points: state.pointsReducer.points,
    name: state.cargoReducer.name,
    price: state.cargoReducer.price,
    places: state.cargoReducer.places,
    pallets: state.cargoReducer.pallets,
    packages: state.cargoReducer.packages,
});

export default connect(mapStateToProps, {setTariff, loadTariffThunk})(TariffContainer);