import React from "react";
import CollapseContainer from "../CollapseContainer";

const Cargo = ({
                   activeTab,
                   setActiveTab,
                   name,
                   price,

                   palletQuantity,
                   palletLength,
                   palletWidth,
                   palletHeight,
                   palletWeight,
                   addPallet,
                   palletTypes,
                   pallets,

                   placeLength,
                   placeWidth,
                   placeHeight,
                   placeWeight,
                   addPlace,
                   places,

                   packageQuantity,
                   packageLength,
                   packageWidth,
                   packageHeight,
                   packageWeight,
                   addPackage,
                   packageTypes,
                   packages,

                   selectedPallet,
                   selectedPackage,
                   setPallet,
                   setPackage,
                   setCargoState,

                   categoryChanged,
                   activeCategory,
                   categories,
                   bodyOptions,
                   activeBodyOption,
                   packedItems,
                   cargoHeight,
                   cargoWidth,
                   totalWeight,
                   totalVolume,
                   totalArea,
                   showCargo,
                   showCargoValue
               }) => {
    let ratio = 348 / (parseFloat(cargoHeight));
    let cargoAdaptiveWidth = parseFloat(cargoWidth) * ratio + 22 + 'px';
    let cargoAdaptiveHeight = 370 + 'px';
    if (showCargoValue) {
        if (ratio < 80) {
            ratio = 80;
        }
        cargoAdaptiveWidth = parseFloat(cargoWidth) * ratio + 22 + 'px';
        cargoAdaptiveHeight = parseFloat(cargoHeight) * ratio + 22 + 'px';
    }
    return (
        <section className="checkout__cargo cargo">
            <div className="checkout__title cargo__heading">Данные о грузе</div>
            <form className="cargo__form">
                <div className="cargo__first-col">
                    <div className="cargo__head-block">
                        <div className="cargo__name">{name ? name : 'Наименование груза'} ({price ? price + 'р' : 'Ценность груза'})</div>
                        <div className="cargo__description">ОБЩИЙ ВЕС: {totalWeight} кг / ОБЪЕМ ГРУЗА: {totalVolume} куб / ПЛОЩАДЬ: {totalArea} м2</div>
                    </div>
                    <div className="">{places.map(place => <div>{place.size.length} / {place.size.width} / {place.size.height} / {place.size.weight} / <button type="button">x</button></div>)}</div>
                    <div className="">{pallets.map(pallet => <div>{pallet.type} / {pallet.quantity} / {pallet.size.length} / {pallet.size.width} / {pallet.size.height} / {pallet.size.weight} / <button type="button">x</button></div>)}</div>
                    <div className="">{packages.map(packag => <div>{packag.type} / {packag.quantity} / {packag.size.length} / {packag.size.width} / {packag.size.height} / {packag.size.weight} / <button type="button">x</button></div>)}</div>
                    <div className="cargo__charac-heading">Характеристика груза</div>
                    <div className="cargo__characteristic characteristic">
                        <div className="characteristic__tab-links">
                            <div onClick={() => setActiveTab(1)} className={"characteristic__tab-link button button_inverse button_small" + (activeTab === 1 ? ' button_active' : '')}>Машино место</div>
                            <div onClick={() => setActiveTab(2)} className={"characteristic__tab-link button button_inverse button_small" + (activeTab === 2 ? ' button_active' : '')}>На палетах</div>
                            <div onClick={() => setActiveTab(3)} className={"characteristic__tab-link button button_inverse button_small" + (activeTab === 3 ? ' button_active' : '')}>Упаковки</div>
                        </div>
                        <div className="characteristic__tab-items">
                            <div className={"characteristic__tab-item" + (activeTab === 1 ? ' characteristic__tab-item_active' : '')}>
                                <div className="characteristic__line">
                                    <label className="characteristic__cargo-name input-wrap">
                                        <input type="text" value={name} onChange={(e) => setCargoState({name: e.target.value})} className="input-wrap__input" placeholder="Наименование груза"/>
                                    </label>
                                    <label className="characteristic__input input-wrap">
                                        <input type="text" value={price} onChange={(e) => setCargoState({price: e.target.value})} className="input-wrap__input" placeholder="2500р"/>
                                    </label>
                                </div>
                                <div className="characteristic__line">
                                    <div className="characteristic__input input-label-wrap">
                                        <label htmlFor="" className="input-label-wrap__label">Длина</label>
                                        <label className="input-label-wrap__input input-wrap">
                                            <input id="2" type="text" value={placeLength} onChange={(e) => setCargoState({place_length: e.target.value})} className="input-wrap__input" placeholder="3,000"/>
                                        </label>
                                    </div>
                                    <div className="characteristic__input input-label-wrap">
                                        <label htmlFor="" className="input-label-wrap__label">Ширина</label>
                                        <label className="input-label-wrap__input input-wrap">
                                            <input id="3" type="text" value={placeWidth} onChange={(e) => setCargoState({place_width: e.target.value})} className="input-wrap__input" placeholder="1,000"/>
                                        </label>
                                    </div>
                                    <div className="characteristic__input input-label-wrap">
                                        <label htmlFor="" className="input-label-wrap__label">Высота</label>
                                        <label className="input-label-wrap__input input-wrap">
                                            <input id="4" type="text" value={placeHeight} onChange={(e) => setCargoState({place_height: e.target.value})} className="input-wrap__input" placeholder="1,000"/>
                                        </label>
                                    </div>
                                    <div className="characteristic__input input-label-wrap">
                                        <label htmlFor="" className="input-label-wrap__label">Вес груза</label>
                                        <label className="input-label-wrap__input input-wrap">
                                            <input id="5" type="text" value={placeWeight} onChange={(e) => setCargoState({place_weight: e.target.value})} className="input-wrap__input" placeholder="100,000"/>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className={"characteristic__tab-item" + (activeTab === 2 ? ' characteristic__tab-item_active' : '')}>
                                <div className="characteristic__line">
                                    <CollapseContainer elementClass="characteristic__currency"
                                                       selected={palletTypes.find(palletType => palletType.id === selectedPallet)}
                                                       items={palletTypes}
                                                       setItem={setPallet}/>
                                    <label className="characteristic__cargo-name input-wrap">
                                        <input type="text" value={name} onChange={(e) => setCargoState({name: e.target.value})} className="input-wrap__input" placeholder="Наименование груза"/>
                                    </label>
                                    <label className="characteristic__input input-wrap">
                                        <input type="text" value={price} onChange={(e) => setCargoState({price: e.target.value})} className="input-wrap__input" placeholder="2500р"/>
                                    </label>
                                </div>
                                <div className="characteristic__line">
                                    <div className="characteristic__input input-label-wrap">
                                        <label className="input-label-wrap__label">Количество</label>
                                        <label className="input-label-wrap__input input-wrap">
                                            <input type="text" value={palletQuantity} onChange={(e) => setCargoState({pallet_quantity: e.target.value})} className="input-wrap__input" placeholder="5"/>
                                        </label>
                                    </div>
                                    <div className="characteristic__input input-label-wrap">
                                        <label className="input-label-wrap__label">Длина</label>
                                        {palletTypes.find(pallet => pallet.id === selectedPallet) && palletTypes.find(pallet => pallet.id === selectedPallet).manual ?
                                            <label className="input-label-wrap__input input-wrap">
                                                <input type="text" value={palletLength} onChange={(e) => setCargoState({pallet_length: e.target.value})} className="input-wrap__input" placeholder="3,000"/>
                                            </label> :
                                            <label className="input-label-wrap__input input-wrap" style={{cursor: "not-allowed"}}>
                                                <input type="text" disabled value={palletLength} style={{cursor: "not-allowed"}} className="input-wrap__input" placeholder="3,000"/>
                                            </label>}
                                    </div>
                                    <div className="characteristic__input input-label-wrap">
                                        <label className="input-label-wrap__label">Ширина</label>
                                        {palletTypes.find(pallet => pallet.id === selectedPallet) && palletTypes.find(pallet => pallet.id === selectedPallet).manual ?
                                            <label className="input-label-wrap__input input-wrap">
                                                <input type="text" value={palletWidth} onChange={(e) => setCargoState({pallet_width: e.target.value})} className="input-wrap__input" placeholder="3,000"/>
                                            </label> :
                                            <label className="input-label-wrap__input input-wrap" style={{cursor: "not-allowed"}}>
                                                <input type="text" disabled value={palletWidth} style={{cursor: "not-allowed"}} className="input-wrap__input" placeholder="3,000"/>
                                            </label>}
                                    </div>
                                    <div className="characteristic__input input-label-wrap">
                                        <label htmlFor="" className="input-label-wrap__label">Высота</label>
                                        <label className="input-label-wrap__input input-wrap">
                                            <input id="4" type="text" value={palletHeight} onChange={(e) => setCargoState({pallet_height: e.target.value})} className="input-wrap__input" placeholder="1,000"/>
                                        </label>
                                    </div>
                                    <div className="characteristic__input input-label-wrap">
                                        <label htmlFor="" className="input-label-wrap__label">Вес груза</label>
                                        <label className="input-label-wrap__input input-wrap">
                                            <input id="5" type="text" value={palletWeight} onChange={(e) => setCargoState({pallet_weight: e.target.value})} className="input-wrap__input" placeholder="100,000"/>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className={"characteristic__tab-item" + (activeTab === 3 ? ' characteristic__tab-item_active' : '')}>
                                <div className="characteristic__line">
                                    <CollapseContainer elementClass="characteristic__currency"
                                                       selected={packageTypes.find(packageType => packageType.id === selectedPackage)}
                                                       items={packageTypes}
                                                       setItem={setPackage}/>
                                    <label className="characteristic__cargo-name input-wrap">
                                        <input type="text" value={name} onChange={(e) => setCargoState({name: e.target.value})} className="input-wrap__input" placeholder="Наименование груза"/>
                                    </label>
                                    <label className="characteristic__input input-wrap">
                                        <input type="text" value={price} onChange={(e) => setCargoState({price: e.target.value})} className="input-wrap__input" placeholder="2500р"/>
                                    </label>
                                </div>
                                <div className="characteristic__line">
                                    <div className="characteristic__input input-label-wrap">
                                        <label htmlFor="" className="input-label-wrap__label">Количество</label>
                                        <label className="input-label-wrap__input input-wrap">
                                            <input id="1" type="text" value={packageQuantity} onChange={(e) => setCargoState({package_quantity: e.target.value})} className="input-wrap__input" placeholder="5"/>
                                        </label>
                                    </div>
                                    <div className="characteristic__input input-label-wrap">
                                        <label htmlFor="" className="input-label-wrap__label">Длина</label>
                                        <label className="input-label-wrap__input input-wrap">
                                            <input id="2" type="text" value={packageLength} onChange={(e) => setCargoState({package_length: e.target.value})} className="input-wrap__input" placeholder="3,000"/>
                                        </label>
                                    </div>
                                    <div className="characteristic__input input-label-wrap">
                                        <label htmlFor="" className="input-label-wrap__label">Ширина</label>
                                        <label className="input-label-wrap__input input-wrap">
                                            <input id="3" type="text" value={packageWidth} onChange={(e) => setCargoState({package_width: e.target.value})} className="input-wrap__input" placeholder="1,000"/>
                                        </label>
                                    </div>
                                    <div className="characteristic__input input-label-wrap">
                                        <label htmlFor="" className="input-label-wrap__label">Высота</label>
                                        <label className="input-label-wrap__input input-wrap">
                                            <input id="4" type="text" value={packageHeight} onChange={(e) => setCargoState({package_height: e.target.value})} className="input-wrap__input" placeholder="1,000"/>
                                        </label>
                                    </div>
                                    <div className="characteristic__input input-label-wrap">
                                        <label htmlFor="" className="input-label-wrap__label">Вес груза</label>
                                        <label className="input-label-wrap__input input-wrap">
                                            <input id="5" type="text" value={packageWeight} onChange={(e) => setCargoState({package_weight: e.target.value})} className="input-wrap__input" placeholder="100,000"/>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {activeTab === 1 ? <button type="button" onClick={addPlace} className="cargo__button button">Добавить</button> : null}
                    {activeTab === 2 ? <button type="button" onClick={addPallet} className="cargo__button button">Добавить</button> : null}
                    {activeTab === 3 ? <button type="button" onClick={addPackage} className="cargo__button button">Добавить</button> : null}
                </div>
                <div className="cargo__second-col" onMouseEnter={() => showCargo(true)} onMouseLeave={() => showCargo(false)}>
                    {categoryChanged ?
                        <div className="cargo__info-block">
                            <div style={{textTransform: "uppercase"}}>{categories.map(category => {
                                if (category.id === activeCategory) {
                                    return category.name;
                                } else {
                                    return null;
                                }
                            })} {bodyOptions.map(option => option.id === activeBodyOption ? option.name : null)}
                            </div>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.3644 2.63581C11.8497 -0.87857 6.15097 -0.878962 2.63581 2.63581C-0.878962 6.15058 -0.87857 11.8493 2.63581 15.3644C6.15058 18.8784 11.8493 18.8788 15.3644 15.3644C18.8788 11.8493 18.8784 6.15097 15.3644 2.63581ZM10.1737 12.9133C10.1737 13.5617 9.64814 14.0872 8.99973 14.0872C8.35133 14.0872 7.82579 13.5617 7.82579 12.9133V8.2175C7.82579 7.56909 8.35133 7.04356 8.99973 7.04356C9.64814 7.04356 10.1737 7.56909 10.1737 8.2175V12.9133ZM8.97899 6.21084C8.3028 6.21084 7.85201 5.73188 7.8661 5.1406C7.85201 4.52076 8.3028 4.05628 8.99269 4.05628C9.68296 4.05628 10.1197 4.52116 10.1341 5.1406C10.1338 5.73188 9.68335 6.21084 8.97899 6.21084Z" fill="#ADADAD"/>
                            </svg>
                        </div> : null}
                    <div className="cargo__sizes" style={{
                        width: cargoAdaptiveWidth,
                        height: cargoAdaptiveHeight
                    }}>
                        <div className="sizes-block">
                            {packedItems.map(block => {
                                return (
                                    <div className="cargo__size-block" style={{
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
                        </div>
                    </div>
                    <button type="button" className="cargo__button cargo__button_mobile button">Добавить</button>
                </div>
            </form>
        </section>
    );
}

export default Cargo;