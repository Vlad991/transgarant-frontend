import React from "react";
import {Field, reduxForm} from "redux-form";

const RecommendContacts = ({state, setRecommendContactsData, addRecommendContact}) => {
    return (
        <section className="registration__recommend recommend">
            <h2 className="recommend__title">Контакты кто Вас может рекомендовать</h2>
            {state.recommend_contact_list.map(contact => {
                return (
                    <div className="recommend__form">
                        <label className="recommend__field input-wrap">
                            <input className="input-wrap__input" value={contact.name} type="text" placeholder="ФИО"/>
                        </label>
                        <label className="recommend__field input-wrap">
                            <input className="input-wrap__input" value={contact.post} type="text" placeholder="Должность"/>
                        </label>
                        <label className="recommend__field input-wrap">
                            <input className="input-wrap__input" value={contact.phone} type="text" placeholder="Телефон"/>
                        </label>
                    </div>
                )
            })}
            <RecommendContactsReduxForm state={state} onChange={setRecommendContactsData}/>
            <button type="button" onClick={addRecommendContact} className="recommend__button button button--inverse">Добавить</button>
        </section>
    );
}

const RecommendContactsForm = ({state, handleChange}) => {
    return (
        <form onChange={handleChange} className="recommend__form">
            <label className="recommend__field input-wrap">
                <Field component="input" className="input-wrap__input" name="recommend_name" value={state.recommend_name} type="text" placeholder="ФИО"/>
            </label>
            <label className="recommend__field input-wrap">
                <Field component="input" className="input-wrap__input" name="recommend_post" value={state.recommend_post} type="text" placeholder="Должность"/>
            </label>
            <label className="recommend__field input-wrap">
                <Field component="input" className="input-wrap__input" name="recommend_phone" value={state.recommend_phone} type="text" placeholder="Телефон"/>
            </label>
        </form>
    );
}

const RecommendContactsReduxForm = reduxForm({form: 'recommend-contacts'})(RecommendContactsForm);

export default RecommendContacts;