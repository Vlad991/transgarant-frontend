import React from "react";
import LeafletMap from "../LeafletMap/LeafletMap";

const Tariff = ({state, setTariff}) => {
    let selectedTariffObject;
    if (state.selected_tariff) {
        selectedTariffObject = state.tariff_types.find(tariff => tariff.id === state.selected_tariff);
    }
    return (
        <section className="checkout__tariff tariff">
            <div className="checkout__title tariff__heading">ВЫБОР ТАРИФА И ДЕТАЛИЗАЦИЯ ЗАКАЗА</div>
            <div className="tariff__variants">
                <div className={"tariff__variant tariff-variant" + ((state.tariff_types[0].id === state.selected_tariff) || (state.tariff_types[1].id === state.selected_tariff) ? ' tariff-variant_active' : '')}>
                    <div onClick={() => setTariff(state.tariff_types[0].id)} className="tariff-variant__item">
                        <div className="tariff-variant__heading">
                            {state.tariff_types[0].name}
                            <div className="tariff__info-icon info-icon">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.3644 2.63581C11.8497 -0.87857 6.15097 -0.878962 2.63581 2.63581C-0.878962 6.15058 -0.87857 11.8493 2.63581 15.3644C6.15058 18.8784 11.8493 18.8788 15.3644 15.3644C18.8788 11.8493 18.8784 6.15097 15.3644 2.63581ZM10.1737 12.9133C10.1737 13.5617 9.64814 14.0872 8.99973 14.0872C8.35133 14.0872 7.82579 13.5617 7.82579 12.9133V8.2175C7.82579 7.56909 8.35133 7.04356 8.99973 7.04356C9.64814 7.04356 10.1737 7.56909 10.1737 8.2175V12.9133ZM8.97899 6.21084C8.3028 6.21084 7.85201 5.73188 7.8661 5.1406C7.85201 4.52076 8.3028 4.05628 8.99269 4.05628C9.68296 4.05628 10.1197 4.52116 10.1341 5.1406C10.1338 5.73188 9.68335 6.21084 8.97899 6.21084Z" fill="#FFB700"/>
                                </svg>
                                <div className="info-icon__text">
                                    <a href="https://docs.google.com/document/d/1qm0OF9PcSZZcGHvP0e_hkHf7NqI9VGN67PbCKFohpgg/­edit">Условия работы и договор >></a>
                                </div>
                            </div>
                        </div>
                        <div className="tariff-variant__description">
                            <div className="tariff-variant__text">{state.tariff_types[0].cost} р</div>
                            <label className="tariff-variant__check check-wrap">
                                {state.tariff_types[0].id === state.selected_tariff ?
                                    <input key={1} type="checkbox" checked onChange={() => {}} className="check-wrap__input"/> :
                                    <input key={2} type="checkbox" onChange={() => {}} className="check-wrap__input"/>}
                                <span className="check-wrap__mark"></span>
                            </label>
                        </div>
                    </div>
                    <div onClick={() => setTariff(state.tariff_types[1].id)} className="tariff-variant__item">
                        <div className="tariff-variant__heading">
                            {state.tariff_types[1].name}
                            <div className="tariff__info-icon info-icon">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.3644 2.63581C11.8497 -0.87857 6.15097 -0.878962 2.63581 2.63581C-0.878962 6.15058 -0.87857 11.8493 2.63581 15.3644C6.15058 18.8784 11.8493 18.8788 15.3644 15.3644C18.8788 11.8493 18.8784 6.15097 15.3644 2.63581ZM10.1737 12.9133C10.1737 13.5617 9.64814 14.0872 8.99973 14.0872C8.35133 14.0872 7.82579 13.5617 7.82579 12.9133V8.2175C7.82579 7.56909 8.35133 7.04356 8.99973 7.04356C9.64814 7.04356 10.1737 7.56909 10.1737 8.2175V12.9133ZM8.97899 6.21084C8.3028 6.21084 7.85201 5.73188 7.8661 5.1406C7.85201 4.52076 8.3028 4.05628 8.99269 4.05628C9.68296 4.05628 10.1197 4.52116 10.1341 5.1406C10.1338 5.73188 9.68335 6.21084 8.97899 6.21084Z" fill="#FFB700"/>
                                </svg>
                                <div className="info-icon__text">
                                    Скидка с 13:00 до 17:00*<br/>
                                    *время предоставления скидки может изменяться<br/>
                                    <a href="https://docs.google.com/document/d/1qm0OF9PcSZZcGHvP0e_hkHf7NqI9VGN67PbCKFohpgg/­edit">Условия работы и договор >></a>
                                </div>
                            </div>
                        </div>
                        <div className="tariff-variant__description">
                            <div className="tariff-variant__text">{state.tariff_types[1].cost} р</div>
                            <label className="tariff-variant__check check-wrap">
                                {state.tariff_types[1].id === state.selected_tariff ?
                                    <input key={1} type="checkbox" checked onChange={() => {}} className="check-wrap__input"/> :
                                    <input key={2} type="checkbox" onChange={() => {}} className="check-wrap__input"/>}
                                <span className="check-wrap__mark"></span>
                            </label>
                        </div>
                    </div>
                </div>
                <div className={"tariff__variant tariff-variant" + (((state.tariff_types[2].id === state.selected_tariff) || (state.tariff_types[3].id === state.selected_tariff)) ? ' tariff-variant_active' : '')}>
                    <div onClick={() => setTariff(state.tariff_types[2].id)} className="tariff-variant__item">
                        <div className="tariff-variant__heading">
                            {state.tariff_types[2].name}
                            <div className="tariff__info-icon info-icon">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.3644 2.63581C11.8497 -0.87857 6.15097 -0.878962 2.63581 2.63581C-0.878962 6.15058 -0.87857 11.8493 2.63581 15.3644C6.15058 18.8784 11.8493 18.8788 15.3644 15.3644C18.8788 11.8493 18.8784 6.15097 15.3644 2.63581ZM10.1737 12.9133C10.1737 13.5617 9.64814 14.0872 8.99973 14.0872C8.35133 14.0872 7.82579 13.5617 7.82579 12.9133V8.2175C7.82579 7.56909 8.35133 7.04356 8.99973 7.04356C9.64814 7.04356 10.1737 7.56909 10.1737 8.2175V12.9133ZM8.97899 6.21084C8.3028 6.21084 7.85201 5.73188 7.8661 5.1406C7.85201 4.52076 8.3028 4.05628 8.99269 4.05628C9.68296 4.05628 10.1197 4.52116 10.1341 5.1406C10.1338 5.73188 9.68335 6.21084 8.97899 6.21084Z" fill="#FFB700"/>
                                </svg>
                                <div className="info-icon__text">
                                    <a href="https://docs.google.com/document/d/1M_ELBNRtw9gd_e_OOpgKgeJWKHXTlAxQmbWitvONxcw/­edit">Условия работы и договор >></a>
                                </div>
                            </div>
                        </div>
                        <div className="tariff-variant__description">
                            <div className="tariff-variant__text">{state.tariff_types[2].cost} р</div>
                            <label className="tariff-variant__check check-wrap">
                                {state.tariff_types[2].id === state.selected_tariff ?
                                    <input key={1} type="checkbox" name="payment" checked onChange={() => {}} className="check-wrap__input"/> :
                                    <input key={2} type="checkbox" name="payment" onChange={() => {}} className="check-wrap__input"/>}
                                <span className="check-wrap__mark"></span>
                            </label>
                        </div>
                    </div>
                    <div onClick={() => setTariff(state.tariff_types[3].id)} className="tariff-variant__item">
                        <div className="tariff-variant__heading">
                            {state.tariff_types[3].name}
                            <div className="tariff__info-icon info-icon">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.3644 2.63581C11.8497 -0.87857 6.15097 -0.878962 2.63581 2.63581C-0.878962 6.15058 -0.87857 11.8493 2.63581 15.3644C6.15058 18.8784 11.8493 18.8788 15.3644 15.3644C18.8788 11.8493 18.8784 6.15097 15.3644 2.63581ZM10.1737 12.9133C10.1737 13.5617 9.64814 14.0872 8.99973 14.0872C8.35133 14.0872 7.82579 13.5617 7.82579 12.9133V8.2175C7.82579 7.56909 8.35133 7.04356 8.99973 7.04356C9.64814 7.04356 10.1737 7.56909 10.1737 8.2175V12.9133ZM8.97899 6.21084C8.3028 6.21084 7.85201 5.73188 7.8661 5.1406C7.85201 4.52076 8.3028 4.05628 8.99269 4.05628C9.68296 4.05628 10.1197 4.52116 10.1341 5.1406C10.1338 5.73188 9.68335 6.21084 8.97899 6.21084Z" fill="#FFB700"/>
                                </svg>
                                <div className="info-icon__text">
                                    Скидка с 13:00 до 17:00*<br/>
                                    *время предоставления скидки может изменяться<br/>
                                    Условия работы и договор >><br/>
                                    <a href="https://docs.google.com/document/d/1M_ELBNRtw9gd_e_OOpgKgeJWKHXTlAxQmbWitvONxcw/­edit">Условия работы и договор >></a>
                                </div>
                            </div>
                        </div>
                        <div className="tariff-variant__description">
                            <div className="tariff-variant__text">{state.tariff_types[3].cost} р</div>
                            <label className="tariff-variant__check check-wrap">
                                {state.tariff_types[3].id === state.selected_tariff ?
                                    <input key={1} type="checkbox" checked onChange={() => {}} name="payment" className="check-wrap__input"/> :
                                    <input key={2} type="checkbox" onChange={() => {}} name="payment" className="check-wrap__input"/>}
                                <span className="check-wrap__mark"></span>
                            </label>
                        </div>
                    </div>
                </div>
                <div onClick={() => setTariff(state.tariff_types[4].id)} className={"tariff__variant tariff-variant" + (state.tariff_types[4].id === state.selected_tariff ? ' tariff-variant_active' : '')}>
                    <div className="tariff-variant__item">
                        <div className="tariff-variant__heading">
                            {state.tariff_types[4].name}
                            <div className="tariff__info-icon info-icon">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.3644 2.63581C11.8497 -0.87857 6.15097 -0.878962 2.63581 2.63581C-0.878962 6.15058 -0.87857 11.8493 2.63581 15.3644C6.15058 18.8784 11.8493 18.8788 15.3644 15.3644C18.8788 11.8493 18.8784 6.15097 15.3644 2.63581ZM10.1737 12.9133C10.1737 13.5617 9.64814 14.0872 8.99973 14.0872C8.35133 14.0872 7.82579 13.5617 7.82579 12.9133V8.2175C7.82579 7.56909 8.35133 7.04356 8.99973 7.04356C9.64814 7.04356 10.1737 7.56909 10.1737 8.2175V12.9133ZM8.97899 6.21084C8.3028 6.21084 7.85201 5.73188 7.8661 5.1406C7.85201 4.52076 8.3028 4.05628 8.99269 4.05628C9.68296 4.05628 10.1197 4.52116 10.1341 5.1406C10.1338 5.73188 9.68335 6.21084 8.97899 6.21084Z" fill="#FFB700"/>
                                </svg>
                                <div className="info-icon__text">
                                    Перевозка выполняется в конкретный день в течение предлагаемого промежутка времени.<br/>
                                    *время выполнения заказа нефиксированное<br/>
                                    <a href="https://docs.google.com/document/d/19kwRryD9MBkDZmNNklgo2eQHKL2Lj8HGUB5JMnXkY7U/­edit">Условия работы и договор >></a>
                                </div>
                            </div>
                        </div>
                        <div className="tariff-variant__description">
                            <div className="tariff-variant__text">{state.tariff_types[4].cost} р</div>
                            <label className="tariff-variant__check check-wrap">
                                {state.tariff_types[4].id === state.selected_tariff ?
                                    <input key={1} type="checkbox" name="payment" checked onChange={() => {}} className="check-wrap__input"/> :
                                    <input key={2} type="checkbox" name="payment" onChange={() => {}} className="check-wrap__input"/>}
                                <span className="check-wrap__mark"></span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tariff__info">
                <div className="tariff__info-heading">Служебная информация</div>
                <div className="tariff__info-text">{state.selected_tariff ? selectedTariffObject.service_information : ''}</div>
            </div>
            <div className="tariff__chosen">
                {state.selected_tariff ?
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
                        {selectedTariffObject.items_by_route ? <>
                            <div className="chosen__heading">По маршрту</div>
                            <table className="chosen__table">
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
                            </table>
                        </> : null}
                    </div> : null}
                <LeafletMap/>
            </div>
        </section>
    );
}

export default Tariff;