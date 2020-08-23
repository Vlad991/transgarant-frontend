import React from "react";
import LeafletMap from "../LeafletMap/LeafletMap";
import {InView} from "react-intersection-observer";
import YandexMap from "../YandexMap/YandexMap";
import ReactHtmlParser from 'react-html-parser';
import Loader from 'react-loader-spinner';

const Tariff = ({state, setTariff, setView, setMapType}) => {
    let selectedTariffObject;
    if (state.selected_tariff) {
        selectedTariffObject = state.tariff_types.find(tariff => tariff.id === state.selected_tariff);
    }
    return (
        <section className="checkout__tariff tariff">
            <div className="checkout__title tariff__heading">ВЫБОР ТАРИФА И ДЕТАЛИЗАЦИЯ ЗАКАЗА</div>
            <div className="tariff__variants">
                {state.tariff_types.map((tariff, index, tariffs) => {
                    if (index % 2 === 0) {
                        return (
                            <div key={index} className={"tariff__variant tariff-variant" + ((tariff.id === state.selected_tariff) || (tariffs[index + 1].id === state.selected_tariff) ? ' tariff-variant_active' : '')}>
                                <div key={index} onClick={() => setTariff(tariff.id)} className="tariff-variant__item">
                                    <div className="tariff-variant__heading">
                                        {tariff.name}
                                        <div className="tariff__info-icon info-icon">
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M15.3644 2.63581C11.8497 -0.87857 6.15097 -0.878962 2.63581 2.63581C-0.878962 6.15058 -0.87857 11.8493 2.63581 15.3644C6.15058 18.8784 11.8493 18.8788 15.3644 15.3644C18.8788 11.8493 18.8784 6.15097 15.3644 2.63581ZM10.1737 12.9133C10.1737 13.5617 9.64814 14.0872 8.99973 14.0872C8.35133 14.0872 7.82579 13.5617 7.82579 12.9133V8.2175C7.82579 7.56909 8.35133 7.04356 8.99973 7.04356C9.64814 7.04356 10.1737 7.56909 10.1737 8.2175V12.9133ZM8.97899 6.21084C8.3028 6.21084 7.85201 5.73188 7.8661 5.1406C7.85201 4.52076 8.3028 4.05628 8.99269 4.05628C9.68296 4.05628 10.1197 4.52116 10.1341 5.1406C10.1338 5.73188 9.68335 6.21084 8.97899 6.21084Z" fill="#FFB700"/>
                                            </svg>
                                            <div className="info-icon__text">
                                                {ReactHtmlParser(tariff.text)}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tariff-variant__description">
                                        {tariff.tariff_loading ?
                                            <Loader type="Puff" color={(tariff.id === state.selected_tariff) || (tariffs[index + 1].id === state.selected_tariff) ? "#FFFFFF" : "#FFB700"} height={20} width={20}/>
                                            : <>
                                                <div className="tariff-variant__text">{tariff.cost} р</div>
                                                <label className="tariff-variant__check check-wrap">
                                                    {tariff.id === state.selected_tariff ?
                                                        <input key={1} type="checkbox" checked onChange={() => {
                                                        }} className="check-wrap__input"/> :
                                                        <input key={2} type="checkbox" onChange={() => {
                                                        }} className="check-wrap__input"/>}
                                                    <span className="check-wrap__mark"></span>
                                                </label>
                                            </>}
                                    </div>
                                </div>
                                <div key={index + 1} onClick={() => setTariff(tariffs[index + 1].id)} className="tariff-variant__item">
                                    <div className="tariff-variant__heading">
                                        {tariffs[index + 1].name}
                                        <div className="tariff__info-icon info-icon">
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M15.3644 2.63581C11.8497 -0.87857 6.15097 -0.878962 2.63581 2.63581C-0.878962 6.15058 -0.87857 11.8493 2.63581 15.3644C6.15058 18.8784 11.8493 18.8788 15.3644 15.3644C18.8788 11.8493 18.8784 6.15097 15.3644 2.63581ZM10.1737 12.9133C10.1737 13.5617 9.64814 14.0872 8.99973 14.0872C8.35133 14.0872 7.82579 13.5617 7.82579 12.9133V8.2175C7.82579 7.56909 8.35133 7.04356 8.99973 7.04356C9.64814 7.04356 10.1737 7.56909 10.1737 8.2175V12.9133ZM8.97899 6.21084C8.3028 6.21084 7.85201 5.73188 7.8661 5.1406C7.85201 4.52076 8.3028 4.05628 8.99269 4.05628C9.68296 4.05628 10.1197 4.52116 10.1341 5.1406C10.1338 5.73188 9.68335 6.21084 8.97899 6.21084Z" fill="#FFB700"/>
                                            </svg>
                                            <div className="info-icon__text">
                                                {ReactHtmlParser(tariffs[index + 1].text)}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tariff-variant__description">
                                        {tariffs[index + 1].tariff_loading ?
                                            <Loader type="Puff" color={(tariff.id === state.selected_tariff) || (tariffs[index + 1].id === state.selected_tariff) ? "#FFFFFF" : "#FFB700"} height={20} width={20}/>
                                            : <>
                                                <div className="tariff-variant__text">{tariffs[index + 1].cost} р</div>
                                                <label className="tariff-variant__check check-wrap">
                                                    {tariffs[index + 1].id === state.selected_tariff ?
                                                        <input key={1} type="checkbox" checked onChange={() => {
                                                        }} className="check-wrap__input"/> :
                                                        <input key={2} type="checkbox" onChange={() => {
                                                        }} className="check-wrap__input"/>}
                                                    <span className="check-wrap__mark"></span>
                                                </label>
                                            </>}
                                    </div>
                                </div>
                            </div>
                        );
                    }
                })}
            </div>
            <div className="tariff__info">
                <div className="tariff__info-heading">Служебная информация</div>
                <div className="tariff__info-text">{state.selected_tariff ? selectedTariffObject.service_information : ''}</div>
            </div>
            <InView as="div" className="tariff__chosen" onChange={(inView, entry) => setView(inView)}>
                {state.selected_tariff ?
                    <div className="tariff__chosen-info">
                        <div className="chosen__heading">{selectedTariffObject.name}</div>
                        {selectedTariffObject.tariff_loading ?
                            <div className="chosen__table chosen__table--loading"><Loader type="Puff" color="#ADADAD" height={80} width={80}/></div>
                            : <table className="chosen__table">
                                <tbody>
                                <tr className="chosen__row">
                                    <td className="chosen__col">
                                        <span className="chosen__name">Тариф "{selectedTariffObject.name}"</span>
                                    </td>
                                    <td className="chosen__col">
                                        <span className="chosen__name">{selectedTariffObject.rate}, стоим. часа</span> <span className="chosen__value">{selectedTariffObject.cost_by_hour} р.с.ндс</span>
                                    </td>
                                </tr>
                                <tr className="chosen__row">
                                    <td className="chosen__col">
                                        <span className="chosen__name">Мин., время</span>
                                    </td>
                                    <td className="chosen__col">
                                        <span className="chosen__name">{selectedTariffObject.min_hours} часов | стоимость</span> <span className="chosen__value">{selectedTariffObject.min_cost} р.с.ндс</span>
                                    </td>
                                </tr>
                                <tr className="chosen__row">
                                    <td className="chosen__col">
                                        <span className="chosen__name">Планируемое время</span>
                                    </td>
                                    <td className="chosen__col">
                                        <span className="chosen__name">{selectedTariffObject.hours} | стоимость</span> <span className="chosen__value">{selectedTariffObject.cost} р.с.ндс</span>
                                    </td>
                                </tr>
                                </tbody>
                            </table>}
                        {(selectedTariffObject.items && selectedTariffObject.items.length > 0) ? <>
                            <div className="chosen__heading">Дополнительные услуги</div>
                            {selectedTariffObject.tariff_loading ?
                                <div className="chosen__table chosen__table--loading"><Loader type="Puff" color="#ADADAD" height={80} width={80}/></div>
                                : <table className="chosen__table">
                                    <tbody>
                                    {selectedTariffObject.items.map((item, index) => {
                                        return (
                                            <tr key={index} className="chosen__row">
                                                <td className="chosen__col">
                                                    <span className="chosen__name">{item.name}</span>
                                                </td>
                                                <td className="chosen__col">
                                                    <span className="chosen__value">{item.cost} р</span>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                    </tbody>
                                </table>}
                        </> : null}
                        {(selectedTariffObject.items_by_route && selectedTariffObject.items_by_route.length > 0) ? <>
                            <div className="chosen__heading">По маршрту</div>
                            {selectedTariffObject.tariff_loading ?
                                <div className="chosen__table chosen__table--loading"><Loader type="Puff" color="#ADADAD" height={80} width={80}/></div>
                                : <table className="chosen__table">
                                    {selectedTariffObject.items_by_route.map((item, index) => {
                                        return (
                                            <tr key={index} className="chosen__row">
                                                <td className="chosen__col">
                                                    <span className="chosen__name">{item.name}</span>
                                                </td>
                                                <td className="chosen__col">
                                                    <span className="chosen__value">{item.cost} р</span>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </table>}
                        </> : null}
                    </div> : null}
                <div className="tariff__map-tabs map-tabs">
                    <div className="map-tabs__heading">
                        <div className="map-tabs__text">Вариант карт:</div>
                        <div className="map-tabs__links">
                            <div onClick={() => setMapType(true)} className={"map-tabs__link" + (state.yandex_map ? " map-tabs__link_active" : "")}>Yandex</div>
                            <div onClick={() => setMapType(false)} className={"map-tabs__link" + (!state.yandex_map ? " map-tabs__link_active" : "")}>OSRM</div>
                        </div>
                    </div>
                    <div className="map-tabs__body">
                        <div className={"map-tabs__item tariff__map" + (state.yandex_map ? " map-tabs__item_active" : "")}><YandexMap/></div>
                        <div className={"map-tabs__item tariff__map" + (!state.yandex_map ? " map-tabs__item_active" : "")}><LeafletMap/></div>
                    </div>
                </div>
            </InView>
        </section>
    );
}

export default Tariff;