import React, {useState} from 'react';
import DatePicker, {registerLocale} from "react-datepicker";
import ru from "date-fns/locale/ru";
import {Field} from "redux-form";
import {getMonth, getYear, range} from "../../func/dateFormat";

const years = range(1990, getYear(new Date()) + 1);
const months = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь"
];

class DateField extends React.Component {
    state = {
        active: false,
        touched: false
    }

    toggle = (value) => {
        this.setState({
            active: value
        });
    }

    onFocus = (e) => {
        this.toggle(true);
    }

    onBlur = (e) => {
        if (!this.state.touched) this.setState({touched: true})
    }

    dateValue = (value) => {
        let dateValue = '';
        if (value) {
            dateValue = (value.getDate() > 9 ? value.getDate() : ('0' + value.getDate())) + '.'
                + ((value.getMonth() + 1) > 9 ? (value.getMonth() + 1) : ('0' + (value.getMonth() + 1))) + '.'
                + value.getFullYear();
        }
        return dateValue;
    }

    renderCustomHeader = ({date, changeYear, changeMonth, decreaseMonth, increaseMonth, prevMonthButtonDisabled, nextMonthButtonDisabled}) => {
        return (
            <div className="calendar__header">
                <button className="calendar__navigation" onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                    <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.29678 -4.45454e-07C6.49503 -4.62786e-07 6.65576 0.137769 6.65576 0.307695L6.65576 5.69232C6.65576 5.86224 6.49503 6 6.29678 6L0.463446 3.23079C0.463446 3.23079 0.194213 3.00001 0.463446 2.76923C0.73268 2.53847 6.29678 -4.45454e-07 6.29678 -4.45454e-07Z" fill="black" fill-opacity="0.25"/>
                    </svg>
                </button>
                <select className="calendar__month" value={months[getMonth(date)]} onChange={({target: {value}}) => changeMonth(months.indexOf(value))}>
                    {months.map(option => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
                <select className="calendar__year" value={getYear(date)} onChange={({target: {value}}) => changeYear(value)}>
                    {years.map(option => (<option key={option} value={option}>{option}</option>))}
                </select>
                <button className="calendar__navigation" onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                    <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.703216 6C0.504969 6 0.344238 5.86223 0.344238 5.6923V0.307681C0.344238 0.137755 0.504969 0 0.703216 0L6.53655 2.76921C6.53655 2.76921 6.80579 2.99999 6.53655 3.23077C6.26732 3.46153 0.703216 6 0.703216 6Z" fill="black" fill-opacity="0.25"/>
                    </svg>
                </button>
            </div>
        )
    }

    renderField = ({locale, input, customTouched, meta: {touched, error, warning}, active}) => {
        return <label className={this.props.className + " input-wrap input-wrap--date" + (customTouched || touched ? ((error ? ' input-wrap--error' : '') || (warning ? ' input-wrap--warning' : '')) : '')}>
            <input readOnly={true} onFocus={this.onFocus} onBlur={this.onBlur} name={input.name} value={this.dateValue(input.value)} type="text" className="input-wrap__input" placeholder={this.props.placeholder}/>
            <div className={"input-wrap__calendar calendar calendar--small" + (active ? " input-wrap__calendar--active" : "")}>
                <DatePicker
                    renderCustomHeader={this.renderCustomHeader}
                    onChange={input.onChange}
                    selected={input.value}
                    locale={locale}
                    inline/>
                <div className="calendar__footer">
                    <button type="button" onClick={() => input.onChange(null)} className="calendar__clear calendar__button button">Сбросить</button>
                    <button type="button" onClick={() => this.toggle(false)} className="calendar__save calendar__button button">Сохранить</button>
                </div>
            </div>
        </label>
    }

    render() {
        registerLocale('ru', ru);
        return <Field name={this.props.name} type="text" locale={ru} customTouched={this.state.touched} active={this.state.active} validate={this.props.validate} component={this.renderField}/>
    }
}

export default DateField;