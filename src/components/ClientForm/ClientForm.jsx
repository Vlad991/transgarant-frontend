import React from "react";
import InputMask from "react-input-mask";
import ReCAPTCHA from "react-google-recaptcha";

const ClientForm = ({clientName, nameError, setName, clientNumber, numberError, setNumber, clientEmail, emailError, setEmail, doOrder, orderIsProcessed, orderId, numberIsEntered, recaptchaIsEntered, setRecaptcha}) => {
    return (
        <>
            <section className="checkout__client-form client-form">
                <label className={"client-form__input input-wrap" + (nameError ? ' input-wrap_error' : '')}>
                    <input type="text" value={clientName} onChange={e => setName(e.target.value)} className="input-wrap__input" placeholder="ФИО"/>
                </label>
                <label className={"client-form__input input-wrap" + (numberError ? ' input-wrap_error' : '') + ((numberIsEntered && recaptchaIsEntered) ? ' input-wrap_sms' : '')}>
                    <InputMask mask="+7 (999) 999 99 99" value={clientNumber} onChange={e => setNumber(e.target.value)}>
                        {(inputProps) => <input {...inputProps} className="input-wrap__input" placeholder="Мобильный телефон" type="tel"/>}
                    </InputMask>
                    {(numberIsEntered && recaptchaIsEntered) ?
                        <button className="button button_sms">Получить код</button> : null}
                </label>
                <label className={"client-form__input input-wrap" + (emailError ? ' input-wrap_error' : '')}>
                    <input type="text" value={clientEmail} onChange={e => setEmail(e.target.value)} className="input-wrap__input" placeholder="Ваша почта"/>
                </label>
                <div onClick={doOrder} className="client-form__button button">{orderIsProcessed ? 'Заказ оформлен' : 'Разместить заказ'}</div>
                {(numberIsEntered) ?
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