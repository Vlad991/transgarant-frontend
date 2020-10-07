import React from 'react';
import Date from "./Date";
import {connect} from "react-redux";
import {setDateFrom, setDateTo} from "../../../redux/checkout/dateReducer";
import AlertContainer from "../Allert/AlertContainer";

class DateContainer extends React.Component {
    state = {
        showFromPicker: false,
        showToPicker: false
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

    render() {
        return (
            <>
                <Date state={this.props.state}
                      showFromPicker={this.state.showFromPicker}
                      setDateFrom={this.props.setDateFrom}
                      showToPicker={this.state.showToPicker}
                      setDateTo={this.props.setDateTo}
                      toggleFromPicker={this.toggleFromPicker}
                      toggleToPicker={this.toggleToPicker}
                      hasError={this.props.state.has_error}
                />
                {this.props.state.has_error ? <AlertContainer index={3} text="Ошибка: Время для данного тарифа должно быть указано в промежутке 13:00 - 17:00"/> : null}
            </>
        );
    };
}

let mapStateToProps = (state) => ({
    state: state.dateReducer
});

export default connect(mapStateToProps, {setDateFrom, setDateTo})(DateContainer);