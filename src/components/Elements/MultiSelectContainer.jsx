import React from 'react';

class MultiSelectContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            active: false
        }
    }

    toggle = (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.setState({
            active: !this.state.active
        });
        if (this.props.setTouched) {
            this.props.setTouched();
        }
    }

    addItem = (e, id) => {
        e.stopPropagation();
        let items = [...this.props.items];
        let item = items.find(item => item.id === id);
        item.selected = !item.selected;
        this.props.addItem(items);
        this.forceUpdate();
    }

    render() {
        return (
            <span onClick={(e) => this.toggle(e)} className={this.props.elementClass + " select" + (this.state.active ? ' select--active' : '')}>
                <span className="select__selected">{this.props.placeholder}: {this.props.items.map(item => item.selected && (item.name + ", "))}</span>
                <span className="select__items">
                    {this.props.items.length > 0 && this.props.items.map((item, index) => {
                        return <label key={index} onClick={e => e.stopPropagation()} className="select__item check-wrap">
                            <input onChange={e => this.addItem(e, item.id)} type="checkbox" checked={item.selected} className="check-wrap__input"/>
                            <span className="check-wrap__mark"></span>
                            {item.name}
                        </label>
                    })}
                </span>
            </span>
        );
    };
}

export default MultiSelectContainer;