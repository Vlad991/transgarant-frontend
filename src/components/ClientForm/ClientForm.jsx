import React from "react";
import InputMask from "react-input-mask";

const ClientForm = ({clientName, nameError, setName, clientNumber, numberError, setNumber, clientEmail, emailError, setEmail}) => {
    return (
        <section className="checkout__client-form client-form">
            <label className={"client-form__input input-wrap" + (nameError ? ' input-wrap_error' : '')}>
                <input type="text" value={clientName} onChange={e => setName(e.target.value)} className="input-wrap__input" placeholder="ФИО"/>
            </label>
            <label className={"client-form__input input-wrap" + (numberError ? ' input-wrap_error' : '')}>
                <InputMask mask="+7 (999) 999 99 99" value={clientNumber} onChange={e => setNumber(e.target.value)}>
                    {(inputProps) => <input {...inputProps} className="input-wrap__input" placeholder="Мобильный телефон" type="tel"/>}
                </InputMask>
            </label>
            <label className={"client-form__input input-wrap" + (emailError ? ' input-wrap_error' : '')}>
                <input type="text" value={clientEmail} onChange={e => setEmail(e.target.value)} className="input-wrap__input" placeholder="Ваша почта"/>
            </label>
            <div className="client-form__button button">Разместить заказ</div>
        </section>
    );
}

export default ClientForm;