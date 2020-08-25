import React from "react";

const CarHolder = ({state, setHolderType}) => {
    return (
        <section className="registration__car-holder car-holder">
            <div className="car-holder__tabs">
                <button type="button" onClick={() => setHolderType(0)} className={"car-holder__tab" + (state.holder_type === 0 ? " car-holder__tab--active" : "")}>Владелец нескольких авто</button>
                <button type="button" onClick={() => setHolderType(1)} className={"car-holder__tab" + (state.holder_type === 1 ? " car-holder__tab--active" : "")}>Водитель с личным авто</button>
            </div>
            <div className="car-holder__inputs">
                {state.holder_type === 0 ?
                    <label className="car-holder__input input-wrap">
                        <input type="text" className="input-wrap__input" placeholder="ИНН" value=""/>
                    </label>
                    : <>
                        <label className="car-holder__input input-wrap">
                            <input type="text" className="input-wrap__input" placeholder="ИНН ИП" value=""/>
                        </label>
                        <label className="car-holder__input input-wrap">
                            <input type="text" className="input-wrap__input" placeholder="ИНН САМ" value=""/>
                        </label>
                    </>}
            </div>
        </section>
    );
}

export default CarHolder;