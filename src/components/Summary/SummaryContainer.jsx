import React from 'react';
import Summary from "./Summary";
import {connect} from "react-redux";

class SummaryContainer extends React.Component {
    render() {
        return (
            <Summary categories={this.props.categories}
                     activeCategory={this.props.activeCategory}
                     bodyOptionCh={this.props.body_option_characteristics}
                     bodyOptions={this.props.body_options}
                     activeBodyOption={this.props.active_body_option}
                     additional={this.props.additional_requirements}
                     dateFrom={this.props.dateFrom}
                     dateTo={this.props.dateTo}/>
        );
    };
}

let mapStateToProps = (state) => ({
    categories: state.categoryReducer.categories,
    activeCategory: state.categoryReducer.activeCategory,
    body_options: state.carBodyReducer.body_options,
    active_body_option: state.carBodyReducer.active_body_option,
    additional_requirements: state.dopReducer.additional_requirements,
    dateFrom: state.dateReducer.dateFrom,
    dateTo: state.dateReducer.dateTo,
    body_option_characteristics: state.carBodyReducer.body_option_characteristics
});

export default connect(mapStateToProps, {})(SummaryContainer);