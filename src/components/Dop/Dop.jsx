import React from "react";

const Dop = ({active, toggle, additionalRequirements, selectedAdditional, toggleAdditional}) => {
    return (
        <section className="checkout__dop dop checkout__title">
            <div className="dop__title">ОБЩИЕ ДОП</div>
            <div onClick={(e) => toggle(e)} className={"dop__check-items collapse" + (active ? ' collapse_active' : '')}>
                <div className="collapse__selected">УСЛУГИ К ЗАЯВКЕ: {selectedAdditional.map(selected => selected.name + ', ')}</div>
                <div onClick={(e) => e.stopPropagation()} className="collapse__items">
                    {additionalRequirements.map(item => {
                        return (
                            <label key={item.id} onClick={(e) => toggleAdditional(e, item.id)} className="dop__check check-wrap">
                                {item.name}
                                {selectedAdditional.find(selected => selected.id === item.id) ?
                                    <input type="checkbox" checked className="check-wrap__input"/>:
                                    <input type="checkbox" className="check-wrap__input"/>}
                                <span className="check-wrap__mark"></span>
                            </label>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}

export default Dop;