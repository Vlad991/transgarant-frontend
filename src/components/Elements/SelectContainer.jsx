import React from 'react';

class SelectContainer extends React.Component {
    state = {
        active: false
    }

    toggle = (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.setState({
            active: !this.state.active
        });
    }

    setItem = (e, id) => {
        e.stopPropagation();
        this.setState({
            active: false
        });
        this.props.setItem(id);
    }

    render() {
        return (
            <span onClick={(e) => this.toggle(e)} className={this.props.elementClass + " select" + (this.state.active ? ' select--active' : '')}>
                <span className="select__selected">{this.props.selected ? this.props.placeholder + ': ' + this.props.selected.name : this.props.placeholder}</span>
                <span className="select__items">
                    {this.props.items.map(item => {
                        return <span key={item.id} onClick={(e) => {
                            e.preventDefault();
                            this.setItem(e, item.id);
                        }} className="select__item">{item.name}</span>
                    })}
                </span>
            </span>
        );
    };
}

export default SelectContainer;