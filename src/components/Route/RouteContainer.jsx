import React from 'react';
import Route from "./Route";
import {connect} from "react-redux";
import {setDateFrom, setDateTo} from "../../redux/dateReducer";
import {addPoint, deletePoint, doUpdatePoint, setAddress, setFormState, showPointInfo, toggleForm, toggleValue} from "../../redux/pointsReducer";

class RouteContainer extends React.Component {
    state = {
        showFromPicker: false,
        showToPicker: false,
        showCollapse: false
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

    toggleCollapse = () => {
        this.setState({
            showCollapse: !this.state.showCollapse
        })
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
                   numberError={this.props.number_error}
                   todo={this.props.todo}
                   file={this.props.file}
                   timeFrom={this.props.timeFrom}
                   timeTo={this.props.timeTo}
                   hasPause={this.props.hasPause}
                   pauseFrom={this.props.pauseFrom}
                   pauseTo={this.props.pauseTo}
                   values={this.props.values}
                   valuesError={this.props.values_error}
                   toggleValue={this.toggleValue}
                   showCollapse={this.state.showCollapse}
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
    file: state.pointsReducer.file,
    timeFrom: state.pointsReducer.timeFrom,
    timeTo: state.pointsReducer.timeTo,
    hasPause: state.pointsReducer.hasPause,
    pauseFrom: state.pointsReducer.pauseFrom,
    pauseTo: state.pointsReducer.pauseTo,
    values: state.pointsReducer.values,
    values_error: state.pointsReducer.values_error,
    showForm: state.pointsReducer.showForm
});

export default connect(mapStateToProps,
    {setDateFrom, setDateTo, addPoint, showPointInfo, doUpdatePoint, deletePoint, toggleValue, setAddress, setFormState, toggleForm})(RouteContainer);