import React from 'react'
import { toggleCompany } from "../Actions/Company";
import { connect } from "react-redux";
import { changeCurrentApplication } from "../Actions/JobApplications";
import PropTypes from "prop-types";


class Application extends React.Component {

    static propTypes = {
        applications: PropTypes.array.isRequired,
        currentApplication: PropTypes.array.isRequired
    }

    onClickHandler = () => {
        this.props.changeCurrentApplication(this.props.application)
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
    currentApplication: state.applications.currentApplication
})

export default connect(mapStateToProps, { toggleCompany, changeCurrentApplication })(Application);