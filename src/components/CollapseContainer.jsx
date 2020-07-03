import React from 'react';

class CollapseContainer extends React.Component {
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
            <span onClick={(e) => this.toggle(e)} className={this.props.elementClass + " collapse" + (this.props.small ? ' collapse_small' : '') + (this.props.gray ? ' collapse_gray' : '') + (this.state.active ? ' collapse_active' : '')}>
                <span className="collapse__selected">{this.props.selected ? this.props.selected.name : ''}</span>
                <span className="collapse__items">
                    {this.props.items.map(item => {
                        if (this.props.selected && (item.id !== this.props.selected.id)) {
                            return <span key={item.id} onClick={(e) => {e.preventDefault(); this.setItem(e, item.id);}} className="collapse__item">{item.name}</span>
                        } else {
                            return null;
                        }
                    })}
                </span>
            </span>
        );
    };
}

export default CollapseContainer;