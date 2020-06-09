import React from 'react';
import Dop from "./Dop";

class DopContainer extends React.Component {
    state = {
        active: false,
        additional_requirements: [
            {
                id: "1",
                name: "ППР",
                type: "Boolean"
            },
            {
                id: "2",
                name: "ПРОПУСК ТТК",
                type: "Boolean"
            },
            {
                id: "3",
                name: "СТРАХОВКА ГРУЗА",
                type: "Boolean"
            },
            {
                id: "4",
                name: "ГРУЗЧИК",
                type: "Boolean"
            },
            {
                id: "5",
                name: "ПРОПУСК МКАД",
                type: "Boolean"
            },
            {
                id: "6",
                name: "ДОСТАВКА ДОКУМЕНТОВ",
                type: "Boolean"
            },
            {
                id: "7",
                name: "ГРУЗЧИКИ",
                type: "Boolean"
            },
            {
                id: "8",
                name: "ПРОПУСК СК",
                type: "Boolean"
            },
        ]
    }

    componentDidMount() {
        // let component = this;
        // document.addEventListener('click', function () {
        //     debugger;
        //     component.setState({
        //         active: false
        //     })
        // });
    }

    toggle = (e) => {
        //debugger;
        e.stopPropagation();
        this.setState({
            active: !this.state.active
        })
    }

    render() {
        return (
            <Dop active={this.state.active}
                 toggle={this.toggle}
                additionalRequirements={this.state.additional_requirements}/>
        );
    };
}

export default DopContainer;