import React from "react";
import DatePicker, {registerLocale} from "react-datepicker";
import ru from "date-fns/locale/ru";

const Route = ({
                   dateFrom,
                   setDateFrom,
                   showFromPicker,
                   dateTo,
                   setDateTo,
                   showToPicker,
                   toggleFromPicker,
                   toggleToPicker,
                   points,
                   showForm,
                   updatePoint,
                   doUpdatePoint,
                   deletePoint,
                   toggleForm,
                   addPoint,
                   setState,
                   address,
                   comment,
                   company,
                   contactName,
                   number,
                   todo,
                   file,
                   timeFrom,
                   timeTo,
                   hasPause,
                   pauseFrom,
                   pauseTo,
                   values,
                   addValue,
                   showCollapse,
                   toggleCollapse,
                   showPointInfo
               }) => {
    registerLocale('ru', ru)
    return (
        <section className="checkout__route route">
            <div className="route__title checkout__title">
                <div className="route__text">Маршрут</div>
                <div className="route__date">
                    <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M15.0891 2.9532C14.8631 2.69873 14.5951 2.57148 14.2856 2.57148H13.1428V1.60716C13.1428 1.16528 13.0028 0.786902 12.7231 0.472169C12.4432 0.157437 12.1071 0 11.7141 0H11.1428C10.7499 0 10.4136 0.157437 10.1338 0.472205C9.85399 0.786902 9.71411 1.16531 9.71411 1.60719V2.57151H6.28572V1.60719C6.28572 1.16531 6.14577 0.786937 5.86598 0.472205C5.58625 0.157437 5.24995 0 4.85701 0H4.28563C3.89279 0 3.55645 0.157437 3.27666 0.472205C2.99693 0.786902 2.85695 1.16531 2.85695 1.60719V2.57151H1.7142C1.4046 2.57151 1.13679 2.69876 0.910594 2.95323C0.684401 3.20766 0.571289 3.5091 0.571289 3.85729V16.7144C0.571289 17.0624 0.684401 17.3637 0.910594 17.6183C1.13676 17.8727 1.40457 18 1.7142 18H14.2853C14.5948 18 14.8629 17.8728 15.0889 17.6183C15.3151 17.3638 15.4282 17.0623 15.4282 16.7144V3.85725C15.4282 3.50896 15.3152 3.20766 15.0891 2.9532ZM4.28554 16.7143H1.7142V13.8213H4.28554V16.7143ZM4.28554 13.1786H1.7142V9.96449H4.28554V13.1786ZM4.28554 9.32134H1.7142V6.42862H4.28554V9.32134ZM4.08477 4.72602C4.0282 4.66238 3.99996 4.5872 3.99996 4.50005V1.6073C3.99996 1.52026 4.0282 1.44486 4.08477 1.38133C4.14134 1.31768 4.20817 1.28591 4.28563 1.28591H4.85701C4.93438 1.28591 5.00139 1.31768 5.05787 1.38133C5.11444 1.4449 5.14275 1.52026 5.14275 1.6073V4.50005C5.14275 4.58723 5.11432 4.66241 5.05787 4.72602C5.00136 4.78966 4.93447 4.82143 4.85701 4.82143H4.28563C4.20826 4.82147 4.14134 4.78966 4.08477 4.72602ZM7.71411 16.7143H4.85692V13.8213H7.71411V16.7143ZM7.71411 13.1786H4.85692V9.96449H7.71411V13.1786ZM7.71411 9.32134H4.85692V6.42862H7.71411V9.32134ZM11.1428 16.7143H8.28565V13.8213H11.1428V16.7143ZM11.1428 13.1786H8.28565V9.96449H11.1428V13.1786ZM11.1428 9.32134H8.28565V6.42862H11.1428V9.32134ZM10.9418 4.72602C10.8853 4.66238 10.8572 4.5872 10.8572 4.50005V1.6073C10.8572 1.52026 10.8853 1.44486 10.9418 1.38133C10.9984 1.31768 11.0653 1.28591 11.1428 1.28591H11.7141C11.7916 1.28591 11.8585 1.31768 11.9151 1.38133C11.9716 1.4449 11.9997 1.52026 11.9997 1.6073V4.50005C11.9997 4.58723 11.9715 4.66241 11.9151 4.72602C11.8586 4.78966 11.7916 4.82143 11.7141 4.82143H11.1428C11.0654 4.82147 10.9981 4.78966 10.9418 4.72602ZM14.2853 16.7143H11.7139V13.8213H14.2853V16.7143ZM14.2853 13.1786H11.7139V9.96449H14.2853V13.1786ZM14.2853 9.32134H11.7139V6.42862H14.2853V9.32134Z"
                            fill="#B8B8B8"/>
                    </svg>
                    <div className="route__time-text">с</div>
                    <div onClick={toggleFromPicker} className="route__link link">{dateFrom.getFullYear() + '-' + ((dateFrom.getMonth() + 1) < 10 ? ('0' + (dateFrom.getMonth() + 1)) : (dateFrom.getMonth() + 1)) + '-' + (dateFrom.getDate() < 10 ? ('0' + dateFrom.getDate()) : dateFrom.getDate())}</div>
                    <div onClick={toggleFromPicker} className="route__link link">{(dateFrom.getHours() < 10 ? ('0' + dateFrom.getHours()) : dateFrom.getHours()) + ":" + (dateFrom.getMinutes() < 10 ? ('0' + dateFrom.getMinutes()) : dateFrom.getMinutes())}</div>
                    <div className="route__time-text">до</div>
                    <div onClick={toggleToPicker} className="route__link link">{dateTo.getFullYear() + '-' + ((dateTo.getMonth() + 1) < 10 ? ('0' + (dateTo.getMonth() + 1)) : (dateTo.getMonth() + 1)) + '-' + (dateTo.getDate() < 10 ? ('0' + dateTo.getDate()) : dateTo.getDate())}</div>
                    <div onClick={toggleToPicker} className="route__link link">{(dateTo.getHours() < 10 ? ('0' + dateTo.getHours()) : dateTo.getHours()) + ":" + (dateTo.getMinutes() < 10 ? ('0' + dateTo.getMinutes()) : dateTo.getMinutes())}</div>
                </div>
                <div className={"route__calendar calendar" + (showFromPicker ? " route__calendar_active" : '')}>
                    <DatePicker
                        onChange={setDateFrom}
                        selected={dateFrom}
                        showTimeSelect
                        locale={ru}
                        timeFormat="HH:mm"
                        inline
                    />
                    <div className="calendar__footer">
                        <button onClick={() => setDateFrom(new Date)} className="calendar__clear calendar__button button">Сбросить</button>
                        <button onClick={toggleFromPicker} className="calendar__save calendar__button button">Сохранить</button>
                    </div>
                </div>
                <div className={"route__calendar route__calendar_second calendar" + (showToPicker ? " route__calendar_active" : '')}>
                    <DatePicker
                        onChange={setDateTo}
                        selected={dateTo}
                        showTimeSelect
                        locale={ru}
                        timeFormat="HH:mm"
                        inline
                    />
                    <div className="calendar__footer">
                        <button onClick={() => setDateTo(new Date)} className="calendar__clear calendar__button button">Сбросить</button>
                        <button onClick={toggleToPicker} className="calendar__save calendar__button button">Сохранить</button>
                    </div>
                </div>
            </div>
            <div className="route__points">
                {points.map((point, index) => {
                    return (
                        <div key={index} onClick={() => showPointInfo(index)} className="route__point route-point">
                            <div onClick={(e) => deletePoint(e, index)} className="route-point__cross">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14 1.4L12.6 0L7 5.6L1.4 0L0 1.4L5.6 7L0 12.6L1.4 14L7 8.4L12.6 14L14 12.6L8.4 7L14 1.4Z" fill="#A3A3A3"/>
                                </svg>
                            </div>
                            <div className="route-point__header">
                                <div className="route-point__name">{point.name}</div>
                                <div className="route-point__value">{point.values.map(value => value + ', ')}</div>
                            </div>
                            <div className="route-point__address">{point.address}</div>
                            <div className="route-point__contact">{point.company + " " + point.contact_name + " " + point.number}</div>
                            <div className="route-point__footer">
                                <div className="route-point__text">{point.todo + "\n" + point.comment}</div>
                                {point.file ?
                                    <div className="route-point__check-mark">
                                        <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M28.3348 0.876892V12.0373H39.4952L28.3348 0.876892Z" fill="#BFBFBF"/>
                                            <path d="M25.3451 15.0264V0.000732422H0V49.4044H28.2727C26.9962 48.0791 25.9868 46.5525 25.2713 44.8605C24.4911 43.0151 24.0955 41.058 24.0955 39.0412C24.0955 37.0243 24.4911 35.0673 25.2713 33.2218C26.0246 31.4421 27.1018 29.8438 28.4729 28.4717C29.8451 27.1006 31.4434 26.0234 33.2231 25.2701C35.0685 24.4898 37.0256 24.0942 39.0424 24.0942C39.5217 24.0942 39.998 24.1171 40.4704 24.162V15.0264H25.3451ZM7.45454 14.9935H19.4121V17.9829H7.45454V14.9935ZM19.4121 35.9193H7.45454V32.9299H19.4121V35.9193ZM22.4015 29.9405H7.45454V26.9511H22.4015V29.9405ZM30.0075 23.9617H7.45454V20.9723H30.0075V23.9617Z" fill="#BFBFBF"/>
                                            <path d="M39.0425 27.0839C32.4389 27.0839 27.0849 32.4379 27.0849 39.0414C27.0849 45.645 32.4389 50.999 39.0425 50.999C45.646 50.999 51 45.645 51 39.0414C51 32.4379 45.646 27.0839 39.0425 27.0839ZM37.7779 43.5016L33.53 39.1301L35.6744 37.0465L37.9264 39.3643L42.6317 35.1692L44.6207 37.4002L37.7779 43.5016Z" fill="#FFB700"/>
                                        </svg>
                                        {point.file}
                                    </div> : null}
                            </div>
                        </div>
                    )
                })}
            </div>
            {!showForm ?
                <div onClick={() => toggleForm(true)} className="route__add-button button-rhomb"><span className="button-rhomb__text">Добавить адрес</span></div> :
                <>
                    <div className="route__add-form add-form">
                        <div className="add-form__col add-form__col_first">
                            <div className="add-form__heading">Точка {updatePoint || (updatePoint === 0) ? updatePoint + 1 : points.length + 1}</div>
                            <label className="add-form__address input-wrap">
                                <input onChange={(e) => setState({address: e.target.value})} value={address} type="text" className="input-wrap__input" placeholder="Адрес"/>
                            </label>
                            <div className="add-form__inputs">
                                <label className="add-form__input input-wrap">
                                    <input onChange={(e) => setState({comment: e.target.value})} value={comment} type="text" className="input-wrap__input" placeholder="Комментарий к адресу"/>
                                </label>
                                <label className="add-form__input input-wrap">
                                    <input onChange={(e) => setState({company: e.target.value})} value={company} type="text" className="input-wrap__input" placeholder="В какую компанию по адресу"/>
                                </label>
                                <label className="add-form__input input-wrap">
                                    <input onChange={(e) => setState({contact_name: e.target.value})} value={contactName} type="text" className="input-wrap__input" placeholder="Контактное лицо (ФИО)"/>
                                </label>
                                <label className="add-form__input input-wrap">
                                    <input onChange={(e) => setState({number: e.target.value})} value={number} type="text" className="input-wrap__input" placeholder="Номер телефона"/>
                                </label>
                                <label className="add-form__input input-wrap">
                                    <input onChange={(e) => setState({todo: e.target.value})} value={todo} type="text" className="input-wrap__input" placeholder="Что нужно сделать по адресу"/>
                                </label>
                                <label className="add-form__input add-form__input_file input-wrap">
                                    <svg width="21" height="25" viewBox="0 0 21 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.50261 19.9491C7.3789 19.8056 7.2108 19.6896 6.99873 19.6013C6.78666 19.5129 6.51166 19.4685 6.17373 19.4685H5.76123V22.7569H6.46252C6.94183 22.7569 7.28752 22.6039 7.49959 22.2974C7.71166 21.9909 7.8177 21.547 7.8177 20.9655C7.8177 20.7849 7.79614 20.606 7.75304 20.4293C7.70951 20.2526 7.62632 20.0926 7.50261 19.9491Z" fill="#AFAFAF"/>
                                        <path
                                            d="M20.1983 16.8103V6.025C20.1983 5.69483 20.1587 5.45043 19.9612 5.25259L14.9453 0.237069C14.7949 0.0866379 14.5862 0 14.3729 0H1.8634C1.35219 0 0.801758 0.394828 0.801758 1.26121V16.8103H20.1983ZM8.99141 14.6552H5.54314C5.30521 14.6552 5.1121 14.4621 5.1121 14.2241C5.1121 13.9862 5.30521 13.7931 5.54314 13.7931H8.99141C9.22934 13.7931 9.42245 13.9862 9.42245 14.2241C9.42245 14.4621 9.22934 14.6552 8.99141 14.6552ZM11.5776 12.5H7.26728C7.02934 12.5 6.83624 12.3069 6.83624 12.069C6.83624 11.831 7.02934 11.6379 7.26728 11.6379H11.5776C11.8156 11.6379 12.0087 11.831 12.0087 12.069C12.0087 12.3069 11.8156 12.5 11.5776 12.5ZM17.1811 12.5H13.3018C13.0638 12.5 12.8707 12.3069 12.8707 12.069C12.8707 11.831 13.0638 11.6379 13.3018 11.6379H17.1811C17.419 11.6379 17.6121 11.831 17.6121 12.069C17.6121 12.3069 17.419 12.5 17.1811 12.5ZM17.1811 10.3448H14.5949C14.3569 10.3448 14.1638 10.1517 14.1638 9.91379C14.1638 9.67586 14.3569 9.48276 14.5949 9.48276H17.1811C17.419 9.48276 17.6121 9.67586 17.6121 9.91379C17.6121 10.1517 17.419 10.3448 17.1811 10.3448ZM17.1811 8.18966H16.319C16.0811 8.18966 15.888 7.99655 15.888 7.75862C15.888 7.52069 16.0811 7.32759 16.319 7.32759H17.1811C17.419 7.32759 17.6121 7.52069 17.6121 7.75862C17.6121 7.99655 17.419 8.18966 17.1811 8.18966ZM14.1638 1.46164C14.1638 1.26422 14.4022 1.16552 14.5418 1.30517L18.8931 5.65647C19.0328 5.79612 18.9341 6.03448 18.7367 6.03448H14.1638V1.46164ZM11.1466 7.32759H14.5949C14.8328 7.32759 15.0259 7.52069 15.0259 7.75862C15.0259 7.99655 14.8328 8.18966 14.5949 8.18966H11.1466C10.9087 8.18966 10.7156 7.99655 10.7156 7.75862C10.7156 7.52069 10.9087 7.32759 11.1466 7.32759ZM9.11641 7.45259C9.2759 7.2931 9.569 7.2931 9.72848 7.45259C9.80607 7.53448 9.85348 7.64655 9.85348 7.75862C9.85348 7.87069 9.80607 7.98276 9.72848 8.06465C9.64659 8.14224 9.53452 8.18966 9.42245 8.18966C9.31038 8.18966 9.19831 8.14224 9.11641 8.06465C9.03883 7.98276 8.99141 7.87069 8.99141 7.75862C8.99141 7.64655 9.03883 7.53448 9.11641 7.45259ZM3.819 5.17241H6.40521C6.64314 5.17241 6.83624 5.36552 6.83624 5.60345C6.83624 5.84138 6.64314 6.03448 6.40521 6.03448H3.819C3.58107 6.03448 3.38796 5.84138 3.38796 5.60345C3.38796 5.36552 3.58107 5.17241 3.819 5.17241ZM3.819 7.32759H7.69831C7.93624 7.32759 8.12934 7.52069 8.12934 7.75862C8.12934 7.99655 7.93624 8.18966 7.69831 8.18966H3.819C3.58107 8.18966 3.38796 7.99655 3.38796 7.75862C3.38796 7.52069 3.58107 7.32759 3.819 7.32759ZM3.819 9.48276H13.3018C13.5397 9.48276 13.7328 9.67586 13.7328 9.91379C13.7328 10.1517 13.5397 10.3448 13.3018 10.3448H3.819C3.58107 10.3448 3.38796 10.1517 3.38796 9.91379C3.38796 9.67586 3.58107 9.48276 3.819 9.48276ZM3.819 11.6379H5.54314C5.78107 11.6379 5.97417 11.831 5.97417 12.069C5.97417 12.3069 5.78107 12.5 5.54314 12.5H3.819C3.58107 12.5 3.38796 12.3069 3.38796 12.069C3.38796 11.831 3.58107 11.6379 3.819 11.6379ZM3.51296 13.9181C3.67245 13.7586 3.96555 13.7586 4.12503 13.9181C4.20262 14 4.25003 14.1078 4.25003 14.2241C4.25003 14.3362 4.20262 14.4483 4.12503 14.5302C4.04314 14.6078 3.93107 14.6552 3.819 14.6552C3.70693 14.6552 3.59486 14.6078 3.51296 14.5302C3.43538 14.4483 3.38796 14.3362 3.38796 14.2241C3.38796 14.1121 3.43538 14 3.51296 13.9181Z"
                                            fill="#AFAFAF"/>
                                        <path
                                            d="M0.801758 17.6724V24.1379C0.801758 24.5728 1.32762 25 1.8634 25H19.1367C19.6724 25 20.1983 24.5728 20.1983 24.1379V17.6724H0.801758ZM8.44529 21.8999C8.36857 22.1534 8.27159 22.3655 8.15348 22.5366C8.03538 22.7077 7.90305 22.8422 7.75564 22.9405C7.60822 23.0387 7.46598 23.112 7.32848 23.1616C7.19098 23.2107 7.06512 23.2422 6.95133 23.256C6.83753 23.2689 6.75305 23.2758 6.69831 23.2758H5.05434V18.9327H6.3621C6.72762 18.9327 7.04874 18.9909 7.32547 19.1064C7.60219 19.2219 7.83236 19.3767 8.01512 19.5689C8.19788 19.7612 8.33409 19.9806 8.4246 20.2258C8.51469 20.4711 8.55995 20.7237 8.55995 20.9831C8.56038 21.3409 8.52202 21.6465 8.44529 21.8999ZM12.7212 22.0499C12.6289 22.3288 12.5009 22.5607 12.338 22.7452C12.175 22.9301 11.9845 23.0693 11.7664 23.1637C11.5483 23.2581 11.3095 23.3051 11.0505 23.3051C10.7914 23.3051 10.5526 23.2581 10.3345 23.1637C10.1164 23.0693 9.9259 22.9301 9.76297 22.7452C9.60003 22.5603 9.47202 22.3288 9.37978 22.0499C9.28753 21.7711 9.24141 21.4487 9.24141 21.0836C9.24141 20.7185 9.28753 20.3969 9.37978 20.1202C9.47202 19.8431 9.5996 19.6125 9.76297 19.428C9.9259 19.2431 10.1164 19.103 10.3345 19.0064C10.5526 18.9099 10.7914 18.862 11.0505 18.862C11.3095 18.862 11.5483 18.9099 11.7664 19.0064C11.9845 19.103 12.175 19.2431 12.338 19.428C12.5009 19.6129 12.6285 19.8435 12.7212 20.1202C12.8134 20.3974 12.8595 20.7185 12.8595 21.0836C12.8595 21.4487 12.8134 21.7711 12.7212 22.0499ZM14.5893 21.8379C14.6462 22.0461 14.7246 22.2159 14.825 22.3478C14.9255 22.4797 15.0393 22.5754 15.1668 22.6366C15.2944 22.6978 15.4289 22.728 15.5707 22.728C15.7125 22.728 15.8449 22.7021 15.9686 22.6512C16.0923 22.6004 16.2052 22.5176 16.3074 22.4038L16.7966 22.834C16.6354 22.9909 16.4526 23.109 16.2487 23.1874C16.0444 23.2663 15.8246 23.3051 15.5888 23.3051C15.3293 23.3051 15.091 23.2581 14.8729 23.1637C14.6548 23.0693 14.4643 22.9301 14.3013 22.7452C14.1384 22.5603 14.0104 22.3288 13.9181 22.0499C13.8259 21.7711 13.7798 21.4487 13.7798 21.0836C13.7798 20.7185 13.8259 20.3969 13.9181 20.1202C14.0104 19.8431 14.138 19.6125 14.3013 19.428C14.4643 19.2431 14.6556 19.103 14.8759 19.0064C15.0957 18.9099 15.3337 18.862 15.5888 18.862C15.8246 18.862 16.0444 18.9012 16.2487 18.9797C16.4531 19.0586 16.6354 19.1762 16.7966 19.3331L16.3074 19.7693C16.2091 19.6551 16.1 19.5728 15.9802 19.5219C15.8604 19.4711 15.7358 19.4452 15.6061 19.4452C15.4608 19.4452 15.322 19.4724 15.1906 19.5275C15.0587 19.5827 14.941 19.6758 14.8371 19.8073C14.7328 19.9392 14.6513 20.1086 14.5927 20.3172C14.5341 20.5258 14.5022 20.7806 14.4983 21.0831C14.5018 21.3784 14.5324 21.6297 14.5893 21.8379Z"
                                            fill="#AFAFAF"/>
                                        <path d="M11.8139 19.8223C11.7139 19.6887 11.5997 19.5926 11.4721 19.5336C11.3445 19.4745 11.21 19.4452 11.0682 19.4452C10.923 19.4452 10.7842 19.4723 10.6527 19.5275C10.5208 19.5827 10.4031 19.6758 10.2992 19.8073C10.1949 19.9392 10.1135 20.1086 10.0548 20.3172C9.99623 20.5258 9.96433 20.7805 9.96045 21.0831C9.96433 21.3779 9.99493 21.6292 10.0518 21.8374C10.1087 22.0456 10.1872 22.2154 10.2876 22.3473C10.388 22.4792 10.5018 22.5749 10.6294 22.6361C10.757 22.6973 10.8915 22.7275 11.0333 22.7275C11.1786 22.7275 11.3169 22.6991 11.4488 22.6422C11.5803 22.5853 11.6984 22.4917 11.8023 22.3624C11.9061 22.2327 11.988 22.0629 12.0467 21.8525C12.1053 21.6422 12.1367 21.3861 12.1411 21.0836C12.1372 20.7887 12.1066 20.5383 12.0497 20.3323C11.9923 20.1258 11.9139 19.956 11.8139 19.8223Z" fill="#AFAFAF"/>
                                    </svg>
                                    <span className="add-form__file-text">Прикрепить файл</span>
                                    {/*<input onChange={(e) => setState({file: e.target.value})} value={file} type="file" className="input-wrap__input" placeholder="Прикрепить файл"/>*/}
                                </label>
                            </div>
                        </div>
                        <div className="add-form__col add-form__col_second">
                            <div className="add-form__heading">Часы работы</div>
                            <div className="add-form__time">
                                <label className="add-form__time-item input-wrap">
                                    <input onChange={(e) => setState({timeFrom: e.target.value})} value={timeFrom} type="text" className="input-wrap__input" placeholder="c 09.00"/>
                                </label>
                                <label className="add-form__time-item input-wrap">
                                    <input onChange={(e) => setState({timeTo: e.target.value})} value={timeTo} type="text" className="input-wrap__input" placeholder="до 18.00"/>
                                </label>
                            </div>
                            <div className="add-form__pause">
                                <span>Перерыв</span>
                                <label className="check-wrap">
                                    Нет
                                    <input onChange={(e) => setState({hasPause: e.target.value})} value={hasPause} type="checkbox" className="check-wrap__input"/>
                                    <span className="check-wrap__mark"></span>
                                </label>
                            </div>
                            <div className="add-form__time">
                                <label className="add-form__time-item input-wrap">
                                    <input onChange={(e) => setState({pauseFrom: e.target.value})} value={pauseFrom} type="text" className="input-wrap__input" placeholder="с 09.00"/>
                                </label>
                                <label className="add-form__time-item input-wrap">
                                    <input onChange={(e) => setState({pauseTo: e.target.value})} value={pauseTo} type="text" className="input-wrap__input" placeholder="до 18.00"/>
                                </label>
                            </div>
                            <div onClick={toggleCollapse} className={"add-form__collapse collapse collapse_gray" + (showCollapse ? ' collapse_active' : '')}>
                                <div className="collapse__selected">Услуги: {values.map(value => value + ', ')}</div>
                                <div onClick={(e) => e.stopPropagation()} className="collapse__items">
                                    <label className="collapse__item check-wrap">
                                        Погр
                                        <input onChange={() => addValue('Погр')} type="checkbox" className="check-wrap__input"/>
                                        <span className="check-wrap__mark"></span>
                                    </label>
                                    <label className="collapse__item check-wrap">
                                        Разг
                                        <input onChange={() => addValue('Разг')}  type="checkbox" className="check-wrap__input"/>
                                        <span className="check-wrap__mark"></span>
                                    </label>
                                    <label className="collapse__item check-wrap">
                                        Получ док
                                        <input onChange={() => addValue('Получ док')}  type="checkbox" className="check-wrap__input"/>
                                        <span className="check-wrap__mark"></span>
                                    </label>
                                    <label className="collapse__item check-wrap">
                                        Встретить экспедитора
                                        <input onChange={() => addValue('Встретить экспедитора')}  type="checkbox" className="check-wrap__input"/>
                                        <span className="check-wrap__mark"></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    {updatePoint || (updatePoint === 0) ?
                        <button onClick={() => doUpdatePoint(updatePoint, "Точка " + (updatePoint + 1))} type="button" className="route__add-button button-rhomb"><span className="button-rhomb__text">Обновить</span></button> :
                        <button onClick={() => addPoint("Точка " + (points.length + 1))} type="button" className="route__add-button button-rhomb"><span className="button-rhomb__text">Добавить</span></button>}
                </>}
        </section>
    );
}

export default Route;