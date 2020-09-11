import React from 'react';
import {connect} from "react-redux";
import NumberContainer from "./Registration/Number/NumberContainer";
import CarHolderContainer from "./Registration/CarHolder/CarHolderContainer";
import IndividualEntrepreneurContainer from "./Registration/IndividualEntrepreneur/IndividualEntrepreneurContainer";
import DriverPassportContainer from "./Registration/DriverPassport/DriverPassportContainer";
import CarsContainer from "./Registration/Cars/CarsContainer";
import AddCarFormContainer from "./Registration/AddCar/AddCarContainer";
import AddCarContainer from "./Registration/AddCar/AddCarContainer";
import DriverDataContainer from "./Registration/DriverData/DriverDataContainer";
import DriverLicenseContainer from "./Registration/DriverLicense/DriverLicenseContainer";
import RecommendContactsContainer from "./Registration/RecommendContacts/RecommendContactsContainer";
import DriversContainer from "./Registration/Drivers/DriversContainer";
import AddDriverContainer from "./Registration/AddDriver/AddDriverContainer";
import CompleteContainer from "./Registration/Complete/CompleteContainer";
import StageButtonsContainer from "./Registration/StageButtons/StageButtonsContainer";

class Registration extends React.Component {
    render() {
        return (
            <div className="registration">
                <h1 className="registration__heading">{this.props.phone_is_verified ? 'Регистрация водителя' : 'Регистрация'}</h1>
                {this.props.phone_is_verified ?
                    <>
                        <CarHolderContainer/>
                        {this.props.car_holder_type === 0 ?
                            this.props.inn_entered ? <>
                                {this.props.stage === 0 && <DriverDataContainer title="Регистрация владельца"/>}
                                {this.props.stage === 0 && <DriverPassportContainer/>}
                                {this.props.stage === 1 && <CarsContainer/>}
                                {this.props.stage === 1 && <AddCarContainer/>}
                                {this.props.stage === 2 && <>
                                    <DriversContainer/>
                                    <AddDriverContainer/>
                                </>}
                                {this.props.stage === 3 && <>
                                    <RecommendContactsContainer/>
                                    <CompleteContainer/>
                                </>}
                                {this.props.stage !== 3 && <StageButtonsContainer/>}
                            </> : null
                            : this.props.inn_entered || this.props.inn_sam_entered ? <>
                                {this.props.stage === 0 && <IndividualEntrepreneurContainer/>}
                                {this.props.stage === 1 && <DriverDataContainer title="Регистрация водителя"/>}
                                {this.props.stage === 1 && <DriverPassportContainer/>}
                                {this.props.stage === 1 && <DriverLicenseContainer/>}
                                {this.props.stage === 2 && <CarsContainer/>}
                                {this.props.stage === 2 && <AddCarFormContainer/>}
                                {this.props.stage === 3 && <RecommendContactsContainer/>}
                                {this.props.stage === 3 && <CompleteContainer/>}
                                {this.props.stage !== 3 && <StageButtonsContainer/>}
                            </> : null}
                    </>
                    : <NumberContainer/>}
            </div>
        );
    };
}

let mapStateToProps = (state) => ({
    phone_is_verified: state.numberReducer.phone_is_verified,
    car_holder_type: state.carHolderReducer.holder_type,
    inn_entered: state.carHolderReducer.inn_entered,
    inn_sam_entered: state.carHolderReducer.inn_sam_entered,

    stage: state.stagesReducer.stage
});

export default connect(mapStateToProps, {})(Registration);