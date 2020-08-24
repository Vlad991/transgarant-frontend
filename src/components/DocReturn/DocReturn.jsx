import React from "react";
import CollapseContainer from "../CollapseContainer";
import {AddressSuggestions} from "react-dadata";
import InputMask from "react-input-mask";
import {token} from "../../api/dadata-api";

const DocReturn = ({state, toggleReturn, toggleNames, setName, setData}) => {
    return (
        <section className="checkout__doc-return doc-return checkout__title" style={{display: 'none'}}>
            <label onClick={toggleReturn} className="doc-return__heading check-wrap">
                Возврат документов
                {state.show ?
                    <input type="checkbox" checked={true} onChange={() => {}}  className="check-wrap__input"/> :
                    <input type="checkbox" checked={false} onChange={() => {}}  className="check-wrap__input"/>}
                <span className="check-wrap__mark"></span>
            </label>
            <div className={"doc-return__body" + (state.show ? " doc-return__body_active" : "")}>
                <CollapseContainer active={state.show_names_collapse}
                                   toggleCollapse={toggleNames}
                                   elementClass="doc-return__collapse"
                                   selected={state.names.find(name => name.selected)}
                                   items={state.names}
                                   setItem={setName}/>
                <AddressSuggestions token={token}
                                    value={state.address}
                                    onChange={(value) => setData({address: value.value, address_latitude: value.data.geo_lat, address_longitude: value.data.geo_lon})}
                                    containerClassName={"doc-return__field input-wrap input-wrap_address"}
                                    inputProps={{className: 'input-wrap__input', placeholder: 'Адрес'}}/>
                <label className="doc-return__field input-wrap">
                    <input onChange={(e) => setData({full_name: e.target.value})} value={state.full_name} type="text" className="input-wrap__input" placeholder="ФИО"/>
                </label>
                <label className="doc-return__field input-wrap">
                    <InputMask mask="+7 ( 999 ) - 999 - 99 - 99" value={state.phone} onChange={(e) => setData({phone: e.target.value})}>
                        {(inputProps) => <input {...inputProps} className="input-wrap__input" placeholder="Ваш телефон" type="tel"/>}
                    </InputMask>
                </label>
                <label className="doc-return__field doc-return__field_small input-wrap">
                    <input type="text" className="input-wrap__input" onChange={() => {
                    }} value="" placeholder="Стоимость"/>
                </label>
            </div>
        </section>
    );
}

export default DocReturn;