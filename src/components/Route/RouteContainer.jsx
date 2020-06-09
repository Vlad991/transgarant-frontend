import React from 'react';
import Route from "./Route";

class RouteContainer extends React.Component {
    state = {
        dateFrom: new Date(),
        showFromPicker: false,
        dateTo: new Date(),
        showToPicker: false,
        day: (new Date()).getFullYear() + '-' + ((new Date()).getMonth() + 1) + '-' + (new Date()).getDate(),
        points: [
            {
                name: 'Точка 1',
                values: ['Погр', 'Разг'],
                address: 'г. Москва ул. Пушкинская оф. 2 (в арочку)',
                contact: 'В ООО "Salus" Васька + 7 934 43 59 435',
            },
            {
                name: 'Точка 2',
                values: ['Погр', 'Разг'],
                address: 'г. Москва ул. Пушкинская оф. 2 (в арочку)',
                contact: 'В ООО "Salus" Васька + 7 934 43 59 435',
            },
            {
                name: 'Точка 2',
                values: ['Погр', 'Разг'],
                address: 'г. Москва ул. Пушкинская оф. 2 (в арочку)',
                contact: 'В ООО "Salus" Васька + 7 934 43 59 435',
            }
        ]
    }

    setDateFrom = (date) => {
        this.setState({
            dateFrom: date
        })
    }

    setDateTo = (date) => {
        this.setState({
            dateTo: date
        })
    }

    toggleFromPicker = () => {
        this.setState({
            showFromPicker: !this.state.showFromPicker
        })
    }

    toggleToPicker = () => {
        this.setState({
            showToPicker: !this.state.showToPicker
        })
    }

    render() {
        return (
            <Route dateFrom={this.state.dateFrom}
                   showFromPicker={this.state.showFromPicker}
                   setDateFrom={this.setDateFrom}
                   showToPicker={this.state.showToPicker}
                   dateTo={this.state.dateTo}
                   setDateTo={this.setDateTo}
                   toggleFromPicker={this.toggleFromPicker}
                   toggleToPicker={this.toggleToPicker}
                   points={this.state.points}/>
        );
    };
}

export default RouteContainer;