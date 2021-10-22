import React from 'react'
import "../Stylesheets/ApplicationInfo.css"
import {connect} from "react-redux";
import {toggleCompany} from "../Actions/Company";
import PropTypes from "prop-types";

class ApplicationInfo extends React.Component {

    static propTypes = {
        currentApplication: PropTypes.array.isRequired,
    }

    state = {
        clicked: false,
        delete_clicked: false
    }

    onClickHandler = (e) => {
        if (e.target.className === "delete") {
            this.setState({
                delete_clicked: !this.state.delete_clicked
            })
        }

        if (!this.state.clicked) {
            this.props.toggleCompany(this.props.application)
            this.setState({
                clicked: !this.state.clicked
            })
        } else {
            this.props.toggleCompany()
            this.setState({
                clicked: !this.state.clicked
            })
        }
    }

    renderApplication = () => {
        if (this.props.currentApplication[0]) {
            return (
                <>
                    <h3>{this.props.currentApplication[0].company_name} Info</h3>
                    <div className="app-item">
                        {this.props.currentApplication[0].company_name}
                    </div>
                    <div className="app-item">
                        {this.props.currentApplication[0].date_applied}
                    </div>
                    <div className="app-item">
                        {this.props.currentApplication[0].job_title}
                    </div>
                    <div className="app-item">
                        <a href={this.props.currentApplication[0].url} target="_blank" rel="noreferrer">Job Listing</a>
                    </div>
                    <div className="app-item">
                        {this.props.currentApplication[0].status}
                    </div>
                    <div className="delete" onClick={this.onClickHandler}>
                        {this.state.delete_clicked ? "CONFIRM DELETE?" : "DELETE"}
                    </div>
                </>
            )
        } else {
            return null
        }
    }

    render() {
        console.log(this.state.clicked)
        return (
                <div className="app-item-wrapper" onClick={this.onClickHandler}>
                    {this.renderApplication()}
                </div>
        )
    }
}

const mapStateToProps = (state) => ({
    currentApplication: state.applications.currentApplication
})

export default connect(mapStateToProps, {toggleCompany })(ApplicationInfo);