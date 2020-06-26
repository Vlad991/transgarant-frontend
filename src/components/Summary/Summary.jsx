import React from "react";

const Summary = ({categories, activeCategory, bodyOptionCh, bodyOptions, activeBodyOption, additional, dateFrom, dateTo, points}) => {
    return (
        <div className="checkout__summary summary">
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
                <div className="summary__item">
                    {points.map(point => {
                        return (
                            <>
                            <div className="summary__item-heading">{point.name} &nbsp; {point.values.map(value => value.selected ? (value.name + ', ') : '')}</div>
                            <div className="summary__item-desc">[{point.address}, {point.company}, {point.contact_name}, {point.number}]</div>
                            </>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default Summary;