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
        e.preventDefault();
        e.stopPropagation();
        this.setState({
            active: false
        });
        e.target.value = id;
        e.target.name = this.props.name;
        this.props.setItem(e);
    }

    changeCustomItem = (e, index, itemProp) => {
        this.props.items[index][itemProp] = e.target.value;
    }

    render() {
        const itemProp = this.props.itemProp ? this.props.itemProp : "name";
        return (
            <span onClick={(e) => this.toggle(e)} className={this.props.elementClass + " select" + (this.state.active ? ' select--active' : '')}>
                <span className="select__selected">{this.props.selected ? (this.props.hidePlaceholder ? this.props.selected[itemProp] : (this.props.placeholder + ': ' + this.props.selected[itemProp])) : this.props.placeholder}</span>
                <span className="select__items">
                    {this.props.items.map((item, index) => {
                        if (item.custom) {
                            return <span key={index} onClick={e => this.setItem(e, (this.props.index ? index : item.id))} className="select__item">
                                <input type="text" className="input-small" onClick={e => e.stopPropagation()} onChange={e => this.changeCustomItem(e, index, itemProp)}/>
                            </span>
                        } else {
                            return <span key={index} onClick={e => this.setItem(e, (this.props.index ? index : item.id))} className="select__item">
                                {item[itemProp]}
                            </span>
                        }
                    })}
                </span>
            </span>
        );
    };
}

export default SelectContainer;