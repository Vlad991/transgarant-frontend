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
                     bodyOptionCharacteristicValues,
                     activeBodyOptionCharacteristicValues,
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
                        {activeBodyType === 0 ?
                            <CollapseContainer elementClass="car-body__variant-card"
                                               selected={bodyOptions.find(bodyOption => bodyOption.id === activeBodyOption)}
                                               items={bodyOptions.filter(bodyOption => bodyOption.body_type_id === activeBodyType)}
                                               setItem={setBodyOption}/> :
                            bodyOptions.length > 0 ? <div className="car-body__variant-card collapse collapse_disabled">{bodyOptions.find(bodyOption => bodyOption.id === activeBodyOption).name}</div> : null}
                    </div>
                </div>
                <div className="car-body__col check-block">
                    {bodyOptionCharacteristics.map(bodyOptionCh => {
                        if (bodyOptionCh.body_option_id === activeBodyOption) {
                            if (bodyOptionCh.type !== 'ref') {
                                return activeBodyOptionCharacteristicValues.find(bodyOptionChVal => bodyOptionChVal && (bodyOptionChVal.body_option_characteristics_id === bodyOptionCh.id)) && activeBodyOptionCharacteristicValues.find(bodyOptionChVal => bodyOptionChVal && (bodyOptionChVal.body_option_characteristics_id === bodyOptionCh.id)).value ?
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
                                                               name: bodyOptionCh.name + ": " + (activeBodyOptionCharacteristicValues.find(bodyOptionChVal => bodyOptionChVal && (bodyOptionChVal.body_option_characteristics_id === bodyOptionCh.id)) ? activeBodyOptionCharacteristicValues.find(bodyOptionChVal => bodyOptionChVal && (bodyOptionChVal.body_option_characteristics_id === bodyOptionCh.id)) : {name: ''}).name,
                                                               id: (activeBodyOptionCharacteristicValues.find(bodyOptionChVal => bodyOptionChVal && (bodyOptionChVal.body_option_characteristics_id === bodyOptionCh.id)) ? activeBodyOptionCharacteristicValues.find(bodyOptionChVal => bodyOptionChVal && (bodyOptionChVal.body_option_characteristics_id === bodyOptionCh.id)) : {}).id
                                                           }}
                                                           items={bodyOptionCharacteristicValues.filter(bodyOptionChVal => bodyOptionChVal.body_option_characteristics_id === bodyOptionCh.id)}
                                                           setItem={(id) => setBodyOptionChVal(bodyOptionCh.id, id)}/>
                                        <input type="checkbox" className="check-wrap__input"/>
                                        <span className="check-wrap__mark"></span>
                                    </label>
                                )
                            }
                        } else {
                            return null;
                        }
                    })}
                </div>
            </div>
        </section>
    );
}

export default CarBody;