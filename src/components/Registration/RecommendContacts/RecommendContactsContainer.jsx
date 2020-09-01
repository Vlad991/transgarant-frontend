import React from 'react';
import {connect} from "react-redux";
import RecommendContacts from "./RecommendContacts";
import {addRecommendContactThunk, setRecommendContactsData} from "../../../redux/registration/recommendContactsReducer";

class RecommendContactsContainer extends React.Component {
    render() {
        return (
            <RecommendContacts state={this.props.state}
                               addRecommendContact={this.props.addRecommendContactThunk}/>
        );
    };
}

let mapStateToProps = (state) => ({
    state: state.recommendContactsReducer
});

export default connect(mapStateToProps, {setRecommendContactsData, addRecommendContactThunk})(RecommendContactsContainer);