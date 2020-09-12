import React from "react";
import DriverPassportForm from "./DriverPassportForm";

const DriverPassport = ({state, showCamera, getControlPhoto, toggleCamera}) => {
    return (
        <DriverPassportForm showCamera={showCamera}
                            getControlPhoto={getControlPhoto}
                            toggleCamera={toggleCamera}/>
    );
}

export default DriverPassport;