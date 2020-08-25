import React from "react";
import InputMask from "react-input-mask";

const Number = ({state, setPhoneNumber}) => {
    return (
        <section className="registration__number-reg number-reg">
            <div className="number-reg__text">Для регистрации в нашей системе нужно зарегистрировать ваш номер.<br/>Вам прийдет смс с кодом он же будет паролем для входа.</div>
            <label key="code" className={"number-reg__phone input-wrap"}>
                <InputMask mask="+7 (999) 999 99 99" value={state.phone_number} onChange={e => setPhoneNumber(e.target.value)}>
                    {(inputProps) => <input {...inputProps} className="input-wrap__input" placeholder="Номер телефона" type="tel"/>}
                </InputMask>
            </label>
        </section>
    );
}

export default Number;