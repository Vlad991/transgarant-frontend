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
                        setCode,
                        setAgree,
                        hasNameError,
                        hasNumberError,
                        hasCodeError,
                        hasEmailError,
                        hasAgreeError,
                    }) => {
    return (
        <>
            <section className="checkout__client-form client-form">
                <label className={"client-form__input input-wrap" + ((state.name_error || hasNameError) ? ' input-wrap_error' : '')}>
                    <input type="text" value={state.client_name} onChange={e => setName(e.target.value)} className="input-wrap__input" placeholder="ФИО"/>
                </label>
                {(state.code_is_sent && !state.code_is_verified) ?
                    <label key="code" className={"client-form__input input-wrap input-wrap_code"}>
                        <InputMask mask="9 9 9 9" value={state.client_number_code} onChange={e => setCode(e.target.value)}>
                            {(inputProps) => <input {...inputProps} className="input-wrap__input" placeholder="SMS - код" type="text"/>}
                        </InputMask>
                    </label> :
                    <label key="phone" className={"client-form__input input-wrap" + (state.number_error || hasNumberError || hasCodeError ? ' input-wrap_error' : '') + ((state.number_is_entered && state.recaptcha_is_entered && !state.code_is_verified) ? ' input-wrap_sms' : '') + (state.code_is_verified ? ' input-wrap_verified' : '')}>
                        <InputMask mask="+7 (999) 999 99 99" value={state.client_number} onChange={e => setNumber(e.target.value)}>
                            {(inputProps) => <input {...inputProps} className="input-wrap__input" placeholder="Мобильный телефон" type="tel"/>}
                        </InputMask>
                        {(state.number_is_entered && state.recaptcha_is_entered && !state.code_is_verified) ?
                            <button onClick={sendCode} className="button button_sms">Получить код</button> : null}
                    </label>}
                <label className={"client-form__input input-wrap" + (state.email_error || hasEmailError ? ' input-wrap_error' : '')}>
                    <input type="text" value={state.client_email} onChange={e => setEmail(e.target.value)} className="input-wrap__input" placeholder="Ваша почта"/>
                </label>
                {state.order_is_processed ?
                    <button className="client-form__button button button_disabled">
                        Заказ оформлен &nbsp;&nbsp;&nbsp;
                        <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.15 6C0.05 5.9 0 5.75 0 5.65C0 5.55 0.05 5.4 0.15 5.3L0.85 4.6C1.05 4.4 1.35 4.4 1.55 4.6L1.6 4.65L4.35 7.6C4.45 7.7 4.6 7.7 4.7 7.6L11.4 0.65H11.45C11.65 0.45 11.95 0.45 12.15 0.65L12.85 1.35C13.05 1.55 13.05 1.85 12.85 2.05L4.85 10.35C4.75 10.45 4.65 10.5 4.5 10.5C4.35 10.5 4.25 10.45 4.15 10.35L0.25 6.15L0.15 6Z" fill="#FFB700"/>
                        </svg>
                    </button> :
                    state.order_is_processing ?
                        <button className="client-form__button button">Оформление заказа...</button> :
                        <button onClick={doOrder} className="client-form__button button">Разместить заказ</button>}
                {(state.number_is_entered && !state.code_is_verified) ?
                    <ReCAPTCHA
                        className="captcha"
                        sitekey="6LebB7AZAAAAAEtmo9ov7UG6uOqxHA8zIphbIhQF"
                        onChange={setRecaptcha}
                    /> : null}
            </section>
            <section className={"checkout__title client-form__agree" + (hasAgreeError ? ' checkout__has-error' : '')}>
                <label className="check-wrap" onClick={(e) => {
                    e.preventDefault();
                    setAgree(!state.agree);
                }}>
                    <span>Я принииаю <a onClick={e => e.stopPropagation()} target="_blank" href="/terms-of-use" className="client-form__agree-link">пользовательское соглашение</a> и <a target="_blank" onClick={e => e.stopPropagation()} href="/privacy-policy" className="client-form__agree-link">политику конфиденциальности</a></span>
                    {state.agree ?
                        <input type="checkbox" checked className="check-wrap__input"/> :
                        <input type="checkbox" className="check-wrap__input"/>}
                    <span className="check-wrap__mark"></span>
                </label>
            </section>
        </>
    );
}

export default ClientForm;