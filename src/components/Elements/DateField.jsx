import React from 'react';
import DatePicker, {registerLocale} from "react-datepicker";
import ru from "date-fns/locale/ru";
import {Field} from "redux-form";

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

    renderField = ({locale, input, customTouched, meta: {touched, error, warning}, active}) => {
        return <label className={this.props.className + " input-wrap input-wrap--date" + (customTouched || touched ? ((error ? ' input-wrap--error' : '') || (warning ? ' input-wrap--warning' : '')) : '')}>
            <input readOnly={true} onFocus={this.onFocus} onBlur={this.onBlur} name={input.name} value={this.dateValue(input.value)} type="text" className="input-wrap__input" placeholder={this.props.placeholder}/>
            <div className={"input-wrap__calendar calendar calendar--small" + (active ? " input-wrap__calendar--active" : "")}>
                <DatePicker onChange={input.onChange} selected={input.value} locale={locale} inline/>
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