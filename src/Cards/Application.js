import React from 'react'
import {toggleCompany} from "../Actions/Company";
import {connect} from "react-redux";
import {createJobApplication} from "../Actions/JobApplications";


class Application extends React.Component {

    onClickHandler = () => {
        this.props.toggleCompany(this.props.application)
    }

    render() {
        return(
            <div className={this.props.application.id === this.props.currentApplication ?
                "social-link-selected" : "social-link"}
                 onClick={this.onClickHandler}>
                {this.props.application.company_name}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    applications: state.applications.applications,
    company: state.company.company
})

export default connect(mapStateToProps, { toggleCompany })(Application);