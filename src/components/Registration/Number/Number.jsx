import React from "react";
import InputMask from "react-input-mask";
import Loader from "react-loader-spinner";
import ReCAPTCHA from "react-google-recaptcha";

const Number = ({
                    state,
                    setPhoneNumber,
                    setRecaptcha,
                    sendSms,
                    setSmsCode
                }) => {
    return (
        <section className="registration__number-reg number-reg">
            <div className="number-reg__text">Для регистрации в нашей системе нужно зарегистрировать ваш номер.<br/>Вам прийдет смс с кодом он же будет паролем для входа.</div>
            {state.sms_is_sent ?
                <label key="code" className={"number-reg__phone number-reg__code input-wrap"}>
                    <InputMask mask="9 9 9 9" value={state.sms_code} onChange={e => setSmsCode(e.target.value)}>
                        {(inputProps) => <input {...inputProps} className="input-wrap__input" placeholder="SMS-код" type="text"/>}
                    </InputMask>
                </label> :
                <>
                    <label key="phone" className={"number-reg__phone input-wrap" + (state.phone_is_entered ? " number-reg__phone--sms" : "")}>
                        <InputMask mask="+7 (999) 999 99 99" value={state.phone_number} onChange={e => setPhoneNumber(e.target.value)}>
                            {(inputProps) => <input {...inputProps} className="input-wrap__input" placeholder="Номер телефона" type="tel"/>}
                        </InputMask>
                        {state.phone_is_entered && state.recaptcha_is_entered ? <button onClick={sendSms} className="button button--sms">{state.sms_is_clicked ? <Loader style={{display: "flex"}} type="Puff" color="#FFFFFF" height={20} width={20}/> : 'Получить код'}</button> : null}
                    </label>
                    {state.phone_is_entered && !state.recaptcha_is_entered ? <ReCAPTCHA
                        className="number-reg__captcha"
                        sitekey="6LebB7AZAAAAAEtmo9ov7UG6uOqxHA8zIphbIhQF"
                        onChange={setRecaptcha}
                    /> : null}
                </>}
        </section>
    );
}

export default Number;