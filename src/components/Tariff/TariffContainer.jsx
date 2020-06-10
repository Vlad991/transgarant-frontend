import React from 'react';
import Tariff from "./Tariff";

class TariffContainer extends React.Component {
    state = {
        tariff_types: [
            {
                id: '1',
                name: 'Часовая аренда - 3000 р',
                text: 'Планир. 3000 р (437р - час 4 часа работы + час подачи + + )',
                selected: false
            },
            {
                id: '2',
                name: 'Ставка PM -',
                text: '3000 р',
                selected: false
            },
            {
                id: '3',
                name: 'Доставка - 3000 р',
                text: 'доставка 2000 р (условия) (для тарифа доставка нужно внести данные по грузу)',
                selected: false
            },

        ]
    }

    setTariff = (id) => {
        let types = [...this.state.tariff_types];
        types.forEach(type => type.selected = false);
        let selectType = types.find(type => type.id === id);
        selectType.selected = true;
        this.setState({
            tariff_types: types
        })
    }

    render() {
        return (
            <Tariff tariffTypes={this.state.tariff_types} setTariff={this.setTariff}/>
        );
    };
}

export default TariffContainer;