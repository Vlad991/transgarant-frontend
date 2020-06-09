import React from "react";

const ClientForm = (props) => {
    return (
        <section className="checkout__client-form client-form">
            <label className="client-form__input input-wrap">
                <input type="text" className="input-wrap__input" placeholder="ФИО"/>
            </label>
            <label className="client-form__input input-wrap">
                <input type="text" className="input-wrap__input" placeholder="Мобильный телефон"/>
            </label>
            <label className="client-form__input input-wrap">
                <input type="text" className="input-wrap__input" placeholder="Ваша почта"/>
            </label>
            <div className="client-form__button button">Зарегистрироваться</div>
        </section>
    );
}

export default ClientForm;