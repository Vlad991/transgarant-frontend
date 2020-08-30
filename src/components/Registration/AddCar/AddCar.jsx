import React from "react";
import AddCarForm from "./AddCarForm";
import CarCertificateForm from "./CarCertificateForm";

const AddCar = ({state}) => {
    return (
        <>
            <AddCarForm/>
            <CarCertificateForm/>
        </>
    );
}

export default AddCar;