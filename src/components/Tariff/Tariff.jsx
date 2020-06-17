import React from "react";
import MapContainer from "../Map/MapContainer";
import {InView} from "react-intersection-observer";

const Tariff = ({tariffTypes, selectedTariff, setTariff, loadTariff}) => {
    let selectedTariffObject;
    if (selectedTariff) {
        selectedTariffObject = tariffTypes.find(tariff => tariff.id === selectedTariff);
    }
    return (
        <InView as="section" onChange={(inView => loadTariff(inView))} className="checkout__tariff tariff">
            <div className="checkout__title tariff__heading">Выбор тарифа и детализация</div>
            <div className="tariff__variants">
                <div onClick={() => setTariff(tariffTypes[0].id)} className={"tariff__variant tariff-variant" + (tariffTypes[0].id === selectedTariff ? ' tariff-variant_active' : '')}>
                    <div className="tariff-variant__item">
                        <div className="tariff-variant__heading">
                            {tariffTypes[0].name} - {tariffTypes[0].min_cost} р
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.3644 2.63581C11.8497 -0.87857 6.15097 -0.878962 2.63581 2.63581C-0.878962 6.15058 -0.87857 11.8493 2.63581 15.3644C6.15058 18.8784 11.8493 18.8788 15.3644 15.3644C18.8788 11.8493 18.8784 6.15097 15.3644 2.63581ZM10.1737 12.9133C10.1737 13.5617 9.64814 14.0872 8.99973 14.0872C8.35133 14.0872 7.82579 13.5617 7.82579 12.9133V8.2175C7.82579 7.56909 8.35133 7.04356 8.99973 7.04356C9.64814 7.04356 10.1737 7.56909 10.1737 8.2175V12.9133ZM8.97899 6.21084C8.3028 6.21084 7.85201 5.73188 7.8661 5.1406C7.85201 4.52076 8.3028 4.05628 8.99269 4.05628C9.68296 4.05628 10.1197 4.52116 10.1341 5.1406C10.1338 5.73188 9.68335 6.21084 8.97899 6.21084Z" fill="#FFB700"/>
                            </svg>
                        </div>
                        <div className="tariff-variant__description">
                            <div className="tariff-variant__text">
                                Планир. {tariffTypes[0].cost} р ({tariffTypes[0].cost_by_hour} р / час, {tariffTypes[0].rate.split(/\+|\(/)[1]} часов работы + {tariffTypes[0].rate.split(/\+|\(|\)/)[2]} час подачи)
                            </div>
                            <label className="tariff-variant__check check-wrap">
                                {tariffTypes[0].id === selectedTariff ?
                                    <input type="checkbox" checked className="check-wrap__input"/> :
                                    <input type="checkbox" className="check-wrap__input"/>}
                                <span className="check-wrap__mark"></span>
                            </label>
                        </div>
                    </div>
                </div>
                <div className={"tariff__variant tariff-variant" + (((tariffTypes[1].id === selectedTariff) || (tariffTypes[2].id === selectedTariff)) ? ' tariff-variant_active' : '')}>
                    <div onClick={() => setTariff(tariffTypes[1].id)} className="tariff-variant__item">
                        <div className="tariff-variant__heading">
                            {tariffTypes[1].name} -
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.3644 2.63581C11.8497 -0.87857 6.15097 -0.878962 2.63581 2.63581C-0.878962 6.15058 -0.87857 11.8493 2.63581 15.3644C6.15058 18.8784 11.8493 18.8788 15.3644 15.3644C18.8788 11.8493 18.8784 6.15097 15.3644 2.63581ZM10.1737 12.9133C10.1737 13.5617 9.64814 14.0872 8.99973 14.0872C8.35133 14.0872 7.82579 13.5617 7.82579 12.9133V8.2175C7.82579 7.56909 8.35133 7.04356 8.99973 7.04356C9.64814 7.04356 10.1737 7.56909 10.1737 8.2175V12.9133ZM8.97899 6.21084C8.3028 6.21084 7.85201 5.73188 7.8661 5.1406C7.85201 4.52076 8.3028 4.05628 8.99269 4.05628C9.68296 4.05628 10.1197 4.52116 10.1341 5.1406C10.1338 5.73188 9.68335 6.21084 8.97899 6.21084Z" fill="#FFB700"/>
                            </svg>
                        </div>
                        <div className="tariff-variant__description">
                            <div className="tariff-variant__text">{tariffTypes[1].cost} р</div>
                            <label className="tariff-variant__check check-wrap">
                                {tariffTypes[1].id === selectedTariff ?
                                    <input type="checkbox" name="payment" checked className="check-wrap__input"/> :
                                    <input type="checkbox" name="payment" className="check-wrap__input"/>}
                                <span className="check-wrap__mark"></span>
                            </label>
                        </div>
                    </div>
                    <div onClick={() => setTariff(tariffTypes[2].id)} className="tariff-variant__item">
                        <div className="tariff-variant__heading">
                            {tariffTypes[2].name} -
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.3644 2.63581C11.8497 -0.87857 6.15097 -0.878962 2.63581 2.63581C-0.878962 6.15058 -0.87857 11.8493 2.63581 15.3644C6.15058 18.8784 11.8493 18.8788 15.3644 15.3644C18.8788 11.8493 18.8784 6.15097 15.3644 2.63581ZM10.1737 12.9133C10.1737 13.5617 9.64814 14.0872 8.99973 14.0872C8.35133 14.0872 7.82579 13.5617 7.82579 12.9133V8.2175C7.82579 7.56909 8.35133 7.04356 8.99973 7.04356C9.64814 7.04356 10.1737 7.56909 10.1737 8.2175V12.9133ZM8.97899 6.21084C8.3028 6.21084 7.85201 5.73188 7.8661 5.1406C7.85201 4.52076 8.3028 4.05628 8.99269 4.05628C9.68296 4.05628 10.1197 4.52116 10.1341 5.1406C10.1338 5.73188 9.68335 6.21084 8.97899 6.21084Z" fill="#FFB700"/>
                            </svg>
                        </div>
                        <div className="tariff-variant__description">
                            <div className="tariff-variant__text">{tariffTypes[2].cost} р</div>
                            <label className="tariff-variant__check check-wrap">
                                {tariffTypes[2].id === selectedTariff ?
                                    <input type="checkbox" checked name="payment" className="check-wrap__input"/> :
                                    <input type="checkbox" name="payment" className="check-wrap__input"/>}
                                <span className="check-wrap__mark"></span>
                            </label>
                        </div>
                    </div>
                </div>
                <div onClick={() => setTariff(tariffTypes[3].id)} className={"tariff__variant tariff-variant" + (tariffTypes[3].id === selectedTariff ? ' tariff-variant_active' : '')}>
                    <div className="tariff-variant__item">
                        <div className="tariff-variant__heading">
                            {tariffTypes[3].name} - {tariffTypes[3].cost} р
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.3644 2.63581C11.8497 -0.87857 6.15097 -0.878962 2.63581 2.63581C-0.878962 6.15058 -0.87857 11.8493 2.63581 15.3644C6.15058 18.8784 11.8493 18.8788 15.3644 15.3644C18.8788 11.8493 18.8784 6.15097 15.3644 2.63581ZM10.1737 12.9133C10.1737 13.5617 9.64814 14.0872 8.99973 14.0872C8.35133 14.0872 7.82579 13.5617 7.82579 12.9133V8.2175C7.82579 7.56909 8.35133 7.04356 8.99973 7.04356C9.64814 7.04356 10.1737 7.56909 10.1737 8.2175V12.9133ZM8.97899 6.21084C8.3028 6.21084 7.85201 5.73188 7.8661 5.1406C7.85201 4.52076 8.3028 4.05628 8.99269 4.05628C9.68296 4.05628 10.1197 4.52116 10.1341 5.1406C10.1338 5.73188 9.68335 6.21084 8.97899 6.21084Z" fill="#FFB700"/>
                            </svg>
                        </div>
                        <div className="tariff-variant__description">
                            <div className="tariff-variant__text">{tariffTypes[3].cost} р</div>
                            <label className="tariff-variant__check check-wrap">
                                {tariffTypes[3].id === selectedTariff ?
                                    <input type="checkbox" name="payment" checked className="check-wrap__input"/> :
                                    <input type="checkbox" name="payment" className="check-wrap__input"/>}
                                <span className="check-wrap__mark"></span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tariff__info">
                <div className="tariff__info-heading">Служебная информация</div>
                <div className="tariff__info-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</div>
            </div>
            <div className="tariff__chosen">
                {selectedTariff ?
                    <div className="tariff__chosen-info">
                        <div className="chosen__heading">{selectedTariffObject.name}</div>
                        <table className="chosen__table">
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
                            {/*<tr className="chosen__row">*/}
                            {/*    <td className="chosen__col">*/}
                            {/*        <span className="chosen__name">Грузчик 1</span>*/}
                            {/*    </td>*/}
                            {/*    <td className="chosen__col">*/}
                            {/*        <span className="chosen__name">4+1 стоим., часа</span> <span className="chosen__value">35 р</span>*/}
                            {/*    </td>*/}
                            {/*</tr>*/}
                            </tbody>
                        </table>
                        <div className="chosen__heading">Дополнительные услуги</div>
                        <table className="chosen__table">
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
                        </table>
                        {/*<div className="chosen__heading">По маршрту</div>*/}
                        {/*<table className="chosen__table">*/}
                        {/*    <tr className="chosen__row">*/}
                        {/*        <td className="chosen__col">*/}
                        {/*            <span className="chosen__name">Пропуск ттк</span>*/}
                        {/*        </td>*/}
                        {/*        <td className="chosen__col">*/}
                        {/*            <span className="chosen__value">100р</span>*/}
                        {/*        </td>*/}
                        {/*    </tr>*/}
                        {/*    <tr className="chosen__row">*/}
                        {/*        <td className="chosen__col">*/}
                        {/*            <span className="chosen__name">Пробег ТС свыше 100км</span>*/}
                        {/*        </td>*/}
                        {/*        <td className="chosen__col">*/}
                        {/*            <span className="chosen__value">400р</span>*/}
                        {/*        </td>*/}
                        {/*    </tr>*/}
                        {/*    <tr className="chosen__row">*/}
                        {/*        <td className="chosen__col">*/}
                        {/*            <span className="chosen__name">пробег за мкад</span>*/}
                        {/*        </td>*/}
                        {/*        <td className="chosen__col">*/}
                        {/*            <span className="chosen__value">200р</span>*/}
                        {/*        </td>*/}
                        {/*    </tr>*/}
                        {/*</table>*/}
                    </div> : null}
                <MapContainer/>
            </div>
        </InView>
    );
}

export default Tariff;