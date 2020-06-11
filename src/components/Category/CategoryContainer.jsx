import React from 'react';
import {connect} from "react-redux";
import Category from "./Category";
import {setCategory} from "../../redux/categoryReducer";
class CategoryContainer extends React.Component {

    setCategory = (id) => {
        this.props.setCategory(id);
    }

    render() {
        return (
            <Category categories={this.props.categories}
                      activeCategory={this.props.activeCategory}
                      setCategory={this.setCategory}/>
        );
    };
}

let mapStateToProps = (state) => ({
    categories: state.categoryReducer.categories,
    activeCategory: state.categoryReducer.activeCategory
});

export default connect(mapStateToProps, {setCategory})(CategoryContainer);