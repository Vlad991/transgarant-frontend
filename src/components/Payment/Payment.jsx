import React from "react";

const Payment = ({selectedPayment, setPayment}) => {
    return (
        <section className="checkout__payment checkout__title payment">
            <label className="payment__item check-wrap check-wrap_disabled">
                <span className="payment__check">Онлайн оплата</span>
                <svg className="payment__info" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.3644 2.63569C11.8497 -0.878693 6.15097 -0.879084 2.63581 2.63569C-0.878962 6.15046 -0.87857 11.8491 2.63581 15.3643C6.15058 18.8783 11.8493 18.8787 15.3644 15.3643C18.8788 11.8491 18.8784 6.15085 15.3644 2.63569ZM10.1737 12.9131C10.1737 13.5615 9.64814 14.0871 8.99973 14.0871C8.35133 14.0871 7.82579 13.5615 7.82579 12.9131V8.21737C7.82579 7.56897 8.35133 7.04344 8.99973 7.04344C9.64814 7.04344 10.1737 7.56897 10.1737 8.21737V12.9131ZM8.97899 6.21072C8.3028 6.21072 7.85201 5.73176 7.8661 5.14048C7.85201 4.52064 8.3028 4.05615 8.99269 4.05615C9.68296 4.05615 10.1197 4.52103 10.1341 5.14048C10.1338 5.73176 9.68335 6.21072 8.97899 6.21072Z" fill="#ADADAD"/>
                </svg>
                <input disabled type="radio" name="payment" className="check-wrap__input"/>
                <span className="check-wrap__mark"></span>
            </label>
            <label className="payment__item check-wrap">
                <span className="payment__check">Наличными исполнителю</span>
                <svg className="payment__info" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.3644 2.63569C11.8497 -0.878693 6.15097 -0.879084 2.63581 2.63569C-0.878962 6.15046 -0.87857 11.8491 2.63581 15.3643C6.15058 18.8783 11.8493 18.8787 15.3644 15.3643C18.8788 11.8491 18.8784 6.15085 15.3644 2.63569ZM10.1737 12.9131C10.1737 13.5615 9.64814 14.0871 8.99973 14.0871C8.35133 14.0871 7.82579 13.5615 7.82579 12.9131V8.21737C7.82579 7.56897 8.35133 7.04344 8.99973 7.04344C9.64814 7.04344 10.1737 7.56897 10.1737 8.21737V12.9131ZM8.97899 6.21072C8.3028 6.21072 7.85201 5.73176 7.8661 5.14048C7.85201 4.52064 8.3028 4.05615 8.99269 4.05615C9.68296 4.05615 10.1197 4.52103 10.1341 5.14048C10.1338 5.73176 9.68335 6.21072 8.97899 6.21072Z" fill="#ADADAD"/>
                </svg>
                {selectedPayment === 2 ?
                    <input type="radio" name="payment" checked className="check-wrap__input"/>:
                    <input type="radio" name="payment" onChange={() => setPayment(2)} className="check-wrap__input"/>}
                <span className="check-wrap__mark"></span>
            </label>
            <label className="payment__item check-wrap">
                <span className="payment__check">Оплата по счету </span>
                <svg className="payment__info" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.3644 2.63569C11.8497 -0.878693 6.15097 -0.879084 2.63581 2.63569C-0.878962 6.15046 -0.87857 11.8491 2.63581 15.3643C6.15058 18.8783 11.8493 18.8787 15.3644 15.3643C18.8788 11.8491 18.8784 6.15085 15.3644 2.63569ZM10.1737 12.9131C10.1737 13.5615 9.64814 14.0871 8.99973 14.0871C8.35133 14.0871 7.82579 13.5615 7.82579 12.9131V8.21737C7.82579 7.56897 8.35133 7.04344 8.99973 7.04344C9.64814 7.04344 10.1737 7.56897 10.1737 8.21737V12.9131ZM8.97899 6.21072C8.3028 6.21072 7.85201 5.73176 7.8661 5.14048C7.85201 4.52064 8.3028 4.05615 8.99269 4.05615C9.68296 4.05615 10.1197 4.52103 10.1341 5.14048C10.1338 5.73176 9.68335 6.21072 8.97899 6.21072Z" fill="#ADADAD"/>
                </svg>
                {selectedPayment === 3 ?
                    <input type="radio" name="payment" checked className="check-wrap__input"/>:
                    <input type="radio" name="payment" onChange={() => setPayment(3)} className="check-wrap__input"/>}
                <span className="check-wrap__mark"></span>
            </label>
        </section>
    );
}

export default Payment;