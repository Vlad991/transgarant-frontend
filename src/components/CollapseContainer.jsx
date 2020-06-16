import React from 'react';

class CollapseContainer extends React.Component {
    state = {
        elementClass: '',
        small: true,
        gray: true,
        active: false,
        selected: {},
        items: []
    }

    componentDidMount() {
        this.setState({
            elementClass: this.props.elementClass,
            small: this.props.small,
            gray: this.props.gray,
            selected: {...this.props.selected},
            items: [...this.props.items],
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if ((!prevProps.selected && this.props.selected) || (prevProps.selected && (prevProps.selected.id !== this.props.selected.id)) || (prevProps.items !== this.props.items)) {
            this.setState({
                elementClass: this.props.elementClass,
                small: this.props.small,
                gray: this.props.gray,
                selected: {...this.props.selected},
                items: [...this.props.items],
            });
        }
    }

    toggle = () => {
        this.setState({
            active: !this.state.active
        })
    }

    setItem = (event, id) => {
        event.stopPropagation();
        this.setState({
            active: false
        })
        this.props.setItem(id)
    }

    render() {
        return (
            <span onClick={(e) => {e.preventDefault(); this.toggle()}} className={this.state.elementClass + " collapse" + (this.state.small ? ' collapse_small' : '') + (this.state.gray ? ' collapse_gray' : '') + (this.state.active ? ' collapse_active' : '')}>
                <span className="collapse__selected">{this.state.selected.name}</span>
                <span className="collapse__items">
                    {this.state.items.map(item => {
                        if (item.id !== this.state.selected.id) {
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