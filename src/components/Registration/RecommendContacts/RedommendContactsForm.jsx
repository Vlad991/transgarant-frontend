import React from 'react';
import {connect} from "react-redux";
import {reduxForm} from "redux-form";
import {compose} from "redux";
import {setRecommendContactsData} from "../../../redux/registration/recommendContactsReducer";
import TextField from "../../Elements/TextField";
import PhoneField from "../../Elements/PhoneField";

const RecommendContactsForm = ({handleChange}) => {
    return (
        <form onChange={handleChange} className="recommend__form">
            <TextField className="recommend__field" name="recommend_name" placeholder="ФИО"/>
            <TextField className="recommend__field" name="recommend_post" placeholder="Должность"/>
            <PhoneField className="recommend__field" name="recommend_phone" placeholder="Телефон"/>
        </form>
    );
}

let mapStateToProps = (state) => ({
    initialValues: state.recommendContactsReducer
});

export default compose(
    connect(mapStateToProps, {onChange: setRecommendContactsData}),
    reduxForm({form: 'recommend-contacts', enableReinitialize: true}))(RecommendContactsForm);