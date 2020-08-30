import React from "react";
import DriverLicenseForm from "./DriverLicenseForm";

const DriverLicense = ({state}) => {
    return (
        <form className="registration__passport registration__passport--license passport passport--license form-block">
            <h3 className="form-block__heading">Водительское удостоверение</h3>
            <DriverLicenseForm/>
        </form>
    );
}

export default DriverLicense;