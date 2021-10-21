import React from 'react'
import "../Stylesheets/ApplicationInfo.css"
import {connect} from "react-redux";
import {toggleCompany} from "../Actions/Company";
import PropTypes from "prop-types";

class ApplicationInfo extends React.Component {

    static propTypes = {
        company: PropTypes.array.isRequired,
    }

    onClickHandler = () => {
        this.props.toggleCompany(this.props.application)
    }


    render() {
        return(
            <div className="content-wrapper" onClick={this.onClickHandler}>
                <div id="app-item-wrapper">
                    <h3>{this.props.application.company_name} Info</h3>
                    <div className="app-item">
                        {this.props.application.company_name}
                    </div>
                    <div className="app-item">
                        {this.props.application.date_applied}
                    </div>
                    <div className="app-item">
                        {this.props.application.job_title}
                    </div>
                    <div className="app-item">
                        <a href={this.props.application.url} target="_blank" rel="noreferrer">Job Listing</a>
                    </div>
                    <div className="app-item">
                        {this.props.application.status}
                    </div>
                    <div className="delete" onClick={this.onClickHandler}>
                        {this.state.delete_clicked ? "CONFIRM DELETE?" : "DELETE"}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    company: state.company.company
})

export default connect(mapStateToProps, {toggleCompany })(ApplicationInfo);