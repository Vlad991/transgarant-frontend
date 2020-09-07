import React from 'react';

class SelectContainer extends React.Component {
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

    setItem = (e, id) => {
        e.stopPropagation();
        this.setState({
            active: false
        });
        e.target.value = id;
        e.target.name = this.props.name;
        this.props.setItem(e);
    }

    render() {
        const itemProp = this.props.itemProp ? this.props.itemProp : "name";
        return (
            <span onClick={(e) => this.toggle(e)} className={this.props.elementClass + " select" + (this.state.active ? ' select--active' : '')}>
                <span className="select__selected">{this.props.selected ? (this.props.hidePlaceholder ? this.props.selected[itemProp] : (this.props.placeholder + ': ' + this.props.selected[itemProp])) : this.props.placeholder}</span>
                <span className="select__items">
                    {this.props.items.map((item, index) => {
                        return <span key={index} onClick={(e) => {
                            e.preventDefault();
                            this.setItem(e, (this.props.index ? index : item.id));
                        }} className="select__item">{item[itemProp]}</span>
                    })}
                </span>
            </span>
        );
    };
}

export default SelectContainer;