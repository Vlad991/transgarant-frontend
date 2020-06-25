import React from "react";
import CollapseContainer from "../CollapseContainer";

const Cargo = ({
                   pallets,
                   places,
                   packages,
                   palletTypes,
                   packageTypes,
                   palletsActive,
                   placesActive,
                   packagesActive,
                   togglePlaces,
                   togglePallets,
                   togglePackages,
                   editPlace,
                   removePlace,
                   editPallet,
                   removePallet,
                   editPackage,
                   removePackage,
               }) => {
    return (
        <section className="checkout__cargo-items cargo-items">
            {places.length > 0 ?
                <div className="cargo-items__cargo-item cargo-item">
                    <div className={'checkout__title cargo-item__heading' + (placesActive ? ' cargo-item__heading_active' : '')} onClick={togglePlaces}>
                        Машино место ( {places.length} )
                        <div className={'cargo-item__plus' + (placesActive ? ' cargo-item__plus_active' : '')}></div>
                    </div>
                    <div className={"cargo-item__body" + (placesActive ? ' cargo-item__body_active' : '')}>
                        {places.map((place, index) => {
                            return (
                                <div key={index} className="cargo-item__body-item">
                                    <div className="cargo-item__body-parameter">Длина: &nbsp; {Number(place.size.length || 0).toFixed(2)}</div>
                                    <div className="cargo-item__body-parameter">Ширина: &nbsp; {Number(place.size.width || 0).toFixed(2)}</div>
                                    <div className="cargo-item__body-parameter">Высота: &nbsp; {Number(place.size.height || 0).toFixed(2)}</div>
                                    <div className="cargo-item__body-parameter">Вес груза: &nbsp; {Number(place.size.weight || 0).toFixed(2)}</div>
                                    <button type="button" className="cargo-item__edit" onClick={() => editPlace(index)}>
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18.0712 11.0001C17.6372 11.0001 17.2855 11.3519 17.2855 11.7858V19.6428C17.2855 20.0768 16.9337 20.4285 16.4997 20.4285H2.35711C1.92316 20.4285 1.57139 20.0768 1.57139 19.6428V3.92877C1.57139 3.49482 1.92316 3.14305 2.35711 3.14305H11.7856C12.2195 3.14305 12.5713 2.79128 12.5713 2.35733C12.5713 1.92338 12.2195 1.57166 11.7856 1.57166H2.35711C1.05531 1.57166 0 2.62697 0 3.92877V19.6428C0 20.9446 1.05531 21.9999 2.35711 21.9999H16.4998C17.8016 21.9999 18.8569 20.9446 18.8569 19.6428V11.7858C18.8569 11.3519 18.5051 11.0001 18.0712 11.0001Z" fill="#FFB700"/>
                                            <path d="M21.1195 0.881197C20.5553 0.316963 19.7902 4.24262e-05 18.9923 0.000134501C18.1939 -0.00216737 17.428 0.315306 16.8654 0.881704L6.51607 11.2302C6.43021 11.3167 6.36544 11.4218 6.32672 11.5374L4.75533 16.2516C4.61818 16.6633 4.84077 17.1082 5.25248 17.2453C5.33236 17.2719 5.41601 17.2855 5.50017 17.2856C5.58451 17.2855 5.66834 17.2719 5.74844 17.2455L10.4627 15.6741C10.5785 15.6355 10.6836 15.5704 10.7699 15.484L21.1192 5.13473C22.2938 3.96022 22.2939 2.05584 21.1195 0.881197Z" fill="#FFB700"/>
                                        </svg>
                                    </button>
                                    <button type="button" className="cargo-item__remove" onClick={() => removePlace(index)}>
                                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.0035 8.5008L16.6885 1.81576C17.1038 1.40078 17.1038 0.727457 16.6885 0.312477C16.2732 -0.102857 15.6005 -0.102857 15.1852 0.312477L8.50018 6.99752L1.81478 0.312477C1.39945 -0.102857 0.726835 -0.102857 0.311501 0.312477C-0.103834 0.727457 -0.103834 1.40078 0.311501 1.81576L6.99689 8.5008L0.311501 15.1858C-0.103834 15.6008 -0.103834 16.2741 0.311501 16.6891C0.519168 16.8964 0.791332 17.0003 1.06314 17.0003C1.33495 17.0003 1.60712 16.8964 1.81478 16.6888L8.50018 10.0037L15.1852 16.6888C15.3929 16.8964 15.665 17.0003 15.9369 17.0003C16.2087 17.0003 16.4808 16.8964 16.6885 16.6888C17.1038 16.2738 17.1038 15.6005 16.6885 15.1855L10.0035 8.5008Z" fill="#A2A2A2"/>
                                        </svg>
                                    </button>
                                </div>
                            )
                        })}
                    </div>
                </div> : null}
            {pallets.length > 0 ?
                <div className="cargo-items__cargo-item cargo-item">
                    <div className={'checkout__title cargo-item__heading' + (palletsActive ? ' cargo-item__heading_active' : '')} onClick={togglePallets}>
                        На палетах ( {pallets.length} )
                        <div className={'cargo-item__plus' + (palletsActive ? ' cargo-item__plus_active' : '')}></div>
                    </div>
                    <div className={"cargo-item__body" + (palletsActive ? ' cargo-item__body_active' : '')}>
                        {pallets.map((pallet, index) => {
                            return (
                                <div key={index} className="cargo-item__body-item">
                                    <div className="cargo-item__body-parameter">Тип: &nbsp; {palletTypes.find(palletType => palletType.id === pallet.pallet_type_id).name}</div>
                                    <div className="cargo-item__body-parameter">Количество: &nbsp; {pallet.quantity}</div>
                                    <div className="cargo-item__body-parameter">Длина: &nbsp; {Number(pallet.size.length || 0).toFixed(2)}</div>
                                    <div className="cargo-item__body-parameter">Ширина: &nbsp; {Number(pallet.size.width || 0).toFixed(2)}</div>
                                    <div className="cargo-item__body-parameter">Высота: &nbsp; {Number(pallet.size.height || 0).toFixed(2)}</div>
                                    <div className="cargo-item__body-parameter">Вес груза: &nbsp; {Number(pallet.size.weight || 0).toFixed(2)}</div>
                                    <button type="button" className="cargo-item__edit" onClick={() => editPallet(index)}>
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18.0712 11.0001C17.6372 11.0001 17.2855 11.3519 17.2855 11.7858V19.6428C17.2855 20.0768 16.9337 20.4285 16.4997 20.4285H2.35711C1.92316 20.4285 1.57139 20.0768 1.57139 19.6428V3.92877C1.57139 3.49482 1.92316 3.14305 2.35711 3.14305H11.7856C12.2195 3.14305 12.5713 2.79128 12.5713 2.35733C12.5713 1.92338 12.2195 1.57166 11.7856 1.57166H2.35711C1.05531 1.57166 0 2.62697 0 3.92877V19.6428C0 20.9446 1.05531 21.9999 2.35711 21.9999H16.4998C17.8016 21.9999 18.8569 20.9446 18.8569 19.6428V11.7858C18.8569 11.3519 18.5051 11.0001 18.0712 11.0001Z" fill="#FFB700"/>
                                            <path d="M21.1195 0.881197C20.5553 0.316963 19.7902 4.24262e-05 18.9923 0.000134501C18.1939 -0.00216737 17.428 0.315306 16.8654 0.881704L6.51607 11.2302C6.43021 11.3167 6.36544 11.4218 6.32672 11.5374L4.75533 16.2516C4.61818 16.6633 4.84077 17.1082 5.25248 17.2453C5.33236 17.2719 5.41601 17.2855 5.50017 17.2856C5.58451 17.2855 5.66834 17.2719 5.74844 17.2455L10.4627 15.6741C10.5785 15.6355 10.6836 15.5704 10.7699 15.484L21.1192 5.13473C22.2938 3.96022 22.2939 2.05584 21.1195 0.881197Z" fill="#FFB700"/>
                                        </svg>
                                    </button>
                                    <button type="button" className="cargo-item__remove" onClick={() => removePallet(index)}>
                                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.0035 8.5008L16.6885 1.81576C17.1038 1.40078 17.1038 0.727457 16.6885 0.312477C16.2732 -0.102857 15.6005 -0.102857 15.1852 0.312477L8.50018 6.99752L1.81478 0.312477C1.39945 -0.102857 0.726835 -0.102857 0.311501 0.312477C-0.103834 0.727457 -0.103834 1.40078 0.311501 1.81576L6.99689 8.5008L0.311501 15.1858C-0.103834 15.6008 -0.103834 16.2741 0.311501 16.6891C0.519168 16.8964 0.791332 17.0003 1.06314 17.0003C1.33495 17.0003 1.60712 16.8964 1.81478 16.6888L8.50018 10.0037L15.1852 16.6888C15.3929 16.8964 15.665 17.0003 15.9369 17.0003C16.2087 17.0003 16.4808 16.8964 16.6885 16.6888C17.1038 16.2738 17.1038 15.6005 16.6885 15.1855L10.0035 8.5008Z" fill="#A2A2A2"/>
                                        </svg>
                                    </button>
                                </div>
                            )
                        })}
                    </div>
                </div> : null}
            {packages.length > 0 ?
                <div className="cargo-items__cargo-item cargo-item">
                    <div className={'checkout__title cargo-item__heading' + (packagesActive ? ' cargo-item__heading_active' : '')} onClick={togglePackages}>
                        Упаковки ( {packages.length} )
                        <div className={'cargo-item__plus' + (packagesActive ? ' cargo-item__plus_active' : '')}></div>
                    </div>
                    <div className={"cargo-item__body" + (packagesActive ? ' cargo-item__body_active' : '')}>
                        {packages.map((packag, index) => {
                            return (
                                <div key={index} className="cargo-item__body-item">
                                    <div className="cargo-item__body-parameter">Тип: &nbsp; {packageTypes.find(packageType => packageType.id === packag.package_type_id).name}</div>
                                    <div className="cargo-item__body-parameter">Количество: &nbsp; {packag.quantity}</div>
                                    <div className="cargo-item__body-parameter">Длина: &nbsp; {Number(packag.size.length || 0).toFixed(2)}</div>
                                    <div className="cargo-item__body-parameter">Ширина: &nbsp; {Number(packag.size.width || 0).toFixed(2)}</div>
                                    <div className="cargo-item__body-parameter">Высота: &nbsp; {Number(packag.size.height || 0).toFixed(2)}</div>
                                    <div className="cargo-item__body-parameter">Вес груза: &nbsp; {Number(packag.size.weight || 0).toFixed(2)}</div>
                                    <button type="button" className="cargo-item__edit" onClick={() => editPackage(index)}>
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18.0712 11.0001C17.6372 11.0001 17.2855 11.3519 17.2855 11.7858V19.6428C17.2855 20.0768 16.9337 20.4285 16.4997 20.4285H2.35711C1.92316 20.4285 1.57139 20.0768 1.57139 19.6428V3.92877C1.57139 3.49482 1.92316 3.14305 2.35711 3.14305H11.7856C12.2195 3.14305 12.5713 2.79128 12.5713 2.35733C12.5713 1.92338 12.2195 1.57166 11.7856 1.57166H2.35711C1.05531 1.57166 0 2.62697 0 3.92877V19.6428C0 20.9446 1.05531 21.9999 2.35711 21.9999H16.4998C17.8016 21.9999 18.8569 20.9446 18.8569 19.6428V11.7858C18.8569 11.3519 18.5051 11.0001 18.0712 11.0001Z" fill="#FFB700"/>
                                            <path d="M21.1195 0.881197C20.5553 0.316963 19.7902 4.24262e-05 18.9923 0.000134501C18.1939 -0.00216737 17.428 0.315306 16.8654 0.881704L6.51607 11.2302C6.43021 11.3167 6.36544 11.4218 6.32672 11.5374L4.75533 16.2516C4.61818 16.6633 4.84077 17.1082 5.25248 17.2453C5.33236 17.2719 5.41601 17.2855 5.50017 17.2856C5.58451 17.2855 5.66834 17.2719 5.74844 17.2455L10.4627 15.6741C10.5785 15.6355 10.6836 15.5704 10.7699 15.484L21.1192 5.13473C22.2938 3.96022 22.2939 2.05584 21.1195 0.881197Z" fill="#FFB700"/>
                                        </svg>
                                    </button>
                                    <button type="button" className="cargo-item__remove" onClick={() => removePackage(index)}>
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