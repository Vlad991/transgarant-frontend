import React from "react";
import RecommendContactsForm from "./RedommendContactsForm";

const RecommendContacts = ({state, addRecommendContact}) => {
    return (
        <section className="registration__recommend recommend">
            <h2 className="recommend__title">Контакты кто Вас может рекомендовать</h2>
            {state.recommend_contact_list.map((contact, index) => {
                return (
                    <div key={index} className="recommend__form">
                        <label className="recommend__field input-wrap input-wrap--disabled">
                            <input disabled={true} className="input-wrap__input" value={contact.name} type="text" placeholder="ФИО"/>
                        </label>
                        <label className="recommend__field input-wrap input-wrap--disabled">
                            <input disabled={true} className="input-wrap__input" value={contact.post} type="text" placeholder="Должность"/>
                        </label>
                        <label className="recommend__field input-wrap input-wrap--disabled">
                            <input disabled={true} className="input-wrap__input" value={contact.phone} type="text" placeholder="Телефон"/>
                        </label>
                    </div>
                )
            })}
            <RecommendContactsForm/>
            <button type="button" onClick={addRecommendContact} className="recommend__button button button--inverse">Добавить</button>
        </section>
    );
}

export default RecommendContacts;