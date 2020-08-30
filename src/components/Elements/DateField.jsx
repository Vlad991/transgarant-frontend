import React from 'react';
import DatePicker, {registerLocale} from "react-datepicker";
import ru from "date-fns/locale/ru";
import {Field} from "redux-form";

class DateField extends React.Component {
    state = {
        active: false
    }

    toggle = (value) => {
        this.setState({
            active: value
        });
    }

    onFocus = (e) => {
        this.toggle(true);
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

    render() {
        registerLocale('ru', ru);
        return (
            <label className={this.props.className + " input-wrap input-wrap--date"}>
                <Field name={this.props.name} type="text" component={({input, meta}) =>
                    <>
                        <input readOnly={true} onFocus={this.onFocus} name={input.name} value={this.dateValue(input.value)} type="text" className="input-wrap__input" placeholder={this.props.placeholder}/>
                        <div className={"input-wrap__calendar calendar calendar--small" + (this.state.active ? " input-wrap__calendar--active" : "")}>
                            <DatePicker onChange={input.onChange}
                                        selected={input.value}
                                        locale={ru}
                                        inline/>
                            <div className="calendar__footer">
                                <button type="button" onClick={() => input.onChange(null)} className="calendar__clear calendar__button button">Сбросить</button>
                                <button type="button" onClick={() => this.toggle(false)} className="calendar__save calendar__button button">Сохранить</button>
                            </div>
                        </div>
                    </>}/>
            </label>
        )
    }
}

export default DateField;