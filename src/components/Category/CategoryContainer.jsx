import React from 'react';
import {connect} from "react-redux";
import Category from "./Category";
import {setCategoriesThunk, setCategory} from "../../redux/categoryReducer";

class CategoryContainer extends React.Component {

    componentDidMount() {
        this.props.setCategoriesThunk();
    }

    render() {
        return (
            <Category state={this.props.state}
                      setCategory={this.props.setCategory}/>
        );
    };
}

let mapStateToProps = (state) => ({
    state: state.categoryReducer
});

export default connect(mapStateToProps, {setCategory, setCategoriesThunk})(CategoryContainer);