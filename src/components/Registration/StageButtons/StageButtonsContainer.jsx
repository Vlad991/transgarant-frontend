import React from 'react';
import {connect} from "react-redux";
import StageButtons from "./StageButtons";
import {setStage, submitStage} from "../../../redux/registration/stagesReducer";

class StageButtonsContainer extends React.Component {

    clickBack = () => {
        this.props.setStage(this.props.state.stage - 1);
    }

    clickContinue = () => {
        this.props.submitStage(this.props.state.stage + 1);
    }

    render() {
        return (
            <StageButtons state={this.props.state}
                          clickBack={this.clickBack}
                          clickContinue={this.clickContinue}/>
        );
    };
}

let mapStateToProps = (state) => ({
    state: state.stagesReducer
});

export default connect(mapStateToProps, {setStage, submitStage})(StageButtonsContainer);