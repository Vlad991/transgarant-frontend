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
                address: 'г. Москва ул. Пушкинская оф. 2 (в арочку)',
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
                values: []
            }
        ],
        showForm: false,
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
        values: [],
        showCollapse: false
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
            values: [],
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

    addValue = (value) => {
        let values = [...this.state.values];
        values.push(value);
        this.setState({
            values
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
                   addValue={this.addValue}
                   showCollapse={this.state.showCollapse}
                   toggleCollapse={this.toggleCollapse}
                   showPointInfo={this.showPointInfo}
            />
        );
    };
}

export default RouteContainer;