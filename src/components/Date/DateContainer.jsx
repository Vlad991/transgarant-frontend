import React from 'react';
import Date from "./Date";
import {connect} from "react-redux";
import {setDateFrom, setDateTo} from "../../redux/dateReducer";

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
            <Date state={this.props.state}
                  showFromPicker={this.state.showFromPicker}
                  setDateFrom={this.props.setDateFrom}
                  showToPicker={this.state.showToPicker}
                  setDateTo={this.props.setDateTo}
                  toggleFromPicker={this.toggleFromPicker}
                  toggleToPicker={this.toggleToPicker}
            />
        );
    };
}

let mapStateToProps = (state) => ({
    state: state.dateReducer
});

export default connect(mapStateToProps, {setDateFrom, setDateTo})(DateContainer);