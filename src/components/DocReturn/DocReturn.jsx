import React from "react";
import CollapseContainer from "../CollapseContainer";

const DocReturn = ({show, toggleReturn, names, setName}) => {
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
                <label className="doc-return__field input-wrap">
                    <input type="text" className="input-wrap__input" placeholder="Адрес" value=""/>
                </label>
                <label className="doc-return__field input-wrap">
                    <input type="text" className="input-wrap__input" placeholder="ФИО" value=""/>
                </label>
                <label className="doc-return__field input-wrap">
                    <input type="text" className="input-wrap__input" placeholder="Ваш телефон" value=""/>
                </label>
                <label className="doc-return__field doc-return__field_small input-wrap">
                    <input type="text" className="input-wrap__input" placeholder="Стоимость" value=""/>
                </label>
            </div>
        </section>
    );
}

export default DocReturn;