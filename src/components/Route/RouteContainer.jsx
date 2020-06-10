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
                address: 'г Москва, Пушкинская пл, д 2',
                comment: '',
                company: 'В ООО "Salus"',
                contact_name: 'Васька',
                number: '+ 7 934 43 59 435',
                todo: 'Принять гурз для того то от такой то компании сказать что по счету такому то',
                file: 'file.txt',
                timeFrom: '09.00',
                timeTo: '18.00',
                hasPause: true,
                pauseFrom: '09.00',
                pauseTo: '18.00',
                values: [
                    {
                        id: 1,
                        name: 'Погр',
                        selected: false
                    },
                    {
                        id: 2,
                        name: 'Разг',
                        selected: true
                    },
                    {
                        id: 3,
                        name: 'Получ док',
                        selected: false
                    },
                    {
                        id: 4,
                        name: 'Встретить экспедитора',
                        selected: false
                    },
                ]
            }
        ],
        showForm: false,
        updatePoint: null,
        name: '',
        address: '',
        address_error: false,
        comment: '',
        company: '',
        contact_name: '',
        number: '',
        todo: '',
        file: '',
        timeFrom: '',
        timeTo: '',
        hasPause: 0,
        pauseFrom: '',
        pauseTo: '',
        values: [
            {
                id: 1,
                name: 'Погр',
                selected: false
            },
            {
                id: 2,
                name: 'Разг',
                selected: false
            },
            {
                id: 3,
                name: 'Получ док',
                selected: false
            },
            {
                id: 4,
                name: 'Встретить экспедитора',
                selected: false
            },
        ],
        showCollapse: false
    }

    setDateFrom = (date) => {
        let dateToCopy = this.state.dateTo;
        dateToCopy.setMonth(date.getMonth());
        dateToCopy.setFullYear(date.getFullYear());
        dateToCopy.setDate(date.getDate());
        if (date.getHours() > dateToCopy.getHours()) {
            dateToCopy.setHours(date.getHours());
            dateToCopy.setMinutes(date.getMinutes() + 15);
        } else if (date.getMinutes() > dateToCopy.getMinutes()) {
            dateToCopy.setMinutes(date.getMinutes() + 15);
        }
        this.setState({
            dateFrom: date,
            dateTo: dateToCopy
        })
    }

    setDateTo = (date) => {
        let dateFromCopy = this.state.dateFrom;
        dateFromCopy.setMonth(date.getMonth());
        dateFromCopy.setFullYear(date.getFullYear());
        dateFromCopy.setDate(date.getDate());
        if (date.getHours() < dateFromCopy.getHours()) {
            dateFromCopy.setHours(date.getHours());
            dateFromCopy.setMinutes(date.getMinutes() - 15);
        } else if (date.getMinutes() < dateFromCopy.getMinutes()) {
            dateFromCopy.setMinutes(date.getMinutes() - 15);
        }
        this.setState({
            dateTo: date,
            dateFrom: dateFromCopy
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

    toggleForm = (show) => {
        this.setState({
            showForm: show
        })
    }

    addPoint = (name) => {
        let point = {
            showForm: this.state.showForm,
            name: name,
            address: this.state.address,
            comment: this.state.comment,
            company: this.state.company,
            contact_name: this.state.contact_name,
            number: this.state.number,
            todo: this.state.todo,
            file: this.state.file,
            timeFrom: this.state.timeFrom,
            timeTo: this.state.timeTo,
            hasPause: this.state.hasPause,
            pauseFrom: this.state.pauseFrom,
            pauseTo: this.state.pauseTo,
            values: [...this.state.values]
        }
        let points = [...this.state.points];
        points.push(point);
        this.setState({
            points: points
        });
        this.toggleForm(false);
    }

    toggleCollapse = () => {
        this.setState({
            showCollapse: !this.state.showCollapse
        })
    }

    showPointInfo = (index) => {
        let point = this.state.points[index];
        this.setState({
            showForm: true,
            updatePoint: index,
            name: point.name,
            address: point.address,
            comment: point.comment,
            company: point.company,
            contact_name: point.contact_name,
            number: point.number,
            todo: point.todo,
            file: point.file,
            timeFrom: point.timeFrom,
            timeTo: point.timeTo,
            hasPause: point.hasPause,
            pauseFrom: point.pauseFrom,
            pauseTo: point.pauseTo,
            values: [...point.values]
        })
    }

    doUpdatePoint = (index, name) => {
        let point = {
            showForm: this.state.showForm,
            name: name,
            address: this.state.address,
            comment: this.state.comment,
            company: this.state.company,
            contact_name: this.state.contact_name,
            number: this.state.number,
            todo: this.state.todo,
            file: this.state.file,
            timeFrom: this.state.timeFrom,
            timeTo: this.state.timeTo,
            hasPause: this.state.hasPause,
            pauseFrom: this.state.pauseFrom,
            pauseTo: this.state.pauseTo,
            values: [...this.state.values]
        }
        let points = [...this.state.points];
        points[index] = point;
        this.setState({
            points: points,
            updatePoint: null,
            name: '',
            address: '',
            comment: '',
            company: '',
            contact_name: '',
            number: '',
            todo: '',
            file: '',
            timeFrom: '',
            timeTo: '',
            hasPause: 0,
            pauseFrom: '',
            pauseTo: '',
            values: [
                {
                    id: 1,
                    name: 'Погр',
                    selected: false
                },
                {
                    id: 2,
                    name: 'Разг',
                    selected: false
                },
                {
                    id: 3,
                    name: 'Получ док',
                    selected: false
                },
                {
                    id: 4,
                    name: 'Встретить экспедитора',
                    selected: false
                },
            ],
        });
        this.toggleForm(false);
    }

    deletePoint = (e, index) => {
        e.stopPropagation();
        let points = [...this.state.points];
        points.splice(index, 1);
        this.setState({
            points
        })
    }

    toggleValue = (id) => {
        let values = [...this.state.values];
        let value = values.find(value => value.id === id);
        value.selected = !value.selected;
        this.setState({
            values
        })
    }

    setAddress = (value) => {
        if (!value) {
            this.setState({
                address_error: true
            })
        } else {
            this.setState({
                address_error: false,
                address: value.value
            });
        }
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
                   points={this.state.points}
                   showForm={this.state.showForm}
                   updatePoint={this.state.updatePoint}
                   doUpdatePoint={this.doUpdatePoint}
                   deletePoint={this.deletePoint}
                   toggleForm={this.toggleForm}
                   addPoint={this.addPoint}
                   setState={this.setState.bind(this)}
                   name={this.state.name}
                   address={this.state.address}
                   addressError={this.state.address_error}
                   setAddress={this.setAddress}
                   comment={this.state.comment}
                   company={this.state.company}
                   contactName={this.state.contact_name}
                   number={this.state.number}
                   todo={this.state.todo}
                   file={this.state.file}
                   timeFrom={this.state.timeFrom}
                   timeTo={this.state.timeTo}
                   hasPause={this.state.hasPause}
                   pauseFrom={this.state.pauseFrom}
                   pauseTo={this.state.pauseTo}
                   values={this.state.values}
                   toggleValue={this.toggleValue}
                   showCollapse={this.state.showCollapse}
                   toggleCollapse={this.toggleCollapse}
                   showPointInfo={this.showPointInfo}
            />
        );
    };
}

export default RouteContainer;