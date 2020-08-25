import React from "react";

const Category = ({state, setCategory}) => {
    return (
        <section className="checkout__category category">
            <h2 className="category__heading">Выберите категорию  транспортного средства</h2>
            <div className="category__description">Если Вы не уверены в выборе категории, пропустите данный шаг и заполните данные о грузе. Транспортное средство, подходящее под Ваш груз будет подобрано автоматически.</div>
            <div className="category__items">
                {state.categories.map(category => {
                    return (
                        <div key={category.id} className={"category__category-item category-item" + (category.id === state.active_category ? ' category-item_active' : '')}
                             onClick={() => setCategory(category.id)}>
                            <div className="category-item__heading">{category.name}</div>
                            <div className="category-item__img"><img src={category.img} alt="Category"/></div>
                            <div className="category-item__text">
                                от {category.weight_from}кг до {category.weight_to}кг<br/>
                                от {category.area_from}м<sup>2</sup> до {category.area_to}м<sup>2</sup></div>
                            <div className="category-item__info">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.3646 2.63581C11.8498 -0.878574 6.1511 -0.878966 2.63593 2.63581C-0.87884 6.15058 -0.878448 11.8493 2.63593 15.3644C6.1507 18.8784 11.8494 18.8788 15.3646 15.3644C18.8789 11.8493 18.8785 6.15097 15.3646 2.63581ZM10.1738 12.9132C10.1738 13.5617 9.64826 14.0872 8.99985 14.0872C8.35145 14.0872 7.82591 13.5617 7.82591 12.9132V8.21749C7.82591 7.56909 8.35145 7.04355 8.99985 7.04355C9.64826 7.04355 10.1738 7.56909 10.1738 8.21749V12.9132ZM8.97911 6.21084C8.30293 6.21084 7.85213 5.73187 7.86622 5.1406C7.85213 4.52076 8.30293 4.05627 8.99281 4.05627C9.68309 4.05627 10.1198 4.52115 10.1343 5.1406C10.1339 5.73187 9.68348 6.21084 8.97911 6.21084Z" fill="#ADADAD"/>
                                </svg>
                                <div className="category-info">
                                    <div className="category-info__col">
                                        <div className="category-info__line">
                                            <div className="category-info__name">Тоннаж (кг)</div>
                                            <div className="category-info__value">от {category.weight_from} до {category.weight_to}</div>
                                        </div>
                                        <div className="category-info__line">
                                            <div className="category-info__name">Длина (м)</div>
                                            <div className="category-info__value">от {category.length_from} до {category.length_to}</div>
                                        </div>
                                        <div className="category-info__line">
                                            <div className="category-info__name">Ширина (м)</div>
                                            <div className="category-info__value">от {category.width_from} до {category.width_to}</div>
                                        </div>
                                        <div className="category-info__line">
                                            <div className="category-info__name">Высота (м)</div>
                                            <div className="category-info__value">от {category.height_from} до {category.height_to}</div>
                                        </div>
                                        <div className="category-info__line">
                                            <div className="category-info__name">Объем (м3)</div>
                                            <div className="category-info__value">от {Number((category.volume_from || 0).toFixed(2))} до {Number((category.volume_to || 0).toFixed(2))}</div>
                                        </div>
                                        <div className="category-info__line">
                                            <div className="category-info__name">Площадь (м2)</div>
                                            <div className="category-info__value">от {category.area_from} до {category.area_to}</div>
                                        </div>
                                    </div>
                                    <div className="category-info__col">
                                        <div className="category-info__line">
                                            <div className="category-info__name">Паллеты (шт.)</div>
                                            <div className="category-info__value">от {category.pallets_from} до {category.pallets_to}</div>
                                        </div>
                                        <div className="category-info__line">
                                            <div className="category-info__name">Пандус</div>
                                            <div className="category-info__value">{category.ramp ? 'да' : 'нет'}</div>
                                        </div>
                                        <div className="category-info__line">
                                            <div className="category-info__name">Гидроборт/лифт</div>
                                            <div className="category-info__value">{category.tail_lift ? 'да' : 'нет'}</div>
                                        </div>
                                        <div className="category-info__line">
                                            <div className="category-info__name">Борт</div>
                                            <div className="category-info__value">{category.board ? 'да' : 'нет'}</div>
                                        </div>
                                        <div className="category-info__line">
                                            <div className="category-info__name">Рефрижератор</div>
                                            <div className="category-info__value">{category.refrigerator ? 'да' : 'нет'}</div>
                                        </div>
                                        <div className="category-info__line">
                                            <div className="category-info__name">Пропуск</div>
                                            <div className="category-info__value">{category.pass_sk ? 'СК' : ''} {category.pass_ttk ? 'ТТК' : ''} {category.pass_mkad ? 'МКАД' : ''} {category.pass_sk || category.pass_ttk || category.pass_mkad ? '' : 'нет'}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default Category;