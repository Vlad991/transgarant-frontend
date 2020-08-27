import React from 'react';
import {connect} from "react-redux";
import NumberContainer from "./Registration/Number/NumberContainer";
import CarHolderContainer from "./Registration/CarHolder/CarHolderContainer";
import IndividualEntrepreneurContainer from "./Registration/IndividualEntrepreneur/IndividualEntrepreneurContainer";
import DriverData from "./Registration/DriverData/DriverData";
import DriverPassportContainer from "./Registration/DriverPassport/DriverPassportContainer";
import CarsContainer from "./Registration/Cars/CarsContainer";
import AddCarFormContainer from "./Registration/AddCarForm/AddCarFormContainer";

class Registration extends React.Component {
    render() {
        return (
            <div className="registration">
                <h1 className="registration__heading">{this.props.phone_is_verified ? 'Регистрация водителя' : 'Регистрация'}</h1>
                {this.props.phone_is_verified ?
                    <>
                        <CarHolderContainer/>
                        <IndividualEntrepreneurContainer/>
                        <DriverData/>
                        <DriverPassportContainer/>
                        <CarsContainer/>
                        <AddCarFormContainer/>
                    </>
                    : <NumberContainer/>}
            </div>
        );
    };
}

let mapStateToProps = (state) => ({
    phone_is_verified: state.numberReducer.phone_is_verified
});

export default connect(mapStateToProps, {})(Registration);