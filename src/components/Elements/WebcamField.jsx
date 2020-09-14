import React from 'react';
import {Field} from "redux-form";
import Webcam from "react-webcam";

class WebcamField extends React.Component {
    state = {
        showCamera: false
    }

    constructor(props) {
        super(props);
        this.webcamRef = React.createRef();
        this.videoConstraints = {
            facingMode: "user"
        };
    }

    toggleCamera = (value) => {
        console.log(value);
        this.setState({
            showCamera: value
        });
    }

    getControlPhoto = (webcamRef) => {
        const data = webcamRef.current.getScreenshot();
        let file = new File([], "photo-control.jpg", undefined)
        file.data = data;
        this.toggleCamera(false);
        return file;
    }

    renderComponent = ({showCamera, input, meta: {touched, error, warning}}) =>
        <>
            <div className={"passport__photo-control" + (showCamera && " passport__photo-control--active")}>
                {showCamera &&
                <div className="photo-control">
                    <Webcam
                        className="photo-control__video"
                        audio={false}
                        ref={this.webcamRef}
                        mirrored={true}
                        screenshotQuality={1}
                        screenshotFormat="image/jpeg"
                        videoConstraints={this.videoConstraints}/>
                </div>}
            </div>
            <button type="button" className={"passport__photo-btn button button--inverse"} onClick={() => this.toggleCamera(!showCamera)}>{input.value ? input.value.name : 'Фото контроль'}</button>
            {showCamera && <button type="button" className="passport__photo-btn button button--inverse" onClick={() => {
                input.onChange(this.getControlPhoto(this.webcamRef))
            }}>Сделать фото</button>}
        </>

    render() {
        return <Field name={this.props.name} validate={this.props.validate} showCamera={this.state.showCamera} component={this.renderComponent}/>
    }
}

export default WebcamField;