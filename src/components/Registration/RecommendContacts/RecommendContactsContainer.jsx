import React from 'react';
import {connect} from "react-redux";
import RecommendContacts from "./RecommendContacts";
import {addRecommendContact, setRecommendContactsData} from "../../../redux/registration/recommendContactsReducer";

class RecommendContactsContainer extends React.Component {
    render() {
        return (
            <RecommendContacts state={this.props.state}
                               setRecommendContactsData={this.props.setRecommendContactsData}
                               addRecommendContact={this.props.addRecommendContact}/>
        );
    };
}

let mapStateToProps = (state) => ({
    state: state.recommendContactsReducer
});

export default connect(mapStateToProps, {setRecommendContactsData, addRecommendContact})(RecommendContactsContainer);