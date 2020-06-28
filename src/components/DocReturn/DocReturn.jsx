import React from "react";
import CollapseContainer from "../CollapseContainer";
import {AddressSuggestions} from "react-dadata";
import InputMask from "react-input-mask";

const DocReturn = ({show, toggleReturn, names, setName, address, fullName, phone, setData}) => {
    return (
        <section className="checkout__doc-return doc-return checkout__title">
            <label onClick={toggleReturn} className="doc-return__heading check-wrap">
                Возврат документов
                {show ?
                    <input type="checkbox" checked className="check-wrap__input"/>:
                    <input type="checkbox" className="check-wrap__input"/>}
                <span className="check-wrap__mark"></span>
            </label>
            <div className={"doc-return__body" + (show ? " doc-return__body_active" : "")}>
                <CollapseContainer elementClass="doc-return__collapse"
                                   selected={names.find(name => name.selected)}
                                   items={names}
                                   setItem={setName}/>
                <AddressSuggestions token="4907ed3e0ba286c611e621c3db1588fe3ce7f53c"
                                    value={address}
                                    onChange={(value) => setData({address: value.value, address_latitude: value.data.geo_lat, address_longitude: value.data.geo_lon})}
                                    containerClassName={"doc-return__field input-wrap input-wrap_address"}
                                    inputProps={{className: 'input-wrap__input', placeholder: 'Адрес'}}/>
                <label className="doc-return__field input-wrap">
                    <input onChange={(e) => setData({fullName: e.target.value})} value={fullName} type="text" className="input-wrap__input" placeholder="ФИО" />
                </label>
                <label className="doc-return__field input-wrap">
                    <InputMask mask="+7 ( 999 ) - 999 - 99 - 99" value={phone} onChange={(e) => setData({phone: e.target.value})}>
                        {(inputProps) => <input {...inputProps} className="input-wrap__input" placeholder="Ваш телефон" type="tel"/>}
                    </InputMask>
                </label>
                <label className="doc-return__field doc-return__field_small input-wrap">
                    <input type="text" className="input-wrap__input" placeholder="Стоимость" value=""/>
                </label>
            </div>
        </section>
    );
}

export default DocReturn;