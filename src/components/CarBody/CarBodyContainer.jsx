import React from 'react';
import CarBody from "./CarBody";

class CarBodyContainer extends React.Component {
    state = {
        body_types: [
            {
                id: 0,
                img: '../img/car-body/vc-4-04 6.svg',
                name: 'Кузов закрытый'
            },
            {
                id: 1,
                img: '../img/car-body/Group.svg',
                name: 'Кузов откытый'
            },
        ],
        active_body_type: 0,
        body_options: [
            {
                id: '0',
                body_type_id: 0,
                name: 'Любой закрытый'
            },
            {
                id: '1',
                body_type_id: 0,
                name: 'ТЕНТ'
            },
            {
                id: '2',
                body_type_id: 0,
                name: 'ФУРГОН'
            },
            {
                id: '3',
                body_type_id: 0,
                name: 'ЦМ'
            },
            {
                id: '4',
                body_type_id: 0,
                name: 'ИЗОТ'
            },
            {
                id: '5',
                body_type_id: 0,
                name: 'РЕФ'
            },
            {
                id: '6',
                body_type_id: 1,
                name: 'БОРТ'
            }
        ],
        active_body_option: '0',
        body_option_characteristics: [
            {
                id: '1',
                body_type_id: 0,
                body_option_id: "0",
                name: "РАСТЕНТОВКА - БОК"
            },
            {
                id: '2',
                body_type_id: 0,
                body_option_id: "0",
                name: "РАСТЕНТОВКА-ПОЛНАЯ"
            },
            {
                id: '3',
                body_type_id: 0,
                body_option_id: "0",
                name: "РАСТЕНТОВКА-ВЕРХ"
            },
            {
                id: '4',
                body_type_id: 0,
                body_option_id: "0",
                name: "ПАНДУС 90",
                type: "ref"
            },
            {
                id: '5',
                body_type_id: 0,
                body_option_id: "0",
                name: "Гидроборт",
                type: "ref"
            },
            {
                id: '6',
                body_type_id: 0,
                body_option_id: "0",
                name: "СТАНДАРТ"
            },
            {
                id: '7',
                body_type_id: 0,
                body_option_id: "0",
                name: "МЕДКНИЖКА"
            },
            {
                id: '8',
                body_type_id: 0,
                body_option_id: "1",
                name: "Гидроборт",
                type: "ref"
            },
            {
                id: '9',
                body_type_id: 0,
                body_option_id: "1",
                name: "СТАНДАРТ"
            },
            {
                id: '10',
                body_type_id: 0,
                body_option_id: "1",
                name: "МЕДКНИЖКА"
            },
            {
                id: '11',
                body_type_id: 1,
                body_option_id: "6",
                name: "Пандус",
                type: "ref"
            },
            {
                id: '12',
                body_type_id: 1,
                body_option_id: "6",
                name: "Ремни"
            },
            {
                id: '13',
                body_type_id: 1,
                body_option_id: "6",
                name: "Конники"
            },
        ],
        body_option_characteristics_values: [
            {
                id: "1",
                body_option_characteristics_id: '5',
                name: "Гидроборт 400"
            },
            {
                id: "2",
                body_option_characteristics_id: '5',
                name: "Гидроборт 100"
            },
            {
                id: "3",
                body_option_characteristics_id: '5',
                name: "Гидроборт 300"
            },
            {
                id: "14",
                body_option_characteristics_id: '8',
                name: "Гидроборт 300"
            },
            {
                id: "4",
                body_option_characteristics_id: '4',
                name: "ПАНДУС 90"
            },
            {
                id: "5",
                body_option_characteristics_id: '4',
                name: "ПАНДУС 80"
            },
            {
                id: "6",
                body_option_characteristics_id: '11',
                name: "ПАНДУС 90"
            },
            {
                id: "7",
                body_option_characteristics_id: '11',
                name: "ПАНДУС 100"
            },
            {
                id: "8",
                body_option_characteristics_id: '11',
                name: "ПАНДУС 110"
            },
            {
                id: "9",
                body_option_characteristics_id: '11',
                name: "ПАНДУС 120"
            }
        ],
        active_body_option_characteristics_values: [
            {
                id: "1",
                body_option_characteristics_id: '5',
                name: "Гидроборт 400"
            },{
                id: "2",
                body_option_characteristics_id: '8',
                name: "Гидроборт 400"
            },
            {
                id: "4",
                body_option_characteristics_id: '4',
                name: "ПАНДУС 90"
            },
            {
                id: "6",
                body_option_characteristics_id: '11',
                name: "ПАНДУС 90"
            },
        ]
    }

    setActiveBodyType = (typeId, option = this.state.body_options.find(opt => opt.body_type_id === typeId)) => {
        let optionId;
        if (option) {
            optionId = option.id;
        }
        this.setState({
            active_body_type: typeId,
            active_body_option: optionId
        })
    }

    setBodyOption = (optionId) => {
        this.setState({
            active_body_option: optionId
        })
    }

    setBodyOptionChVal = (optionChValId, bodyOptionChId) => {
        let valuesCopy = [...this.state.active_body_option_characteristics_values];
        valuesCopy = valuesCopy.map(value => {
            if (value.body_option_characteristics_id === bodyOptionChId) {
                let valueCopy = {...value};
                let findValue = this.state.body_option_characteristics_values.find(value => value.id === optionChValId);
                valueCopy.name = findValue.name;
                valueCopy.id = findValue.id;
                return valueCopy;
            } else {
                return value;
            }
        });
        this.setState({
            active_body_option_characteristics_values: valuesCopy
        })
    }

    render() {
        return (
            <CarBody bodyTypes={this.state.body_types}
                     activeBodyType={this.state.active_body_type}
                     setActiveBodyType={this.setActiveBodyType}
                     bodyOptions={this.state.body_options}
                     activeBodyOption={this.state.active_body_option}
                     setBodyOption={this.setBodyOption}
                     bodyOptionCharacteristics={this.state.body_option_characteristics}
                     bodyOptionCharacteristicValues={this.state.body_option_characteristics_values}
                     activeBodyOptionCharacteristicValues={this.state.active_body_option_characteristics_values}
                     setBodyOptionChVal={this.setBodyOptionChVal}/>
        );
    };
}

export default CarBodyContainer;