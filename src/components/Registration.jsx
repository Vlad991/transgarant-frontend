import React from 'react';
import {connect} from "react-redux";
import NumberContainer from "./Registration/Number/NumberContainer";
import CarHolderContainer from "./Registration/CarHolder/CarHolderContainer";
import IndividualEntrepreneurContainer from "./Registration/IndividualEntrepreneur/IndividualEntrepreneurContainer";
import DriverPassportContainer from "./Registration/DriverPassport/DriverPassportContainer";
import CarsContainer from "./Registration/Cars/CarsContainer";
import AddCarFormContainer from "./Registration/AddCar/AddCarContainer";
import DriverDataContainer from "./Registration/DriverData/DriverDataContainer";
import DriverLicenseContainer from "./Registration/DriverLicense/DriverLicenseContainer";
import RecommendContactsContainer from "./Registration/RecommendContacts/RecommendContactsContainer";

class Registration extends React.Component {
    render() {
        return (
            <div className="registration">
                <h1 className="registration__heading">{this.props.phone_is_verified ? 'Регистрация водителя' : 'Регистрация'}</h1>
                {this.props.phone_is_verified ?
                    <>
                        <CarHolderContainer/>
                        {this.props.car_holder_type === 0 ?
                            <>
                                <DriverDataContainer title="Регистрация владельца"/>
                                <DriverPassportContainer/>
                                <DriverLicenseContainer/>
                                <CarsContainer/>
                                <AddCarFormContainer/>
                                <DriverPassportContainer/>
                                <DriverLicenseContainer/>
                                <RecommendContactsContainer/>
                            </> :
                            <>
                                <IndividualEntrepreneurContainer/>
                                <DriverDataContainer title="Регистрация водителя"/>
                                <DriverPassportContainer/>
                                <DriverLicenseContainer/>
                                <CarsContainer/>
                                <AddCarFormContainer/>
                                <RecommendContactsContainer/>
                            </>}
                    </>
                    : <NumberContainer/>}
            </div>
        );
    };
}

let mapStateToProps = (state) => ({
    phone_is_verified: state.numberReducer.phone_is_verified,
    car_holder_type: state.carHolderReducer.holder_type
});

export default connect(mapStateToProps, {})(Registration);