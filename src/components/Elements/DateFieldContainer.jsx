import React from 'react';
import DatePicker, {registerLocale} from "react-datepicker";
import ru from "date-fns/locale/ru";

class DateFieldContainer extends React.Component {
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

    render() {
        registerLocale('ru', ru);
        let value = this.props.input.value;
        let dateValue = '';
        if (value) {
            dateValue = (value.getDate() > 9 ? value.getDate() : ('0' + value.getDate())) + '.'
                + ((value.getMonth() + 1) > 9 ? (value.getMonth() + 1) : ('0' + (value.getMonth() + 1))) + '.'
                + value.getFullYear();
        }
        return (
            <>
                <input readOnly={true} onFocus={this.onFocus} name={this.props.input.name} value={dateValue} type="text" className="input-wrap__input" placeholder={this.props.placeholder}/>
                <div className={"input-wrap__calendar calendar calendar--small" + (this.state.active ? " input-wrap__calendar--active" : "")}>
                    <DatePicker
                        onChange={this.props.input.onChange}
                        selected={this.props.input.value}
                        locale={ru}
                        inline
                    />
                    <div className="calendar__footer">
                        <button type="button" onClick={() => this.props.input.onChange(null)} className="calendar__clear calendar__button button">Сбросить</button>
                        <button type="button" onClick={() => this.toggle(false)} className="calendar__save calendar__button button">Сохранить</button>
                    </div>
                </div>
            </>
        )
    }
}

export default DateFieldContainer;