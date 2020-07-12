import React from "react";
import DatePicker, {registerLocale} from "react-datepicker";
import ru from "date-fns/locale/ru";
import {AddressSuggestions} from "react-dadata";
import InputMask from 'react-input-mask';

const Date = ({
                  state,
                  setDateFrom,
                  showFromPicker,
                  setDateTo,
                  showToPicker,
                  toggleFromPicker,
                  toggleToPicker,
              }) => {
    registerLocale('ru', ru);
    return (
        <div className="route__title checkout__title">
            <div className="route__text">Маршрут</div>
            <div className="route__date">
                <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M15.0891 2.9532C14.8631 2.69873 14.5951 2.57148 14.2856 2.57148H13.1428V1.60716C13.1428 1.16528 13.0028 0.786902 12.7231 0.472169C12.4432 0.157437 12.1071 0 11.7141 0H11.1428C10.7499 0 10.4136 0.157437 10.1338 0.472205C9.85399 0.786902 9.71411 1.16531 9.71411 1.60719V2.57151H6.28572V1.60719C6.28572 1.16531 6.14577 0.786937 5.86598 0.472205C5.58625 0.157437 5.24995 0 4.85701 0H4.28563C3.89279 0 3.55645 0.157437 3.27666 0.472205C2.99693 0.786902 2.85695 1.16531 2.85695 1.60719V2.57151H1.7142C1.4046 2.57151 1.13679 2.69876 0.910594 2.95323C0.684401 3.20766 0.571289 3.5091 0.571289 3.85729V16.7144C0.571289 17.0624 0.684401 17.3637 0.910594 17.6183C1.13676 17.8727 1.40457 18 1.7142 18H14.2853C14.5948 18 14.8629 17.8728 15.0889 17.6183C15.3151 17.3638 15.4282 17.0623 15.4282 16.7144V3.85725C15.4282 3.50896 15.3152 3.20766 15.0891 2.9532ZM4.28554 16.7143H1.7142V13.8213H4.28554V16.7143ZM4.28554 13.1786H1.7142V9.96449H4.28554V13.1786ZM4.28554 9.32134H1.7142V6.42862H4.28554V9.32134ZM4.08477 4.72602C4.0282 4.66238 3.99996 4.5872 3.99996 4.50005V1.6073C3.99996 1.52026 4.0282 1.44486 4.08477 1.38133C4.14134 1.31768 4.20817 1.28591 4.28563 1.28591H4.85701C4.93438 1.28591 5.00139 1.31768 5.05787 1.38133C5.11444 1.4449 5.14275 1.52026 5.14275 1.6073V4.50005C5.14275 4.58723 5.11432 4.66241 5.05787 4.72602C5.00136 4.78966 4.93447 4.82143 4.85701 4.82143H4.28563C4.20826 4.82147 4.14134 4.78966 4.08477 4.72602ZM7.71411 16.7143H4.85692V13.8213H7.71411V16.7143ZM7.71411 13.1786H4.85692V9.96449H7.71411V13.1786ZM7.71411 9.32134H4.85692V6.42862H7.71411V9.32134ZM11.1428 16.7143H8.28565V13.8213H11.1428V16.7143ZM11.1428 13.1786H8.28565V9.96449H11.1428V13.1786ZM11.1428 9.32134H8.28565V6.42862H11.1428V9.32134ZM10.9418 4.72602C10.8853 4.66238 10.8572 4.5872 10.8572 4.50005V1.6073C10.8572 1.52026 10.8853 1.44486 10.9418 1.38133C10.9984 1.31768 11.0653 1.28591 11.1428 1.28591H11.7141C11.7916 1.28591 11.8585 1.31768 11.9151 1.38133C11.9716 1.4449 11.9997 1.52026 11.9997 1.6073V4.50005C11.9997 4.58723 11.9715 4.66241 11.9151 4.72602C11.8586 4.78966 11.7916 4.82143 11.7141 4.82143H11.1428C11.0654 4.82147 10.9981 4.78966 10.9418 4.72602ZM14.2853 16.7143H11.7139V13.8213H14.2853V16.7143ZM14.2853 13.1786H11.7139V9.96449H14.2853V13.1786ZM14.2853 9.32134H11.7139V6.42862H14.2853V9.32134Z"
                        fill="#B8B8B8"/>
                </svg>
                <div onClick={toggleFromPicker} className="route__link link">{state.date_from.getFullYear() + '-' + ((state.date_from.getMonth() + 1) < 10 ? ('0' + (state.date_from.getMonth() + 1)) : (state.date_from.getMonth() + 1)) + '-' + (state.date_from.getDate() < 10 ? ('0' + state.date_from.getDate()) : state.date_from.getDate())}</div>
                <div className="route__time-text">с</div>
                <div onClick={toggleFromPicker} className="route__link link">{(state.date_from.getHours() < 10 ? ('0' + state.date_from.getHours()) : state.date_from.getHours()) + ":" + (state.date_from.getMinutes() < 10 ? ('0' + state.date_from.getMinutes()) : state.date_from.getMinutes())}</div>
                <div className="route__time-text">до</div>
                <div onClick={toggleToPicker} className="route__link link">{(state.date_to.getHours() < 10 ? ('0' + state.date_to.getHours()) : state.date_to.getHours()) + ":" + (state.date_to.getMinutes() < 10 ? ('0' + state.date_to.getMinutes()) : state.date_to.getMinutes())}</div>
            </div>
            <div className={"route__calendar calendar" + (showFromPicker ? " route__calendar_active" : '')}>
                <DatePicker
                    onChange={setDateFrom}
                    selected={state.date_from}
                    showTimeSelect
                    locale={ru}
                    timeFormat="HH:mm"
                    inline
                />
                <div className="calendar__footer">
                    <button onClick={() => setDateFrom(new Date())} className="calendar__clear calendar__button button">Сбросить</button>
                    <button onClick={toggleFromPicker} className="calendar__save calendar__button button">Сохранить</button>
                </div>
            </div>
            <div className={"route__calendar route__calendar_second calendar" + (showToPicker ? " route__calendar_active" : '')}>
                <DatePicker
                    onChange={setDateTo}
                    selected={state.date_to}
                    showTimeSelect
                    locale={ru}
                    timeFormat="HH:mm"
                    inline
                />
                <div className="calendar__footer">
                    <button onClick={() => setDateTo(new Date())} className="calendar__clear calendar__button button">Сбросить</button>
                    <button onClick={toggleToPicker} className="calendar__save calendar__button button">Сохранить</button>
                </div>
            </div>
        </div>
    );
}

export default Date;