import React from "react";

const Cargo = ({
                   pallets,
                   places,
                   packages,
                   palletTypes,
                   packageTypes,
                   editPlaceBool,
                   editPalletBool,
                   editPackageBool,
                   listActive,

                   toggleList,
                   editPlace,
                   removePlace,
                   editPallet,
                   removePallet,
                   editPackage,
                   removePackage,
                   updateCargo,
               }) => {
    return (
        <section className="checkout__cargo-items cargo-items">
            {places.length > 0 || pallets.length > 0 || packages.length > 0 ?
                <div className="cargo-items__cargo-item cargo-item">
                    <div className={'checkout__title cargo-item__heading' + (listActive ? ' cargo-item__heading_active' : '')} onClick={toggleList}>
                        Список
                        <div className={'cargo-item__plus' + (listActive ? ' cargo-item__plus_active' : '')}></div>
                    </div>
                    <div className={"cargo-item__body" + (listActive ? ' cargo-item__body_active' : '')}>
                        {places.map((place, index) => {
                            return (
                                <div key={index} className="cargo-item__body-item">
                                    <div className="cargo-item__body-parameter cargo-item__body-parameter_first">ММ{index + 1}</div>
                                    <div className="cargo-item__body-parameter input-label-wrap">
                                        <label htmlFor="" className="input-label-wrap__label">Длина, м</label>
                                        <label className="input-label-wrap__input input-wrap">
                                            <input onChange={(e) => editPlace(index, {size: {length: e.target.value}})} type="text" className="input-wrap__input" value={place.size.length}/>
                                        </label>
                                    </div>
                                    <div className="cargo-item__body-parameter input-label-wrap">
                                        <label htmlFor="" className="input-label-wrap__label">Ширина, м</label>
                                        <label className="input-label-wrap__input input-wrap">
                                            <input onChange={(e) => editPlace(index, {size: {width: e.target.value}})} type="text" className="input-wrap__input" value={place.size.width}/>
                                        </label>
                                    </div>
                                    <div className="cargo-item__body-parameter input-label-wrap">
                                        <label htmlFor="" className="input-label-wrap__label">Высота, м</label>
                                        <label className="input-label-wrap__input input-wrap">
                                            <input onChange={(e) => editPlace(index, {size: {height: e.target.value}})} type="text" className="input-wrap__input" value={place.size.height}/>
                                        </label>
                                    </div>
                                    <div className="cargo-item__body-parameter input-label-wrap">
                                        <label htmlFor="" className="input-label-wrap__label">Вес груза, кг</label>
                                        <label className="input-label-wrap__input input-wrap">
                                            <input onChange={(e) => editPlace(index, {size: {weight: e.target.value}})} type="text" className="input-wrap__input" value={place.size.weight}/>
                                        </label>
                                    </div>
                                    {editPlaceBool === index ?
                                        <button type="button" className="cargo-item__edit button button_small" onClick={() => updateCargo()}>Обновить</button> : null}
                                    <button type="button" className="cargo-item__remove" onClick={() => removePlace(index)} style={{marginLeft: editPlaceBool === index ? '0' : 'auto'}}>
                                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.0035 8.5008L16.6885 1.81576C17.1038 1.40078 17.1038 0.727457 16.6885 0.312477C16.2732 -0.102857 15.6005 -0.102857 15.1852 0.312477L8.50018 6.99752L1.81478 0.312477C1.39945 -0.102857 0.726835 -0.102857 0.311501 0.312477C-0.103834 0.727457 -0.103834 1.40078 0.311501 1.81576L6.99689 8.5008L0.311501 15.1858C-0.103834 15.6008 -0.103834 16.2741 0.311501 16.6891C0.519168 16.8964 0.791332 17.0003 1.06314 17.0003C1.33495 17.0003 1.60712 16.8964 1.81478 16.6888L8.50018 10.0037L15.1852 16.6888C15.3929 16.8964 15.665 17.0003 15.9369 17.0003C16.2087 17.0003 16.4808 16.8964 16.6885 16.6888C17.1038 16.2738 17.1038 15.6005 16.6885 15.1855L10.0035 8.5008Z" fill="#A2A2A2"/>
                                        </svg>
                                    </button>
                                </div>
                            )
                        })}
                        {pallets.map((pallet, index) => {
                            return (
                                <div key={index} className="cargo-item__body-item">
                                    <div className="cargo-item__body-parameter cargo-item__body-parameter_first">{palletTypes.find(palletType => palletType.id === pallet.pallet_type_id).name}</div>
                                    <div className="cargo-item__body-parameter input-label-wrap">
                                        <label htmlFor="" className="input-label-wrap__label">Количество</label>
                                        <label className="input-label-wrap__input input-wrap">
                                            <input onChange={(e) => editPallet(index, {quantity: e.target.value})} type="text" className="input-wrap__input" value={pallet.quantity}/>
                                        </label>
                                    </div>
                                    <div className="cargo-item__body-parameter input-label-wrap">
                                        <label htmlFor="" className="input-label-wrap__label">Длина, м</label>
                                        <label className="input-label-wrap__input input-wrap" style={{cursor: 'not-allowed'}}>
                                            <input type="text" className="input-wrap__input" value={pallet.size.length} style={{cursor: 'not-allowed'}}/>
                                        </label>
                                    </div>
                                    <div className="cargo-item__body-parameter input-label-wrap">
                                        <label htmlFor="" className="input-label-wrap__label">Ширина, м</label>
                                        <label className="input-label-wrap__input input-wrap" style={{cursor: 'not-allowed'}}>
                                            <input type="text" className="input-wrap__input" value={pallet.size.width} style={{cursor: 'not-allowed'}}/>
                                        </label>
                                    </div>
                                    <div className="cargo-item__body-parameter input-label-wrap">
                                        <label htmlFor="" className="input-label-wrap__label">Высота, м</label>
                                        <label className="input-label-wrap__input input-wrap">
                                            <input onChange={(e) => editPallet(index, {size: {height: e.target.value}})} type="text" className="input-wrap__input" value={pallet.size.height}/>
                                        </label>
                                    </div>
                                    <div className="cargo-item__body-parameter input-label-wrap">
                                        <label htmlFor="" className="input-label-wrap__label">Вес груза, кг</label>
                                        <label className="input-label-wrap__input input-wrap">
                                            <input onChange={(e) => editPallet(index, {size: {weight: e.target.value}})} type="text" className="input-wrap__input" value={pallet.size.weight}/>
                                        </label>
                                    </div>
                                    {editPalletBool === index ?
                                        <button type="button" className="cargo-item__edit button button_small" onClick={() => updateCargo()}>Обновить</button> : null}
                                    <button type="button" className="cargo-item__remove" onClick={() => removePallet(index)} style={{marginLeft: editPalletBool === index ? '0' : 'auto'}}>
                                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.0035 8.5008L16.6885 1.81576C17.1038 1.40078 17.1038 0.727457 16.6885 0.312477C16.2732 -0.102857 15.6005 -0.102857 15.1852 0.312477L8.50018 6.99752L1.81478 0.312477C1.39945 -0.102857 0.726835 -0.102857 0.311501 0.312477C-0.103834 0.727457 -0.103834 1.40078 0.311501 1.81576L6.99689 8.5008L0.311501 15.1858C-0.103834 15.6008 -0.103834 16.2741 0.311501 16.6891C0.519168 16.8964 0.791332 17.0003 1.06314 17.0003C1.33495 17.0003 1.60712 16.8964 1.81478 16.6888L8.50018 10.0037L15.1852 16.6888C15.3929 16.8964 15.665 17.0003 15.9369 17.0003C16.2087 17.0003 16.4808 16.8964 16.6885 16.6888C17.1038 16.2738 17.1038 15.6005 16.6885 15.1855L10.0035 8.5008Z" fill="#A2A2A2"/>
                                        </svg>
                                    </button>
                                </div>
                            )
                        })}
                        {packages.map((packag, index) => {
                            return (
                                <div key={index} className="cargo-item__body-item">
                                    <div className="cargo-item__body-parameter cargo-item__body-parameter_first">{packageTypes.find(packageType => packageType.id === packag.package_type_id).name}</div>
                                    <div className="cargo-item__body-parameter input-label-wrap">
                                        <label htmlFor="" className="input-label-wrap__label">Количество</label>
                                        <label className="input-label-wrap__input input-wrap">
                                            <input onChange={(e) => editPackage(index, {quantity: e.target.value})} type="text" className="input-wrap__input" value={packag.quantity}/>
                                        </label>
                                    </div>
                                    <div className="cargo-item__body-parameter input-label-wrap">
                                        <label htmlFor="" className="input-label-wrap__label">Длина, м</label>
                                        <label className="input-label-wrap__input input-wrap">
                                            <input onChange={(e) => editPackage(index, {size: {length: e.target.value}})} type="text" className="input-wrap__input" value={packag.size.length}/>
                                        </label>
                                    </div>
                                    <div className="cargo-item__body-parameter input-label-wrap">
                                        <label htmlFor="" className="input-label-wrap__label">Ширина, м</label>
                                        <label className="input-label-wrap__input input-wrap">
                                            <input onChange={(e) => editPackage(index, {size: {width: e.target.value}})} type="text" className="input-wrap__input" value={packag.size.width}/>
                                        </label>
                                    </div>
                                    <div className="cargo-item__body-parameter input-label-wrap">
                                        <label htmlFor="" className="input-label-wrap__label">Высота, м</label>
                                        <label className="input-label-wrap__input input-wrap">
                                            <input onChange={(e) => editPackage(index, {size: {height: e.target.value}})} type="text" className="input-wrap__input" value={packag.size.height}/>
                                        </label>
                                    </div>
                                    <div className="cargo-item__body-parameter input-label-wrap">
                                        <label htmlFor="" className="input-label-wrap__label">Вес груза, кг</label>
                                        <label className="input-label-wrap__input input-wrap">
                                            <input onChange={(e) => editPackage(index, {size: {weight: e.target.value}})} type="text" className="input-wrap__input" value={packag.size.weight}/>
                                        </label>
                                    </div>
                                    {editPackageBool === index ?
                                        <button type="button" className="cargo-item__edit button button_small" onClick={() => updateCargo()}>Обновить</button> : null}
                                    <button type="button" className="cargo-item__remove" onClick={() => removePackage(index)} style={{marginLeft: editPackageBool === index ? '0' : 'auto'}}>
                                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.0035 8.5008L16.6885 1.81576C17.1038 1.40078 17.1038 0.727457 16.6885 0.312477C16.2732 -0.102857 15.6005 -0.102857 15.1852 0.312477L8.50018 6.99752L1.81478 0.312477C1.39945 -0.102857 0.726835 -0.102857 0.311501 0.312477C-0.103834 0.727457 -0.103834 1.40078 0.311501 1.81576L6.99689 8.5008L0.311501 15.1858C-0.103834 15.6008 -0.103834 16.2741 0.311501 16.6891C0.519168 16.8964 0.791332 17.0003 1.06314 17.0003C1.33495 17.0003 1.60712 16.8964 1.81478 16.6888L8.50018 10.0037L15.1852 16.6888C15.3929 16.8964 15.665 17.0003 15.9369 17.0003C16.2087 17.0003 16.4808 16.8964 16.6885 16.6888C17.1038 16.2738 17.1038 15.6005 16.6885 15.1855L10.0035 8.5008Z" fill="#A2A2A2"/>
                                        </svg>
                                    </button>
                                </div>
                            )
                        })}
                    </div>
                </div> : null}
        </section>
    );
}

export default Cargo;