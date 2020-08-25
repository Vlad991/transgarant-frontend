import React from "react";
import {PartySuggestions} from "react-dadata";
import {listOfBenefitsForPaymentLink} from "../../../deployment";
import {token} from "../../../api/dadata-api";

const Payment = ({state, setPayment, setCompany, hasError}) => {
    return (
        <>
            <section className={"checkout__payment checkout__title payment" + (hasError ? ' checkout__has-error' : '')}>
                <label className="payment__item check-wrap check-wrap_disabled">
                    <span className="payment__check">Онлайн оплата</span>
                    <div className="payment__info info-icon">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.3644 2.63581C11.8497 -0.87857 6.15097 -0.878962 2.63581 2.63581C-0.878962 6.15058 -0.87857 11.8493 2.63581 15.3644C6.15058 18.8784 11.8493 18.8788 15.3644 15.3644C18.8788 11.8493 18.8784 6.15097 15.3644 2.63581ZM10.1737 12.9133C10.1737 13.5617 9.64814 14.0872 8.99973 14.0872C8.35133 14.0872 7.82579 13.5617 7.82579 12.9133V8.2175C7.82579 7.56909 8.35133 7.04356 8.99973 7.04356C9.64814 7.04356 10.1737 7.56909 10.1737 8.2175V12.9133ZM8.97899 6.21084C8.3028 6.21084 7.85201 5.73188 7.8661 5.1406C7.85201 4.52076 8.3028 4.05628 8.99269 4.05628C9.68296 4.05628 10.1197 4.52116 10.1341 5.1406C10.1338 5.73188 9.68335 6.21084 8.97899 6.21084Z" fill="#ADADAD"/>
                        </svg>
                        <div className="info-icon__text">Услуги оплачиваются посредством электронного платежа. <br/>Закрывающие документы не предоставляются.</div>
                    </div>
                    <input disabled type="radio" name="payment" className="check-wrap__input"/>
                    <span className="check-wrap__mark"></span>
                </label>
                <label className="payment__item check-wrap">
                    <span className="payment__check">Наличными исполнителю</span>
                    <div className="payment__info info-icon">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.3644 2.63581C11.8497 -0.87857 6.15097 -0.878962 2.63581 2.63581C-0.878962 6.15058 -0.87857 11.8493 2.63581 15.3644C6.15058 18.8784 11.8493 18.8788 15.3644 15.3644C18.8788 11.8493 18.8784 6.15097 15.3644 2.63581ZM10.1737 12.9133C10.1737 13.5617 9.64814 14.0872 8.99973 14.0872C8.35133 14.0872 7.82579 13.5617 7.82579 12.9133V8.2175C7.82579 7.56909 8.35133 7.04356 8.99973 7.04356C9.64814 7.04356 10.1737 7.56909 10.1737 8.2175V12.9133ZM8.97899 6.21084C8.3028 6.21084 7.85201 5.73188 7.8661 5.1406C7.85201 4.52076 8.3028 4.05628 8.99269 4.05628C9.68296 4.05628 10.1197 4.52116 10.1341 5.1406C10.1338 5.73188 9.68335 6.21084 8.97899 6.21084Z" fill="#ADADAD"/>
                        </svg>
                        <div className="info-icon__text">Оплата за заказ производится напрямую водителю наличными денежными средствами. <br/>Закрывающие документы не предоставляются.
                        </div>
                    </div>
                    {state.selected_payment === 2 ?
                        <input type="radio" name="payment" checked className="check-wrap__input"/> :
                        <input type="radio" name="payment" onChange={() => setPayment(2)} className="check-wrap__input"/>}
                    <span className="check-wrap__mark"></span>
                </label>
                <label className="payment__item check-wrap">
                    <span className="payment__check">Оплата по счету </span>
                    <div className="payment__info payment__info_big info-icon">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.3644 2.63581C11.8497 -0.87857 6.15097 -0.878962 2.63581 2.63581C-0.878962 6.15058 -0.87857 11.8493 2.63581 15.3644C6.15058 18.8784 11.8493 18.8788 15.3644 15.3644C18.8788 11.8493 18.8784 6.15097 15.3644 2.63581ZM10.1737 12.9133C10.1737 13.5617 9.64814 14.0872 8.99973 14.0872C8.35133 14.0872 7.82579 13.5617 7.82579 12.9133V8.2175C7.82579 7.56909 8.35133 7.04356 8.99973 7.04356C9.64814 7.04356 10.1737 7.56909 10.1737 8.2175V12.9133ZM8.97899 6.21084C8.3028 6.21084 7.85201 5.73188 7.8661 5.1406C7.85201 4.52076 8.3028 4.05628 8.99269 4.05628C9.68296 4.05628 10.1197 4.52116 10.1341 5.1406C10.1338 5.73188 9.68335 6.21084 8.97899 6.21084Z" fill="#ADADAD"/>
                        </svg>
                        <div className="info-icon__text">
                            Услуги оплачиваются по полученному счету на основании заключенного договора банковским переводом на реквизиты компании.
                            <br/><br/>
                            При оплате по счету:<br/>
                            - услуга оплачивается с НДС с предоставлением закрывающих документов;<br/>
                            - отсрочка платежа - 10 дней и более;<br/>
                            - гарантированное 100% принятие и выполнение заказа;<br/>
                            - высокая скорость предоставления крупнотоннажного транспорта;<br/>
                            - финансовая ответственность за нарушение качества;<br/>
                            - индивидуальная система лояльности Клиента;<br/>
                            - <a target="_blank" rel="noopener noreferrer" href={listOfBenefitsForPaymentLink} style={{textDecoration: 'underline'}}>полный список преимуществ.</a><br/><br/>
                            Процедура заключения договора займет не более 30 минут.<br/>
                            Для этого при выборе данного способа оплаты необходимо ввести ИНН, заполнить контактные данные и разместить заказ.
                        </div>
                    </div>
                    {state.selected_payment === 3 ?
                        <input type="radio" name="payment" checked className="check-wrap__input"/> :
                        <input type="radio" name="payment" onChange={() => setPayment(3)} className="check-wrap__input"/>}
                    <span className="check-wrap__mark"></span>
                </label>
            </section>
            {state.selected_payment === 3 ?
                <section className="checkout__social social">
                    <PartySuggestions token={token}
                                      value={state.company}
                                      onChange={setCompany}
                                      containerClassName={"client-form__input client-form__company input-wrap input-wrap_address"}
                                      inputProps={{className: 'input-wrap__input', placeholder: 'ИНН'}}/>
                </section> : null}
        </>
    );
}

export default Payment;