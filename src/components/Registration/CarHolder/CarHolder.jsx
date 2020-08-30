import React from "react";
import {token} from "../../../api/dadata-api";
import {PartySuggestions} from "react-dadata";

const CarHolder = ({
                       state,
                       setHolderType,
                       setInn,
                       setInnIe,
                       setInnSam,
                       checkInnThunk
                   }) => {
    return (
        <section className="registration__car-holder car-holder">
            <div className="car-holder__tabs">
                <button type="button" onClick={() => setHolderType(0)} className={"car-holder__tab" + (state.holder_type === 0 ? " car-holder__tab--active" : "")}>Владелец нескольких авто</button>
                <button type="button" onClick={() => setHolderType(1)} className={"car-holder__tab" + (state.holder_type === 1 ? " car-holder__tab--active" : "")}>Водитель с личным авто</button>
            </div>
            <div className="car-holder__inputs">
                {state.holder_type === 0 ?
                    <PartySuggestions token={token}
                                      value={state.inn}
                                      onChange={setInn}
                                      count={5}
                                      containerClassName={"car-holder__input input-wrap input-wrap_address"}
                                      inputProps={{className: 'input-wrap__input', placeholder: 'ИНН'}}/>
                    : <>
                        <PartySuggestions token={token}
                                          value={state.inn_ie}
                                          onChange={setInnIe}
                                          count={5}
                                          containerClassName={"car-holder__input input-wrap input-wrap_address"}
                                          inputProps={{className: 'input-wrap__input', placeholder: 'ИНН ИП'}}/>
                        <label key="sam" className="car-holder__input input-wrap">
                            <input type="text" value={state.inn_sam} onChange={e => setInnSam(e.target.value)} onBlur={checkInnThunk} className="input-wrap__input" placeholder="ИНН САМ"/>
                        </label>
                    </>}
            </div>
        </section>
    );
}

export default CarHolder;