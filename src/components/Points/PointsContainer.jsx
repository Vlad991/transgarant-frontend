import React from 'react';
import Points from "./Points";
import {connect} from "react-redux";
import {addFileThunk, addPoint, deletePoint, doUpdatePoint, setAddress, setFormState, setNumber, showPointInfo, toggleAddressMap, toggleForm, toggleValue, toggleValuesCollapse} from "../../redux/pointsReducer";
import AlertContainer from "../Allert/AlertContainer";

class PointsContainer extends React.Component {

    toggleCollapse = (e) => {
        e.stopPropagation();
        this.props.toggleValuesCollapse(!this.props.state.show_values_collapse);
    }

    deletePoint = (e, index) => {
        e.stopPropagation();
        this.props.deletePoint(index);
    }

    addFile = (e) => {
        let file = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file);
        let name = file.name;
        let data;
        reader.onload = e => {
            data = e.target.result;
            this.props.addFileThunk(name, data);
        }
    }

    addressRenderOption = (value) => {
        if (value.data.street) {
            return (
                <span>{value.value}</span>
            )
        }
    }

    render() {
        let hasError = this.props.error_mode && (this.props.state.points.length < 2);
        return (
            <>
                <Points state={this.props.state}
                        docReturn={this.props.docReturn}
                        lastPointAddress={this.props.last_point_address}
                        lastPointAddressLongitude={this.props.last_point_address_longitude}
                        lastPointAddressLatitude={this.props.last_point_address_latitude}
                        lastPointFullName={this.props.last_point_full_name}
                        lastPointPhone={this.props.last_point_phone}

                        toggleForm={this.props.toggleForm}
                        toggleAddressMap={this.props.toggleAddressMap}
                        doUpdatePoint={this.props.doUpdatePoint}
                        deletePoint={this.deletePoint}
                        addPoint={this.props.addPoint}
                        setFormState={this.props.setFormState}
                        setAddress={this.props.setAddress}
                        addressRenderOption={this.addressRenderOption}
                        setNumber={this.props.setNumber}
                        addFile={this.addFile}
                        toggleValue={this.props.toggleValue}
                        toggleCollapse={this.toggleCollapse}
                        showPointInfo={this.props.showPointInfo}
                        hasError={hasError}
                />
                {hasError ? <AlertContainer index={1} text="Ошибка: минимальное количество точек маршрута - 2"/> : null}
            </>
        );
    };
}

let mapStateToProps = (state) => ({
    state: state.pointsReducer,
    docReturn: state.docReturnReducer.show,
    last_point_address: state.docReturnReducer.address,
    last_point_address_longitude: state.docReturnReducer.address_longitude,
    last_point_address_latitude: state.docReturnReducer.address_latitude,
    last_point_full_name: state.docReturnReducer.full_name,
    last_point_phone: state.docReturnReducer.phone,
    error_mode: state.clientFormReducer.error_mode
});

export default connect(mapStateToProps,
    {addPoint, showPointInfo, doUpdatePoint, deletePoint, toggleValue, setAddress, setNumber, setFormState, toggleValuesCollapse, toggleForm, addFileThunk, toggleAddressMap})(PointsContainer);