import React from "react";
import CollapseContainer from "../CollapseContainer";

const CarBody = ({
                     bodyTypes,
                     activeBodyType,
                     setActiveBodyType,
                     bodyOptions,
                     activeBodyOption,
                     setBodyOption,
                     bodyOptionCharacteristics,
                     setBodyOptionChVal,
                     markBodyOptionCh
                 }) => {
    return (
        <section className="checkout__car-body car-body">
            <div className="car-body__heading checkout__title">Тип кузова</div>
            <div className="car-body__cols">
                <div className="car-body__col">
                    <div className="car-body__variants">
                        {bodyTypes.map(bodyType => {
                            return (
                                <div key={bodyType.id} className={"car-body__variant-card variant-card" + (bodyType.id === activeBodyType ? ' variant-card_active' : '')} onClick={() => setActiveBodyType(bodyType.id)}>
                                    <div className="variant-card__img"><img src={bodyType.img} alt="Car Body"/></div>
                                    <div className="variant-card__title">{bodyType.name}</div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="car-body__options">
                        {activeBodyType === 0 ?
                            <CollapseContainer elementClass="car-body__variant-card"
                                               selected={bodyOptions.find(bodyOption => bodyOption.id === activeBodyOption)}
                                               items={bodyOptions}
                                               setItem={setBodyOption}/> :
                            <div className="car-body__variant-card collapse collapse_disabled">{bodyOptions.find(bodyOption => bodyOption.id === activeBodyOption).name}</div>}
                    </div>
                </div>
                <div className="car-body__col check-block">
                    {bodyOptionCharacteristics.map(bodyOptionCh => {
                        if (bodyOptionCh.type !== 'ref') {
                            return bodyOptionCh.value ?
                                <label key={bodyOptionCh.id} className="check-block__item check-wrap" onClick={(e) => {
                                    e.preventDefault();
                                    markBodyOptionCh(bodyOptionCh.id, false);
                                }}>
                                    {bodyOptionCh.name}
                                    <input type="checkbox" checked className="check-wrap__input"/>
                                    <span className="check-wrap__mark"></span>
                                </label> :
                                <label key={bodyOptionCh.id} className="check-block__item check-wrap" onClick={(e) => {
                                    e.preventDefault();
                                    markBodyOptionCh(bodyOptionCh.id, true);
                                }}>
                                    {bodyOptionCh.name}
                                    <input type="checkbox" className="check-wrap__input"/>
                                    <span className="check-wrap__mark"></span>
                                </label>
                        } else {
                            return (
                                <label key={bodyOptionCh.id} className="check-block__item check-wrap">
                                    <CollapseContainer small={true}
                                                       selected={{
                                                           name: bodyOptionCh.name + ": " + (bodyOptionCh.values.find(value => value.selected) ? bodyOptionCh.values.find(value => value.selected).name : ''),
                                                           id:  + (bodyOptionCh.values.find(value => value.selected) ? bodyOptionCh.values.find(value => value.selected).id : '')
                                                       }}
                                                       items={bodyOptionCh.values}
                                                       setItem={(id) => setBodyOptionChVal(bodyOptionCh.id, id)}/>
                                    {bodyOptionCh.values.find(value => value.selected) ?
                                        <input type="checkbox" checked onChange={() => setBodyOptionChVal(bodyOptionCh.id, null)} className="check-wrap__input"/>:
                                        <input type="checkbox" onChange={() => setBodyOptionChVal(bodyOptionCh.id, 0)} className="check-wrap__input"/>}
                                    <span className="check-wrap__mark"></span>
                                </label>
                            )
                        }
                    })}
                </div>
            </div>
        </section>
    );
}

export default CarBody;