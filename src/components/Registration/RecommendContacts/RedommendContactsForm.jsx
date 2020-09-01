import React from 'react';
import {connect} from "react-redux";
import {reduxForm} from "redux-form";
import {compose} from "redux";
import {setRecommendContactsData} from "../../../redux/registration/recommendContactsReducer";
import TextField from "../../Elements/TextField";
import PhoneField from "../../Elements/PhoneField";

const RecommendContactsForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit} className="recommend__form">
            <TextField className="recommend__field" name="recommend_name" placeholder="ФИО"/>
            <TextField className="recommend__field" name="recommend_post" placeholder="Должность"/>
            <PhoneField className="recommend__field" name="recommend_phone" placeholder="Телефон"/>
        </form>
    );
}

let mapStateToProps = (state) => ({
    initialValues: {
        recommend_name: state.recommendContactsReducer.recommend_name,
        recommend_post: state.recommendContactsReducer.recommend_post,
        recommend_phone: state.recommendContactsReducer.recommend_phone,
    }
});

export default compose(
    connect(mapStateToProps, {onSubmit: setRecommendContactsData}),
    reduxForm({form: 'recommend-contacts', enableReinitialize: false}))(RecommendContactsForm);