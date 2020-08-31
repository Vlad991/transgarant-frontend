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
                                      containerClassName={"car-holder__input input-wrap input-wrap_address" + (state.inn_entered ? " input-wrap--disabled" : "")}
                                      inputProps={{className: 'input-wrap__input', placeholder: 'ИНН', disabled: state.inn_entered}}/>
                    : <>
                        <PartySuggestions token={token}
                                          value={state.inn_ie}
                                          onChange={setInnIe}
                                          count={5}
                                          containerClassName={"car-holder__input input-wrap input-wrap_address" + (state.inn_ie_entered ? " input-wrap--disabled" : "")}
                                          inputProps={{className: 'input-wrap__input', placeholder: 'ИНН ИП', disabled: state.inn_ie_entered}}/>
                        <label key="sam" className={"car-holder__input input-wrap" + (state.inn_sam_entered ? " input-wrap--disabled" : "")}>
                            <input type="text" value={state.inn_sam} disabled={state.inn_sam_entered} onChange={e => setInnSam(e.target.value)} onBlur={checkInnThunk} className="input-wrap__input" placeholder="ИНН САМ"/>
                        </label>
                    </>}
            </div>
        </section>
    );
}

export default CarHolder;