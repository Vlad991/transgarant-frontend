import React from 'react';
import Social from "./Social";

class SocialContainer extends React.Component {
    state = {}

    componentDidMount() {
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
    };

    render() {
        return (
            <Social state={this.props.state}/>
        );
    };
}

export default SocialContainer;