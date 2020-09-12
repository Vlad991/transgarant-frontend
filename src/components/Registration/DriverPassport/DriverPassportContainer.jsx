import React from 'react';
import {connect} from "react-redux";
import DriverPassport from "./DriverPassport";
import {setControlPhoto} from "../../../redux/registration/driverPassportReducer";

class DriverPassportContainer extends React.Component {
    state = {
        showCamera: false
    }

    toggleCamera = (value) => {
        this.setState({
            showCamera: value
        });
    }

    getControlPhoto = (webcamRef) => {
        const data = webcamRef.current.getScreenshot();
        let file = new File([], "photo-control.jpg", undefined)
        file.data = data;
        this.props.setControlPhoto(file);
        this.toggleCamera(false);
        return file;
    }

    render() {
        return (
            <DriverPassport state={this.props.state}
                            showCamera={this.state.showCamera}

                            toggleCamera={this.toggleCamera}
                            getControlPhoto={this.getControlPhoto}/>
        );
    };
}

let mapStateToProps = (state) => ({
    state: state.driverPassportReducer
});

export default connect(mapStateToProps, {setControlPhoto})(DriverPassportContainer);