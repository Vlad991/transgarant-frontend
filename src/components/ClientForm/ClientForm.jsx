import React from "react";
import InputMask from "react-input-mask";
import ReCAPTCHA from "react-google-recaptcha";

const ClientForm = ({
                        state,
                        setName,
                        setNumber,
                        setEmail,
                        doOrder,
                        setRecaptcha,
                        sendCode,
                        setCode
                    }) => {
    return (
        <>
            <section className="checkout__client-form client-form">
                <label className={"client-form__input input-wrap" + (state.name_error ? ' input-wrap_error' : '')}>
                    <input type="text" value={state.client_name} onChange={e => setName(e.target.value)} className="input-wrap__input" placeholder="ФИО"/>
                </label>
                {(state.code_is_sent && !state.code_is_verified) ?
                    <label key="code" className={"client-form__input input-wrap input-wrap_code"}>
                        <InputMask mask="9 9 9 9" value={state.client_number_code} onChange={e => setCode(e.target.value)}>
                            {(inputProps) => <input {...inputProps} className="input-wrap__input" placeholder="SMS - код" type="text"/>}
                        </InputMask>
                    </label> :
                    <label key="phone" className={"client-form__input input-wrap" + (state.number_error ? ' input-wrap_error' : '') + ((state.number_is_entered && state.recaptcha_is_entered && !state.code_is_verified) ? ' input-wrap_sms' : '') + (state.code_is_verified ? ' input-wrap_verified' : '')}>
                        <InputMask mask="+7 (999) 999 99 99" value={state.client_number} onChange={e => setNumber(e.target.value)}>
                            {(inputProps) => <input {...inputProps} className="input-wrap__input" placeholder="Мобильный телефон" type="tel"/>}
                        </InputMask>
                        {(state.number_is_entered && state.recaptcha_is_entered && !state.code_is_verified) ?
                            <button onClick={sendCode} className="button button_sms">Получить код</button> : null}
                    </label>}
                <label className={"client-form__input input-wrap" + (state.email_error ? ' input-wrap_error' : '')}>
                    <input type="text" value={state.client_email} onChange={e => setEmail(e.target.value)} className="input-wrap__input" placeholder="Ваша почта"/>
                </label>
                <div onClick={doOrder} className="client-form__button button">{state.order_is_processed ? 'Заказ оформлен' : 'Разместить заказ'}</div>
                {(state.number_is_entered && !state.code_is_verified) ?
                    <ReCAPTCHA
                        className="captcha"
                        sitekey="6LebB7AZAAAAAEtmo9ov7UG6uOqxHA8zIphbIhQF"
                        onChange={setRecaptcha}
                    /> : null}
            </section>
        </>
    );
}

export default ClientForm;