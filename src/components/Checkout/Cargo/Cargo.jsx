import React from "react";
import CollapseContainer from "../../Elements/CollapseContainer";
import Loader from "react-loader-spinner";

const Cargo = ({
                   state,
                   categories,
                   activeCategory,
                   bodyOptions,
                   activeBodyOption,
                   bodyOptionCh,
                   categoryChanged,
                   showCargoValue,

                   setActiveTab,
                   addPallet,
                   addPlace,
                   addPackage,
                   setPallet,
                   setPackage,
                   setCargoState,
                   showCargo,
                   togglePalletCollapse,
                   togglePackageCollapse,
                   hasError
               }) => {
    let ratio = 348 / (parseFloat(state.cargo_height));
    let cargoAdaptiveWidth = parseFloat(state.cargo_width) * ratio + 22 + 'px';
    let cargoAdaptiveHeight = 370 + 'px';
    if (showCargoValue) {
        if (ratio < 80) {
            ratio = 80;
        }
        cargoAdaptiveWidth = parseFloat(state.cargo_width) * ratio + 22 + 'px';
        cargoAdaptiveHeight = parseFloat(state.cargo_height) * ratio + 22 + 'px';
    }
    return (
        <section className="checkout__cargo cargo">
            <div className={"checkout__title cargo__heading"  + (hasError ? ' checkout__has-error' : '')}>Введите данные о перевозимом грузе</div>
            <form className="cargo__form">
                <div className="cargo__first-col">
                    <div className="cargo__head-block">
                        <div className="cargo__name">{state.name ? state.name : 'Наименование груза'} ({state.price ? state.price + 'р' : 'Ценность груза'})</div>
                        <div className="cargo__description">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M23.2991 18.8911L21.5213 8.82778C21.1533 6.74489 19.351 5.23312 17.2359 5.23312H14.7206C15.1009 4.69256 15.3251 4.03467 15.3251 3.32498C15.3252 1.49161 13.8335 0 12.0001 0C10.1667 0 8.67508 1.49161 8.67508 3.32503C8.67508 4.03472 8.89929 4.69261 9.27958 5.23317H6.76436C4.64927 5.23317 2.84697 6.74494 2.47896 8.82783L0.701084 18.8911C0.476693 20.1614 0.823474 21.4567 1.65241 22.4449C2.4814 23.4332 3.69658 24 4.98654 24H19.0138C20.3037 24 21.5189 23.4332 22.3479 22.445C23.1768 21.4567 23.5235 20.1614 23.2991 18.8911ZM12.0001 1.41689C13.0523 1.41689 13.9083 2.27287 13.9083 3.32503C13.9083 4.37719 13.0522 5.23317 12.0001 5.23317C10.948 5.23317 10.092 4.37719 10.092 3.32503C10.092 2.27287 10.948 1.41689 12.0001 1.41689ZM21.2623 21.5344C20.7032 22.2009 19.8837 22.5831 19.0138 22.5831H4.98654C4.11663 22.5831 3.29707 22.2009 2.73804 21.5344C2.17901 20.8679 1.9451 19.9943 2.09646 19.1377L3.87433 9.07434C4.12254 7.66964 5.33801 6.65002 6.76441 6.65002H17.236C18.6624 6.65002 19.8779 7.66955 20.126 9.07425L21.9039 19.1376C22.0552 19.9943 21.8213 20.8679 21.2623 21.5344Z"
                                    fill="#FFB700"/>
                                <path d="M9.67069 14.6164L11.446 12.7819C11.7181 12.5008 11.7107 12.0523 11.4295 11.7802C11.1483 11.508 10.6998 11.5155 10.4277 11.7966L8.44233 13.8482V12.2893C8.44233 11.898 8.12512 11.5808 7.73386 11.5808C7.34259 11.5808 7.02539 11.898 7.02539 12.2893V16.9435C7.02539 17.3348 7.34259 17.652 7.73386 17.652C8.12512 17.652 8.44233 17.3348 8.44233 16.9435V15.3846L10.4277 17.4362C10.5667 17.5798 10.7517 17.652 10.9369 17.652C11.1143 17.652 11.292 17.5858 11.4295 17.4527C11.7107 17.1805 11.718 16.7321 11.446 16.4509L9.67069 14.6164Z" fill="#FFB700"/>
                                <path d="M16.2664 14.1083H15.2029C14.8116 14.1083 14.4944 14.4255 14.4944 14.8167C14.4944 15.208 14.8116 15.5252 15.2029 15.5252H15.5462C15.4787 15.9276 15.128 16.2353 14.7066 16.2353C14.2372 16.2353 13.8553 15.8534 13.8553 15.384V13.8492C13.8553 13.3798 14.2372 12.9979 14.7066 12.9979C14.9707 12.9979 15.2155 13.1175 15.3784 13.3262C15.6191 13.6346 16.0644 13.6895 16.3728 13.4487C16.6812 13.2079 16.7361 12.7628 16.4954 12.4544C16.0621 11.8994 15.4102 11.5811 14.7067 11.5811C13.456 11.5811 12.4385 12.5986 12.4385 13.8492V15.384C12.4385 16.6347 13.456 17.6522 14.7067 17.6522C15.9573 17.6522 16.9748 16.6347 16.9748 15.384V14.8168C16.9748 14.4255 16.6576 14.1083 16.2664 14.1083Z" fill="#FFB700"/>
                            </svg>
                            Общий вес / Объем груза: {state.total_weight} кг / {state.total_volume} куб
                            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M18.4556 14.9047C19.1791 15.6282 19.1791 16.8053 18.4556 17.5288C18.4546 17.5299 18.4534 17.531 18.4522 17.5321L17.1827 18.7859C17.038 18.9286 16.8496 19 16.6613 19C16.4696 19 16.2783 18.9263 16.1331 18.7793C15.8452 18.4877 15.8481 18.0177 16.1397 17.7297L16.8825 16.9961H4.9717C3.33469 16.9961 2.00296 15.6643 2.00296 14.0273V2.09856L1.26251 2.82915C0.970714 3.11704 0.500759 3.11385 0.212872 2.82205C-0.075015 2.53025 -0.0718259 2.06029 0.219975 1.7724L1.47386 0.535476C2.19532 -0.176269 3.36919 -0.176269 4.09065 0.535476L5.34454 1.7724C5.63634 2.06029 5.63953 2.53025 5.35164 2.82205C5.20639 2.96918 5.0149 3.04296 4.82327 3.04296C4.63497 3.04296 4.44667 2.97179 4.302 2.82915L3.48733 2.02536V14.0273C3.48733 14.8457 4.15327 15.5117 4.9717 15.5117H16.9577L16.1397 14.7038C15.8481 14.4158 15.845 13.9458 16.1331 13.6542C16.4211 13.3627 16.891 13.3596 17.1827 13.6477L18.4522 14.9014C18.4534 14.9026 18.4546 14.9036 18.4556 14.9047ZM16.7725 0H7.16115C6.7502 0 6.41752 0.333984 6.41897 0.74494C6.42056 1.15372 6.75237 1.48437 7.16115 1.48437H16.7725C17.1824 1.48437 17.5146 1.81662 17.5146 2.22656V11.875C17.5146 12.2838 17.8453 12.6157 18.2541 12.6172C18.665 12.6186 18.999 12.2859 18.999 11.875V2.22656C18.999 0.996878 18.0021 0 16.7725 0ZM10.9092 12.7244C11.3191 12.7244 11.6514 12.3922 11.6514 11.9822V8.67894C11.6514 7.55348 10.7358 6.63793 9.61037 6.63793C9.11736 6.63793 8.66466 6.81362 8.31154 7.10571C7.95842 6.81362 7.50572 6.63793 7.01272 6.63793C6.72961 6.63793 6.4597 6.69605 6.21443 6.80071C6.08237 6.67982 5.90698 6.60546 5.71389 6.60546C5.30395 6.60546 4.9717 6.9377 4.9717 7.34764V11.9863C4.9717 12.3962 5.30395 12.7285 5.71389 12.7285C6.12383 12.7285 6.45608 12.3962 6.45608 11.9863V8.67894C6.45608 8.37206 6.70584 8.1223 7.01272 8.1223C7.31959 8.1223 7.56936 8.37206 7.56936 8.67894V11.9863C7.56936 12.3962 7.9016 12.7285 8.31154 12.7285C8.72148 12.7285 9.05373 12.3962 9.05373 11.9863V8.67894C9.05373 8.37206 9.30349 8.1223 9.61037 8.1223C9.91724 8.1223 10.167 8.37206 10.167 8.67894V11.9822C10.167 12.3922 10.4993 12.7244 10.9092 12.7244ZM14.2769 4.0078C14.2729 4.0078 14.2692 4.00838 14.2653 4.00838C14.2615 4.00838 14.2577 4.0078 14.2538 4.0078C13.31 4.0078 12.542 4.77666 12.542 5.72165C12.542 6.13144 12.8742 6.46383 13.2842 6.46383C13.6941 6.46383 14.0264 6.13144 14.0264 5.72165C14.0264 5.59727 14.1306 5.49218 14.2538 5.49218C14.2577 5.49218 14.2615 5.4916 14.2654 5.4916C14.2692 5.4916 14.2729 5.49218 14.2769 5.49218C14.395 5.49218 14.4956 5.58872 14.5037 5.70628C14.4891 5.76064 14.3753 6.0968 13.6641 6.87914C13.223 7.36417 12.7896 7.75918 12.7854 7.76295C12.5582 7.96908 12.4814 8.29378 12.5919 8.57979C12.7023 8.86593 12.9775 9.05467 13.2842 9.05467H15.2881C15.698 9.05467 16.0303 8.72243 16.0303 8.31248C16.0303 7.90254 15.698 7.5703 15.2881 7.5703H15.0328C15.6918 6.79448 15.9887 6.21711 15.9887 5.72165C15.9887 4.77666 15.2207 4.0078 14.2769 4.0078Z"
                                    fill="#FFB700"/>
                            </svg>
                            Площадь: {state.total_area} м<sup>2</sup>
                        </div>
                    </div>
                    <div className="cargo__charac-heading">Характеристика груза</div>
                    <div className="cargo__characteristic characteristic">
                        <div className="characteristic__tab-links">
                            <div onClick={() => setActiveTab(1)} className={"characteristic__tab-link button button_inverse button_small" + (state.active_tab === 1 ? ' button_active' : '')}>
                                Машино-место
                                <div className="characteristic__info-icon info-icon">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.3644 2.63581C11.8497 -0.87857 6.15097 -0.878962 2.63581 2.63581C-0.878962 6.15058 -0.87857 11.8493 2.63581 15.3644C6.15058 18.8784 11.8493 18.8788 15.3644 15.3644C18.8788 11.8493 18.8784 6.15097 15.3644 2.63581ZM10.1737 12.9133C10.1737 13.5617 9.64814 14.0872 8.99973 14.0872C8.35133 14.0872 7.82579 13.5617 7.82579 12.9133V8.2175C7.82579 7.56909 8.35133 7.04356 8.99973 7.04356C9.64814 7.04356 10.1737 7.56909 10.1737 8.2175V12.9133ZM8.97899 6.21084C8.3028 6.21084 7.85201 5.73188 7.8661 5.1406C7.85201 4.52076 8.3028 4.05628 8.99269 4.05628C9.68296 4.05628 10.1197 4.52116 10.1341 5.1406C10.1338 5.73188 9.68335 6.21084 8.97899 6.21084Z" fill="#ADADAD"/>
                                    </svg>
                                    <div className="info-icon__text">Укладка груза в несколько ярусов (рядов вверх) НЕ предусмотрена.</div>
                                </div>
                            </div>
                            <div onClick={() => setActiveTab(2)} className={"characteristic__tab-link button button_inverse button_small" + (state.active_tab === 2 ? ' button_active' : '')}>
                                На паллетах
                                <div className="characteristic__info-icon info-icon">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.3644 2.63581C11.8497 -0.87857 6.15097 -0.878962 2.63581 2.63581C-0.878962 6.15058 -0.87857 11.8493 2.63581 15.3644C6.15058 18.8784 11.8493 18.8788 15.3644 15.3644C18.8788 11.8493 18.8784 6.15097 15.3644 2.63581ZM10.1737 12.9133C10.1737 13.5617 9.64814 14.0872 8.99973 14.0872C8.35133 14.0872 7.82579 13.5617 7.82579 12.9133V8.2175C7.82579 7.56909 8.35133 7.04356 8.99973 7.04356C9.64814 7.04356 10.1737 7.56909 10.1737 8.2175V12.9133ZM8.97899 6.21084C8.3028 6.21084 7.85201 5.73188 7.8661 5.1406C7.85201 4.52076 8.3028 4.05628 8.99269 4.05628C9.68296 4.05628 10.1197 4.52116 10.1341 5.1406C10.1338 5.73188 9.68335 6.21084 8.97899 6.21084Z" fill="#ADADAD"/>
                                    </svg>
                                    <div className="info-icon__text">Груз предварительно уложен на паллетах.</div>
                                </div>
                            </div>
                            <div onClick={() => setActiveTab(3)} className={"characteristic__tab-link button button_inverse button_small" + (state.active_tab === 3 ? ' button_active' : '')}>
                                Упаковки
                                <div className="characteristic__info-icon info-icon">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.3644 2.63581C11.8497 -0.87857 6.15097 -0.878962 2.63581 2.63581C-0.878962 6.15058 -0.87857 11.8493 2.63581 15.3644C6.15058 18.8784 11.8493 18.8788 15.3644 15.3644C18.8788 11.8493 18.8784 6.15097 15.3644 2.63581ZM10.1737 12.9133C10.1737 13.5617 9.64814 14.0872 8.99973 14.0872C8.35133 14.0872 7.82579 13.5617 7.82579 12.9133V8.2175C7.82579 7.56909 8.35133 7.04356 8.99973 7.04356C9.64814 7.04356 10.1737 7.56909 10.1737 8.2175V12.9133ZM8.97899 6.21084C8.3028 6.21084 7.85201 5.73188 7.8661 5.1406C7.85201 4.52076 8.3028 4.05628 8.99269 4.05628C9.68296 4.05628 10.1197 4.52116 10.1341 5.1406C10.1338 5.73188 9.68335 6.21084 8.97899 6.21084Z" fill="#ADADAD"/>
                                    </svg>
                                    <div className="info-icon__text">Предусмотрена укладка груза в несколько ярусов (рядов вверх).</div>
                                </div>
                            </div>
                        </div>
                        <div className="characteristic__tab-items">
                            <div className={"characteristic__tab-item" + (state.active_tab === 1 ? ' characteristic__tab-item_active' : '')}>
                                <div className="characteristic__line">
                                    <label className="characteristic__cargo-name input-wrap">
                                        <input type="text" value={state.name} onChange={(e) => setCargoState({name: e.target.value})} className="input-wrap__input" placeholder="Наименование груза"/>
                                    </label>
                                    <label className="characteristic__input input-wrap">
                                        <input type="text" value={state.price} onChange={(e) => setCargoState({price: e.target.value})} className="input-wrap__input" placeholder="Ценность, руб."/>
                                    </label>
                                </div>
                                <div className="characteristic__line">
                                    <div className="characteristic__input input-label-wrap">
                                        <label htmlFor="" className="input-label-wrap__label">Длина (м)</label>
                                        <label className="input-label-wrap__input input-wrap">
                                            <input id="2" type="text" value={state.place_length} onChange={(e) => setCargoState({place_length: e.target.value})} className="input-wrap__input" placeholder="3,000"/>
                                        </label>
                                    </div>
                                    <div className="characteristic__input input-label-wrap">
                                        <label htmlFor="" className="input-label-wrap__label">Ширина (м)</label>
                                        <label className="input-label-wrap__input input-wrap">
                                            <input id="3" type="text" value={state.place_width} onChange={(e) => setCargoState({place_width: e.target.value})} className="input-wrap__input" placeholder="1,000"/>
                                        </label>
                                    </div>
                                    <div className="characteristic__input input-label-wrap">
                                        <label htmlFor="" className="input-label-wrap__label">Высота (м)</label>
                                        <label className="input-label-wrap__input input-wrap">
                                            <input id="4" type="text" value={state.place_height} onChange={(e) => setCargoState({place_height: e.target.value})} className="input-wrap__input" placeholder="1,000"/>
                                        </label>
                                    </div>
                                    <div className="characteristic__input input-label-wrap">
                                        <label htmlFor="" className="input-label-wrap__label">Вес груза (кг)</label>
                                        <label className="input-label-wrap__input input-wrap">
                                            <input id="5" type="text" value={state.place_weight} onChange={(e) => setCargoState({place_weight: e.target.value})} className="input-wrap__input" placeholder="100,000"/>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className={"characteristic__tab-item" + (state.active_tab === 2 ? ' characteristic__tab-item_active' : '')}>
                                <div className="characteristic__line">
                                    <CollapseContainer active={state.show_pallet_collapse}
                                                       toggleCollapse={togglePalletCollapse}
                                                       elementClass="characteristic__currency"
                                                       selected={state.pallet_types.find(palletType => palletType.id === state.selected_pallet)}
                                                       items={state.pallet_types}
                                                       setItem={setPallet}/>
                                    <label className="characteristic__cargo-name input-wrap">
                                        <input type="text" value={state.name} onChange={(e) => setCargoState({name: e.target.value})} className="input-wrap__input" placeholder="Наименование груза"/>
                                    </label>
                                    <label className="characteristic__input input-wrap">
                                        <input type="text" value={state.price} onChange={(e) => setCargoState({price: e.target.value})} className="input-wrap__input" placeholder="Ценность, руб."/>
                                    </label>
                                </div>
                                <div className="characteristic__line">
                                    <div className="characteristic__input input-label-wrap">
                                        <label className="input-label-wrap__label">Количество</label>
                                        <label className="input-label-wrap__input input-wrap">
                                            <input type="text" value={state.pallet_quantity} onChange={(e) => setCargoState({pallet_quantity: e.target.value})} className="input-wrap__input" placeholder="5"/>
                                        </label>
                                    </div>
                                    <div className="characteristic__input input-label-wrap">
                                        <label className="input-label-wrap__label">Длина (м)</label>
                                        {state.pallet_types.find(pallet => pallet.id === state.selected_pallet) && state.pallet_types.find(pallet => pallet.id === state.selected_pallet).manual ?
                                            <label className="input-label-wrap__input input-wrap">
                                                <input type="text" value={state.pallet_length} onChange={(e) => setCargoState({pallet_length: e.target.value})} className="input-wrap__input" placeholder="3,000"/>
                                            </label> :
                                            <label className="input-label-wrap__input input-wrap" style={{cursor: "not-allowed"}}>
                                                <input type="text" disabled value={state.pallet_length} style={{cursor: "not-allowed"}} className="input-wrap__input" placeholder="3,000"/>
                                            </label>}
                                    </div>
                                    <div className="characteristic__input input-label-wrap">
                                        <label className="input-label-wrap__label">Ширина (м)</label>
                                        {state.pallet_types.find(pallet => pallet.id === state.selected_pallet) && state.pallet_types.find(pallet => pallet.id === state.selected_pallet).manual ?
                                            <label className="input-label-wrap__input input-wrap">
                                                <input type="text" value={state.pallet_width} onChange={(e) => setCargoState({pallet_width: e.target.value})} className="input-wrap__input" placeholder="3,000"/>
                                            </label> :
                                            <label className="input-label-wrap__input input-wrap" style={{cursor: "not-allowed"}}>
                                                <input type="text" disabled value={state.pallet_width} style={{cursor: "not-allowed"}} className="input-wrap__input" placeholder="3,000"/>
                                            </label>}
                                    </div>
                                    <div className="characteristic__input input-label-wrap">
                                        <label htmlFor="" className="input-label-wrap__label">Высота (м)</label>
                                        <label className="input-label-wrap__input input-wrap">
                                            <input id="4" type="text" value={state.pallet_height} onChange={(e) => setCargoState({pallet_height: e.target.value})} className="input-wrap__input" placeholder="1,000"/>
                                        </label>
                                    </div>
                                    <div className="characteristic__input input-label-wrap">
                                        <label htmlFor="" className="input-label-wrap__label">Вес груза (кг)</label>
                                        <label className="input-label-wrap__input input-wrap">
                                            <input id="5" type="text" value={state.pallet_weight} onChange={(e) => setCargoState({pallet_weight: e.target.value})} className="input-wrap__input" placeholder="100,000"/>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className={"characteristic__tab-item" + (state.active_tab === 3 ? ' characteristic__tab-item_active' : '')}>
                                <div className="characteristic__line">
                                    <CollapseContainer active={state.show_package_collapse}
                                                       toggleCollapse={togglePackageCollapse}
                                                       elementClass="characteristic__currency"
                                                       selected={state.package_types.find(packageType => packageType.id === state.selected_package)}
                                                       items={state.package_types}
                                                       setItem={setPackage}/>
                                    <label className="characteristic__cargo-name input-wrap">
                                        <input type="text" value={state.name} onChange={(e) => setCargoState({name: e.target.value})} className="input-wrap__input" placeholder="Наименование груза"/>
                                    </label>
                                    <label className="characteristic__input input-wrap">
                                        <input type="text" value={state.price} onChange={(e) => setCargoState({price: e.target.value})} className="input-wrap__input" placeholder="Ценность, руб."/>
                                    </label>
                                </div>
                                <div className="characteristic__line">
                                    <div className="characteristic__input input-label-wrap">
                                        <label htmlFor="" className="input-label-wrap__label">Количество</label>
                                        <label className="input-label-wrap__input input-wrap">
                                            <input id="1" type="text" value={state.package_quantity} onChange={(e) => setCargoState({package_quantity: e.target.value})} className="input-wrap__input" placeholder="5"/>
                                        </label>
                                    </div>
                                    <div className="characteristic__input input-label-wrap">
                                        <label htmlFor="" className="input-label-wrap__label">Длина (м)</label>
                                        <label className="input-label-wrap__input input-wrap">
                                            <input id="2" type="text" value={state.package_length} onChange={(e) => setCargoState({package_length: e.target.value})} className="input-wrap__input" placeholder="3,000"/>
                                        </label>
                                    </div>
                                    <div className="characteristic__input input-label-wrap">
                                        <label htmlFor="" className="input-label-wrap__label">Ширина (м)</label>
                                        <label className="input-label-wrap__input input-wrap">
                                            <input id="3" type="text" value={state.package_width} onChange={(e) => setCargoState({package_width: e.target.value})} className="input-wrap__input" placeholder="1,000"/>
                                        </label>
                                    </div>
                                    <div className="characteristic__input input-label-wrap">
                                        <label htmlFor="" className="input-label-wrap__label">Высота (м)</label>
                                        <label className="input-label-wrap__input input-wrap">
                                            <input id="4" type="text" value={state.package_height} onChange={(e) => setCargoState({package_height: e.target.value})} className="input-wrap__input" placeholder="1,000"/>
                                        </label>
                                    </div>
                                    <div className="characteristic__input input-label-wrap">
                                        <label htmlFor="" className="input-label-wrap__label">Вес груза (кг)</label>
                                        <label className="input-label-wrap__input input-wrap">
                                            <input id="5" type="text" value={state.package_weight} onChange={(e) => setCargoState({package_weight: e.target.value})} className="input-wrap__input" placeholder="100,000"/>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {state.active_tab === 1 ? <button type="button" onClick={addPlace} className="cargo__button button">Добавить</button> : null}
                    {state.active_tab === 2 ? <button type="button" onClick={addPallet} className="cargo__button button">Добавить</button> : null}
                    {state.active_tab === 3 ? <button type="button" onClick={addPackage} className="cargo__button button">Добавить</button> : null}
                </div>
                <div className="cargo__second-col" onMouseEnter={() => showCargo(true)} onMouseLeave={() => showCargo(false)}>
                    {categoryChanged ?
                        <div className="cargo__info-block">
                            <div style={{textTransform: "uppercase"}}>
                                {categories.map(category => {
                                    if (category.id === activeCategory) {
                                        return category.name;
                                    } else {
                                        return null;
                                    }
                                })} {bodyOptions.map(option => option.id === activeBodyOption ? option.name : null)}
                            </div>
                            <div className="info-icon">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.3644 2.63581C11.8497 -0.87857 6.15097 -0.878962 2.63581 2.63581C-0.878962 6.15058 -0.87857 11.8493 2.63581 15.3644C6.15058 18.8784 11.8493 18.8788 15.3644 15.3644C18.8788 11.8493 18.8784 6.15097 15.3644 2.63581ZM10.1737 12.9133C10.1737 13.5617 9.64814 14.0872 8.99973 14.0872C8.35133 14.0872 7.82579 13.5617 7.82579 12.9133V8.2175C7.82579 7.56909 8.35133 7.04356 8.99973 7.04356C9.64814 7.04356 10.1737 7.56909 10.1737 8.2175V12.9133ZM8.97899 6.21084C8.3028 6.21084 7.85201 5.73188 7.8661 5.1406C7.85201 4.52076 8.3028 4.05628 8.99269 4.05628C9.68296 4.05628 10.1197 4.52116 10.1341 5.1406C10.1338 5.73188 9.68335 6.21084 8.97899 6.21084Z" fill="#ADADAD"/>
                                </svg>
                                <div className="info-icon__text">
                                    ВНИМАНИЕ! Категория транспортного средства подбирается автоматически под характеристики Вашего груза и может измениться на более оптимальную после ввода данных о грузе.
                                    <br/><br/>
                                    Пожалуйста, убедитесь, что автоматически подобранная категория соответствует Вашему выбору.
                                    <br/><br/>
                                    Вы также можете отказаться от автоматически подобранной категории и выбрать любую категорию транспортного средства под Ваш груз, не указывая характеристики груза.
                                </div>
                            </div>
                        </div> : null}
                    <div className={"cargo__sizes" + (state.cargo_loading ? " cargo__sizes--loading" : "")} style={{
                        width: cargoAdaptiveWidth,
                        height: cargoAdaptiveHeight
                    }}>
                        {state.cargo_loading ?
                            <Loader type="Puff" color="#FFB700" height={80} width={80}/>
                            : <div className="sizes-block">
                                {state.packed_items.map((block, index) => {
                                    return (
                                        <div key={index} className="cargo__size-block" style={{
                                            width: parseFloat(block.width) * ratio + 'px',
                                            height: parseFloat(block.height) * ratio + 'px',
                                            left: parseFloat(block.x) * ratio + 'px',
                                            top: parseFloat(block.y) * ratio + 'px'
                                        }}>
                                            <div className="size-block">
                                                <div className="size-block__value">{block.width}</div>
                                                <div className="size-block__value">{block.height}</div>
                                                <div className="size-block__value">{block.width}</div>
                                                <div className="size-block__value">{block.height}</div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>}
                    </div>
                    {state.active_tab === 1 ? <button type="button" onClick={addPlace} className="cargo__button cargo__button_mobile button">Добавить</button> : null}
                    {state.active_tab === 2 ? <button type="button" onClick={addPallet} className="cargo__button cargo__button_mobile button">Добавить</button> : null}
                    {state.active_tab === 3 ? <button type="button" onClick={addPackage} className="cargo__button cargo__button_mobile button">Добавить</button> : null}
                </div>
            </form>
        </section>
    );
}

export default Cargo;