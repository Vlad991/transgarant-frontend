import React from "react";

const Complete = ({state, setAgreeTerms}) => {
    return (
        <section className="registration__complete complete">
            <button className="complete__button button button">Завершить регистрацию</button>
            <div className="complete__check-wrap">
                <label className="check-wrap">
                    <span>Я принииаю <a onClick={e => e.stopPropagation()} target="_blank" href="/terms-of-use" className="client-form__agree-link">пользовательское соглашение</a> и <a target="_blank" onClick={e => e.stopPropagation()} href="/privacy-policy" className="client-form__agree-link">политику конфиденциальности</a></span>
                    <input type="checkbox" checked={state.agree_terms} onChange={() => setAgreeTerms(!state.agree_terms)} className="check-wrap__input"/>
                    <span className="check-wrap__mark"></span>
                </label>
            </div>
        </section>
    );
}

export default Complete;