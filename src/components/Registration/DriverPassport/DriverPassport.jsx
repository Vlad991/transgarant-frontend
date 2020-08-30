import React from "react";
import Webcam from "react-webcam";
import DriverPassportForm from "./DriverPassportForm";

const DriverPassport = ({state, showCamera, getControlPhoto, toggleCamera}) => {
    let webcamRef = React.createRef();

    const videoConstraints = {
        facingMode: "user"
    };

    return (
        <>
            <DriverPassportForm/>
            <div className={"passport__photo-control" + (showCamera ? " passport__photo-control--active" : "")}>
                {showCamera ?
                    <div className="photo-control">
                        <Webcam
                            className="photo-control__video"
                            audio={false}
                            ref={webcamRef}
                            mirrored={true}
                            screenshotQuality={1}
                            screenshotFormat="image/jpeg"
                            videoConstraints={videoConstraints}/>
                    </div> : null}
            </div>
            <button className="passport__photo-btn button button--inverse" onClick={() => toggleCamera(!showCamera)}>{state.passport_photo_control ? state.passport_photo_control.name + '.jpg' : 'Фото контроль'}</button>
            {showCamera ? <button className="passport__photo-btn button button--inverse" onClick={() => getControlPhoto(webcamRef)}>Сделать фото</button> : null}
        </>
    );
}

export default DriverPassport;