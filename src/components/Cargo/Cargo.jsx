import React from "react";

const Cargo = (props) => {
    return (
        <section className="checkout__cargo cargo">
            <div className="checkout__title cargo__heading">Данные о грузе</div>
            <form className="cargo__form">
                <div className="cargo__first-col">
                    <div className="cargo__head-block">
                        <div className="cargo__name">Наименование груза (Ценность груза (4500р)</div>
                        <div className="cargo__description">ОБЩИ ВЕС / ОБЪЕМ ГРУЗА (700кг / 5 куб) / Площадь (3м2)</div>
                    </div>
                    <div className="cargo__charac-heading">Характеристика груза</div>
                    <div className="cargo__characteristic characteristic">
                        <div className="characteristic__tab-links">
                            <div className="characteristic__tab-link button button_inverse button_small">Машино место</div>
                            <div className="characteristic__tab-link button button_inverse button_small button_active">На палетах</div>
                            <div className="characteristic__tab-link button button_inverse button_small">Упаковки</div>
                        </div>
                        <div className="characteristic__tab-items">
                            <div className="characteristic__tab-item characteristic__tab-item_active">
                                <div className="characteristic__line">
                                    <div className="characteristic__currency collapse">
                                        <div className="collapse__selected">Евро</div>
                                        <div className="collapse__items">
                                            <div className="collapse__item">Доллар</div>
                                            <div className="collapse__item">Рубль</div>
                                        </div>
                                    </div>
                                    <label className="characteristic__cargo-name input-wrap">
                                        <input type="text" className="input-wrap__input" placeholder="Наименование груза"/>
                                    </label>
                                    <label className="characteristic__input input-wrap">
                                        <input type="text" className="input-wrap__input" placeholder="2500р"/>
                                    </label>
                                </div>
                                <div className="characteristic__line">
                                    <div className="characteristic__input input-label-wrap">
                                        <label htmlFor="" className="input-label-wrap__label">Количество</label>
                                        <label className="input-label-wrap__input input-wrap">
                                            <input id="1" type="text" className="input-wrap__input" placeholder="5"/>
                                        </label>
                                    </div>
                                    <div className="characteristic__input input-label-wrap">
                                        <label htmlFor="" className="input-label-wrap__label">Длина</label>
                                        <label className="input-label-wrap__input input-wrap">
                                            <input id="2" type="text" className="input-wrap__input" placeholder="3,000"/>
                                        </label>
                                    </div>
                                    <div className="characteristic__input input-label-wrap">
                                        <label htmlFor="" className="input-label-wrap__label">Ширина</label>
                                        <label className="input-label-wrap__input input-wrap">
                                            <input id="3" type="text" className="input-wrap__input" placeholder="1,000"/>
                                        </label>
                                    </div>
                                    <div className="characteristic__input input-label-wrap">
                                        <label htmlFor="" className="input-label-wrap__label">Высота</label>
                                        <label className="input-label-wrap__input input-wrap">
                                            <input id="4" type="text" className="input-wrap__input" placeholder="1,000"/>
                                        </label>
                                    </div>
                                    <div className="characteristic__input input-label-wrap">
                                        <label htmlFor="" className="input-label-wrap__label">Вес груза</label>
                                        <label className="input-label-wrap__input input-wrap">
                                            <input id="5" type="text" className="input-wrap__input" placeholder="100,000"/>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="characteristic__tab-item">
                                <div className="characteristic__line">
                                    <label className="characteristic__cargo-name input-wrap">
                                        <input type="text" className="input-wrap__input" placeholder="Наименование груза"/>
                                    </label>
                                    <label className="characteristic__input input-wrap">
                                        <input type="text" className="input-wrap__input" placeholder="2500р"/>
                                    </label>
                                </div>
                                <div className="characteristic__line">
                                    <div className="characteristic__input input-label-wrap">
                                        <label htmlFor="" className="input-label-wrap__label">Длина</label>
                                        <label className="input-label-wrap__input input-wrap">
                                            <input id="2" type="text" className="input-wrap__input" placeholder="3,000"/>
                                        </label>
                                    </div>
                                    <div className="characteristic__input input-label-wrap">
                                        <label htmlFor="" className="input-label-wrap__label">Ширина</label>
                                        <label className="input-label-wrap__input input-wrap">
                                            <input id="3" type="text" className="input-wrap__input" placeholder="1,000"/>
                                        </label>
                                    </div>
                                    <div className="characteristic__input input-label-wrap">
                                        <label htmlFor="" className="input-label-wrap__label">Высота</label>
                                        <label className="input-label-wrap__input input-wrap">
                                            <input id="4" type="text" className="input-wrap__input" placeholder="1,000"/>
                                        </label>
                                    </div>
                                    <div className="characteristic__input input-label-wrap">
                                        <label htmlFor="" className="input-label-wrap__label">Вес груза</label>
                                        <label className="input-label-wrap__input input-wrap">
                                            <input id="5" type="text" className="input-wrap__input" placeholder="100,000"/>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="characteristic__tab-item">
                                <div className="characteristic__line">
                                    <div className="characteristic__currency collapse">
                                        <div className="collapse__selected">Евро</div>
                                        <div className="collapse__items">
                                            <div className="collapse__item">Доллар</div>
                                            <div className="collapse__item">Рубль</div>
                                        </div>
                                    </div>
                                    <label className="characteristic__cargo-name input-wrap">
                                        <input type="text" className="input-wrap__input" placeholder="Наименование груза"/>
                                    </label>
                                    <label className="characteristic__input input-wrap">
                                        <input type="text" className="input-wrap__input" placeholder="2500р"/>
                                    </label>
                                </div>
                                <div className="characteristic__line">
                                    <div className="characteristic__input input-label-wrap">
                                        <label htmlFor="" className="input-label-wrap__label">Количество</label>
                                        <label className="input-label-wrap__input input-wrap">
                                            <input id="1" type="text" className="input-wrap__input" placeholder="5"/>
                                        </label>
                                    </div>
                                    <div className="characteristic__input input-label-wrap">
                                        <label htmlFor="" className="input-label-wrap__label">Длина</label>
                                        <label className="input-label-wrap__input input-wrap">
                                            <input id="2" type="text" className="input-wrap__input" placeholder="3,000"/>
                                        </label>
                                    </div>
                                    <div className="characteristic__input input-label-wrap">
                                        <label htmlFor="" className="input-label-wrap__label">Ширина</label>
                                        <label className="input-label-wrap__input input-wrap">
                                            <input id="3" type="text" className="input-wrap__input" placeholder="1,000"/>
                                        </label>
                                    </div>
                                    <div className="characteristic__input input-label-wrap">
                                        <label htmlFor="" className="input-label-wrap__label">Высота</label>
                                        <label className="input-label-wrap__input input-wrap">
                                            <input id="4" type="text" className="input-wrap__input" placeholder="1,000"/>
                                        </label>
                                    </div>
                                    <div className="characteristic__input input-label-wrap">
                                        <label htmlFor="" className="input-label-wrap__label">Вес груза</label>
                                        <label className="input-label-wrap__input input-wrap">
                                            <input id="5" type="text" className="input-wrap__input" placeholder="100,000"/>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type="button" className="cargo__button button">Добавить</button>
                </div>
                <div className="cargo__second-col">
                    <div className="cargo__info-block">
                        <div>КАТЕГОРИЯ 2+ ТЕНТ</div>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.3644 2.63581C11.8497 -0.87857 6.15097 -0.878962 2.63581 2.63581C-0.878962 6.15058 -0.87857 11.8493 2.63581 15.3644C6.15058 18.8784 11.8493 18.8788 15.3644 15.3644C18.8788 11.8493 18.8784 6.15097 15.3644 2.63581ZM10.1737 12.9133C10.1737 13.5617 9.64814 14.0872 8.99973 14.0872C8.35133 14.0872 7.82579 13.5617 7.82579 12.9133V8.2175C7.82579 7.56909 8.35133 7.04356 8.99973 7.04356C9.64814 7.04356 10.1737 7.56909 10.1737 8.2175V12.9133ZM8.97899 6.21084C8.3028 6.21084 7.85201 5.73188 7.8661 5.1406C7.85201 4.52076 8.3028 4.05628 8.99269 4.05628C9.68296 4.05628 10.1197 4.52116 10.1341 5.1406C10.1338 5.73188 9.68335 6.21084 8.97899 6.21084Z" fill="#ADADAD"/>
                        </svg>
                    </div>
                    <div className="cargo__sizes">
                        <div className="cargo__size-block size-block">
                            <div className="size-block__value">0,8</div>
                            <div className="size-block__value">1,2</div>
                            <div className="size-block__value">0,8</div>
                            <div className="size-block__value">1,2</div>
                        </div>
                        <div className="cargo__size-block size-block">
                            <div className="size-block__value">0,8</div>
                            <div className="size-block__value">1,2</div>
                            <div className="size-block__value">0,8</div>
                            <div className="size-block__value">1,2</div>
                        </div>
                        <div className="cargo__size-block size-block">
                            <div className="size-block__value">0,8</div>
                            <div className="size-block__value">1,2</div>
                            <div className="size-block__value">0,8</div>
                            <div className="size-block__value">1,2</div>
                        </div>
                        <div className="cargo__size-block size-block">
                            <div className="size-block__value">0,8</div>
                            <div className="size-block__value">1,2</div>
                            <div className="size-block__value">0,8</div>
                            <div className="size-block__value">1,2</div>
                        </div>
                    </div>
                    <button type="button" className="cargo__button cargo__button_mobile button">Добавить</button>
                </div>
            </form>
        </section>
    );
}

export default Cargo;