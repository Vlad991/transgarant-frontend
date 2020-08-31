import React from "react";

const Cars = ({state, toggleUpdateCar}) => {
    return (
        <div className="registration__cars cars">
            {state.cars.map((car, index) => {
                return (
                    <div key={index} onClick={() => toggleUpdateCar(index)} className="cars__item car-card">
                        <div className="car-card__cross">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 1.4L12.6 0L7 5.6L1.4 0L0 1.4L5.6 7L0 12.6L1.4 14L7 8.4L12.6 14L14 12.6L8.4 7L14 1.4Z" fill="#A3A3A3"/>
                            </svg>
                        </div>
                        <h4 className="car-card__heading">{car.certificate_brand} {car.certificate_model}</h4>
                        <div className="car-card__row">
                            <div className="car-card__item">
                                <div className="car-card__item-name">Грузоподьемность</div>
                                <div className="car-card__item-value">до {state.capacity_types.find(capacity => capacity.id === car.selected_capacity_id).name} кг</div>
                            </div>
                            <div className="car-card__item">
                                <div className="car-card__item-name">Вид кузова</div>
                                <div className="car-card__item-value">{state.body_types.find(body => body.id === car.selected_body_type_id).name}</div>
                            </div>
                        </div>
                        <div className="car-card__row">
                            <div className="car-card__item">
                                <div className="car-card__item-name">Водитель-грузчик</div>
                                <div className="car-card__item-value">{car.driver_loader ? 'Да' : 'Нет'}</div>
                            </div>
                            <div className="car-card__item">
                                <div className="car-card__item-name">Под пандус</div>
                                <div className="car-card__item-value">{state.ramp_types.find(ramp => ramp.id === car.selected_ramp_id).name} см</div>
                            </div>
                        </div>
                        <div className="car-card__place-item">
                            <div className="car-card__item-name">Место гаража</div>
                            <div className="car-card__item-value car-card__item-value--address">{car.garage_address.string}</div>
                        </div>
                        {(car.photo_inside && car.photo_in_front && car.photo_side) ?
                            <div className="car-card__file">
                                <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M28.3348 0.876953V12.0373H39.4952L28.3348 0.876953Z" fill="#BFBFBF"/>
                                    <path d="M25.3451 15.0264V0.000732422H0V49.4044H28.2727C26.9962 48.0791 25.9868 46.5525 25.2713 44.8605C24.4911 43.0151 24.0955 41.058 24.0955 39.0412C24.0955 37.0243 24.4911 35.0673 25.2713 33.2218C26.0246 31.4421 27.1018 29.8438 28.4729 28.4717C29.8451 27.1006 31.4434 26.0234 33.2231 25.2701C35.0685 24.4898 37.0256 24.0942 39.0424 24.0942C39.5217 24.0942 39.998 24.1171 40.4704 24.162V15.0264H25.3451ZM7.45454 14.9935H19.4121V17.9829H7.45454V14.9935ZM19.4121 35.9193H7.45454V32.9299H19.4121V35.9193ZM22.4015 29.9405H7.45454V26.9511H22.4015V29.9405ZM30.0075 23.9617H7.45454V20.9723H30.0075V23.9617Z" fill="#BFBFBF"/>
                                    <path d="M39.0424 27.084C32.4388 27.084 27.0848 32.438 27.0848 39.0415C27.0848 45.6451 32.4388 50.9991 39.0424 50.9991C45.646 50.9991 51 45.6451 51 39.0415C51 32.438 45.646 27.084 39.0424 27.084ZM37.7779 43.5017L33.53 39.1302L35.6744 37.0466L37.9264 39.3644L42.6317 35.1693L44.6206 37.4004L37.7779 43.5017Z" fill="#FFB700"/>
                                </svg>
                            </div> : null}
                    </div>
                )
            })}
        </div>
    );
}

export default Cars;