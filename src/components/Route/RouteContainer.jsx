import React from 'react';
import Route from "./Route";
import {connect} from "react-redux";
import {setDateFrom, setDateTo} from "../../redux/dateReducer";
import {
    addFileThunk,
    addPoint,
    deletePoint,
    doUpdatePoint,
    setAddress,
    setFormState,
    setNumber,
    showPointInfo,
    toggleForm,
    toggleValue,
    toggleValuesCollapse
} from "../../redux/pointsReducer";

class RouteContainer extends React.Component {
    state = {
        showFromPicker: false,
        showToPicker: false
    }

    setDateFrom = (date) => {
        this.props.setDateFrom(date);
    }

    setDateTo = (date) => {
        this.props.setDateTo(date);
    }

    toggleFromPicker = () => {
        this.setState({
            showFromPicker: !this.state.showFromPicker
        })
    }

    toggleToPicker = () => {
        this.setState({
            showToPicker: !this.state.showToPicker
        })
    }

    toggleForm = (show) => {
        this.props.toggleForm(show);
    }

    addPoint = (name) => {
        this.props.addPoint(name);
    }

    toggleCollapse = (e) => {
        e.stopPropagation();
        this.props.toggleValuesCollapse(!this.props.showValuesCollapse);
    }

    showPointInfo = (index) => {
        this.props.showPointInfo(index);
        this.toggleForm(true);
    }

    doUpdatePoint = (index, name) => {
        this.props.doUpdatePoint(index, name);
    }

    deletePoint = (e, index) => {
        e.stopPropagation();
        this.props.deletePoint(index);
    }

    toggleValue = (id) => {
        this.props.toggleValue(id);
    }

    setAddress = (value) => {
        this.props.setAddress(value);
    }

    setNumber = (value) => {
        this.props.setNumber(value);
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

    setFormState = (object) => {
        this.props.setFormState(object);
    }

    render() {
        return (
            <Route dateFrom={this.props.dateFrom}
                   showFromPicker={this.state.showFromPicker}
                   setDateFrom={this.setDateFrom}
                   showToPicker={this.state.showToPicker}
                   dateTo={this.props.dateTo}
                   setDateTo={this.setDateTo}
                   toggleFromPicker={this.toggleFromPicker}
                   toggleToPicker={this.toggleToPicker}

                   points={this.props.points}
                   docReturn={this.props.docReturn}
                   lastPoint={this.props.lastPoint}
                   showForm={this.props.showForm}
                   updatePoint={this.props.updatePoint}
                   doUpdatePoint={this.doUpdatePoint}
                   deletePoint={this.deletePoint}
                   toggleForm={this.toggleForm}
                   addPoint={this.addPoint}
                   setFormState={this.setFormState}
                   name={this.props.name}
                   address={this.props.address}
                   addressError={this.props.address_error}
                   setAddress={this.setAddress}
                   comment={this.props.comment}
                   company={this.props.company}
                   contactName={this.props.contact_name}
                   number={this.props.number}
                   setNumber={this.setNumber}
                   numberError={this.props.number_error}
                   todo={this.props.todo}
                   files={this.props.files}
                   addFile={this.addFile}
                   timeFrom={this.props.timeFrom}
                   timeTo={this.props.timeTo}
                   hasPause={this.props.hasPause}
                   pauseFrom={this.props.pauseFrom}
                   pauseTo={this.props.pauseTo}
                   values={this.props.values}
                   valuesError={this.props.values_error}
                   toggleValue={this.toggleValue}
                   showCollapse={this.props.showValuesCollapse}
                   toggleCollapse={this.toggleCollapse}
                   showPointInfo={this.showPointInfo}
            />
        );
    };
}

let mapStateToProps = (state) => ({
    dateFrom: state.dateReducer.dateFrom,
    dateTo: state.dateReducer.dateTo,
    points: state.pointsReducer.points,
    docReturn: state.docReturnReducer.show,
    lastPoint: {
        address: state.docReturnReducer.address,
        address_longitude: state.docReturnReducer.address_longitude,
        address_latitude: state.docReturnReducer.address_latitude,
        fullName: state.docReturnReducer.fullName,
        phone: state.docReturnReducer.phone
    },
    updatePoint: state.pointsReducer.updatePoint,
    name: state.pointsReducer.name,
    address: state.pointsReducer.address,
    address_error: state.pointsReducer.address_error,
    comment: state.pointsReducer.comment,
    company: state.pointsReducer.company,
    contact_name: state.pointsReducer.contact_name,
    number: state.pointsReducer.number,
    number_error: state.pointsReducer.number_error,
    todo: state.pointsReducer.todo,
    files: state.pointsReducer.files,
    timeFrom: state.pointsReducer.timeFrom,
    timeTo: state.pointsReducer.timeTo,
    hasPause: state.pointsReducer.hasPause,
    pauseFrom: state.pointsReducer.pauseFrom,
    pauseTo: state.pointsReducer.pauseTo,
    values: state.pointsReducer.values,
    showValuesCollapse: state.pointsReducer.showValuesCollapse,
    values_error: state.pointsReducer.values_error,
    showForm: state.pointsReducer.showForm,
});

export default connect(mapStateToProps,
    {setDateFrom, setDateTo, addPoint, showPointInfo, doUpdatePoint, deletePoint, toggleValue, setAddress, setNumber, setFormState, toggleValuesCollapse, toggleForm, addFileThunk})(RouteContainer);