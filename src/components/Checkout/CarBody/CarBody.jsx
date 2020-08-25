import React from "react";
import CollapseContainer from "../../Elements/CollapseContainer";
import Loader from 'react-loader-spinner';

const CarBody = ({
                     state,

                     setActiveBodyType,
                     setBodyOption,
                     setBodyOptionChVal,
                     markBodyOptionCh,
                     toggleOptionCollapse,
                     toggleChCollapse,
                 }) => {
    return (
        <section className="checkout__car-body car-body">
            <div className="car-body__heading checkout__title">Выберите тип кузова транспортного средства</div>
            <div className="car-body__cols">
                <div className="car-body__col">
                    <div className={"car-body__variants" + (state.body_types_loading ? " car-body__variants--loading" : "")}>
                        {state.body_types_loading ?
                            <Loader type="Puff" color="#FFB700" height={60} width={60}/>
                            : state.body_types.map(bodyType => {
                                return (
                                    <div key={bodyType.id} className={"car-body__variant-card variant-card" + (bodyType.id === state.active_body_type ? ' variant-card_active' : '')} onClick={() => setActiveBodyType(bodyType.id)}>
                                        <div className="variant-card__img"><img src={bodyType.img} alt="Car Body"/></div>
                                        <div className="variant-card__title">{bodyType.name}</div>
                                    </div>
                                );
                            })}
                    </div>
                    <div className="car-body__options">
                        {state.body_options_loading ?
                            <div className="car-body__variant-card collapse collapse--loading"><Loader type="Puff" color="#FFB700" height={40} width={40}/></div>
                            : state.active_body_type === 0 ?
                                <CollapseContainer active={state.show_option_collapse}
                                                   toggleCollapse={toggleOptionCollapse}
                                                   elementClass="car-body__variant-card"
                                                   selected={state.body_options.find(bodyOption => bodyOption.id === state.active_body_option)}
                                                   items={state.body_options}
                                                   setItem={setBodyOption}/> :
                                <div className="car-body__variant-card collapse collapse_disabled">{state.body_options.find(bodyOption => bodyOption.id === state.active_body_option).name}</div>}
                    </div>
                </div>
                <div className={"car-body__col check-block" + (state.characteristics_loading ? " check-block--loading" : "")}>
                    {state.characteristics_loading ?
                        <Loader type="Puff" color="#FFB700" height={60} width={60}/>
                        : state.body_option_characteristics.map(bodyOptionCh => {
                            if (bodyOptionCh.type !== 'ref') {
                                return bodyOptionCh.value ?
                                    <label key={bodyOptionCh.id} className="check-block__item check-wrap" onClick={(e) => {
                                        e.preventDefault();
                                        markBodyOptionCh(bodyOptionCh.id, false);
                                    }}>
                                        {bodyOptionCh.name}
                                        <input type="checkbox" checked={true} onChange={() => {}} className="check-wrap__input"/>
                                        <span className="check-wrap__mark"></span>
                                    </label> :
                                    <label key={bodyOptionCh.id} className="check-block__item check-wrap" onClick={(e) => {
                                        e.preventDefault();
                                        markBodyOptionCh(bodyOptionCh.id, true);
                                    }}>
                                        {bodyOptionCh.name}
                                        <input type="checkbox" checked={false} onChange={() => {}}  className="check-wrap__input"/>
                                        <span className="check-wrap__mark"></span>
                                    </label>
                            } else {
                                return (
                                    <label key={bodyOptionCh.id} className="check-block__item check-wrap">
                                        <CollapseContainer active={bodyOptionCh.showCollapse}
                                                           toggleCollapse={(show) => toggleChCollapse(bodyOptionCh.id, show)}
                                                           small={true}
                                                           selected={{
                                                               name: bodyOptionCh.name + ": " + (bodyOptionCh.values.find(value => value.selected) ? bodyOptionCh.values.find(value => value.selected).name : ''),
                                                               id: +(bodyOptionCh.values.find(value => value.selected) ? bodyOptionCh.values.find(value => value.selected).id : '')
                                                           }}
                                                           items={bodyOptionCh.values}
                                                           setItem={(id) => setBodyOptionChVal(bodyOptionCh.id, id)}/>
                                        {bodyOptionCh.values.find(value => value.selected) ?
                                            <input type="checkbox" checked={true} onChange={() => setBodyOptionChVal(bodyOptionCh.id, null)} className="check-wrap__input"/> :
                                            <input type="checkbox" checked={false} onChange={() => setBodyOptionChVal(bodyOptionCh.id, 0)} className="check-wrap__input"/>}
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