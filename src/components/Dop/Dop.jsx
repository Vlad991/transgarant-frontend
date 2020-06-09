import React from "react";

const Dop = ({active, toggle, additionalRequirements}) => {
    return (
        <section className="checkout__dop dop checkout__title">
            <div className="dop__title">ОБЩИЕ ДОП</div>
            <div onClick={(e) => toggle(e)} className={"dop__check-items collapse" + (active ? ' collapse_active' : '')}>
                <div className="collapse__selected">УСЛУГИ К ЗАЯВКЕ</div>
                <div onClick={(e) => e.stopPropagation()} className="collapse__items">
                    {additionalRequirements.map(item => {
                        return (
                            <label className="dop__check check-wrap">
                                {item.name}
                                <input type="checkbox" className="check-wrap__input"/>
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