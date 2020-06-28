import React from "react";

const Summary = ({
                     showSummary,
                     toggleSummary,
                     tariffTypes,
                     selectedTariff,
                     categories,
                     activeCategory,
                     bodyOptionCh,
                     bodyOptions,
                     activeBodyOption,
                     additional,
                     dateFrom,
                     dateTo,
                     points,
                     docReturn,
                     lastPoint,
                     cargoName,
                     totalWeight,
                     totalVolume,
                     totalArea,
                     places,
                     packages,
                     pallets,
                     clientName,
                     clientNumber,
                     clientEmail
                 }) => {
    return (
        <div className="checkout__summary summary">
            <div className="summary__wrap-heading">
                <div className="summary__show-button" onClick={toggleSummary}>{showSummary ? 'Скрыть' : 'Показать подробно'}</div>
                <div className="summary__result-wrap">
                    <div className="summary__result-button">Итого: {tariffTypes.find(tariff => tariff.id === selectedTariff).cost} р.</div>
                    <div className="summary__checkout-button">Оформить</div>
                </div>
            </div>
            <div className={"summary__payload" + (showSummary ? " summary__payload_active" : "")}>
                <div className="summary__heading">
                    <div className="summary__print link">Распечатать расчет</div>
                    <div className="summary__save">Сохранить</div>
                </div>
                <div className="summary__items">
                    <div className="summary__item">
                        <div className="summary__item-heading">{categories.find(category => category.id === activeCategory).name} {bodyOptions.find(type => type.id === activeBodyOption) ? bodyOptions.find(type => type.id === activeBodyOption).name : null}</div>
                        <div className="summary__item-desc">
                            {bodyOptionCh.map(item => {
                                if (item.type === 'ref') {
                                    let selected = item.values.find(value => value.selected);
                                    if (selected) {
                                        return item.name + ': ' + selected.name + ', '
                                    }
                                } else {
                                    if (item.value) {
                                        return item.name + ', ';
                                    }
                                }
                                return '';
                            })}
                        </div>
                    </div>
                    {additional.find(item => item.selected) ?
                        <div className="summary__item">
                            <div className="summary__item-desc">{additional.map(item => (item.selected ? (item.name + ', ') : ''))}</div>
                        </div> : null}
                    <div className="summary__item">
                        <div className="summary__item-desc">
                            {(((dateFrom.getDate()) > 9) ? dateFrom.getDate() : '0' + dateFrom.getDate()) + '.' + (((dateFrom.getMonth()) > 9) ? dateFrom.getMonth() : '0' + dateFrom.getMonth()) + '.' + dateFrom.getFullYear()}
                            &nbsp; с &nbsp;
                            {(((dateFrom.getHours()) > 9) ? dateFrom.getHours() : '0' + dateFrom.getHours()) + ':' + (((dateFrom.getMinutes()) > 9) ? dateFrom.getMinutes() : '0' + dateFrom.getMinutes())}
                            &nbsp; до &nbsp;
                            {(((dateTo.getHours()) > 9) ? dateTo.getHours() : '0' + dateTo.getHours()) + ':' + (((dateTo.getMinutes()) > 9) ? dateTo.getMinutes() : '0' + dateTo.getMinutes())}
                        </div>
                    </div>
                    {(points && (points.length > 0)) || (docReturn) ? <div className="summary__item">
                        {points.map(point => {
                            return (
                                <>
                                    <div className="summary__item-heading">{point.name} &nbsp; {point.values.map(value => value.selected ? (value.name + ', ') : '')}</div>
                                    <div className="summary__item-desc">[{point.address}, {point.company}, {point.contact_name}, {point.number}]</div>
                                </>
                            )
                        })}
                        <div className="summary__item-heading">Точка {points.length + 1} &nbsp; Получ док</div>
                        <div className="summary__item-desc">[{lastPoint.address}, {lastPoint.fullName}, {lastPoint.phone}]</div>
                    </div> : null}
                    <div className="summary__item">
                        <div className="summary__item-heading">{cargoName ? cargoName : 'Груз'}</div>
                        <div className="summary__item-desc">
                            {totalWeight} кг, {totalVolume} куб, {totalArea} м2
                        </div>
                        {places && (places.length > 0) ?
                            <div className="summary__item-desc">Машино место {places.length}</div> : null}
                        {pallets && (pallets.length > 0) ?
                            <div className="summary__item-desc">Паллеты {pallets.length}</div> : null}
                        {packages && (packages.length > 0) ?
                            <div className="summary__item-desc">Упаковки {packages.length}</div> : null}
                    </div>
                    <div className="summary__item">
                        <div className="summary__item-heading">{tariffTypes.find(tariff => tariff.id === selectedTariff).name}</div>
                        <div className="summary__item-desc">
                            <div className="summary__price">
                                <div className="summary__price-name">Планируемая стоимость</div>
                                <div className="summary__price-value">{tariffTypes.find(tariff => tariff.id === selectedTariff).cost}р</div>
                            </div>
                            {tariffTypes.find(tariff => tariff.id === selectedTariff).items.map(item => {
                                return (
                                    <div className="summary__price">
                                        <div className="summary__price-name">{item.name}</div>
                                        <div className="summary__price-value">{item.cost}р</div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="summary__item-desc" style={{marginTop: '15px'}}>
                        {clientName} &nbsp;
                        {clientNumber} &nbsp;
                        {clientEmail}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Summary;