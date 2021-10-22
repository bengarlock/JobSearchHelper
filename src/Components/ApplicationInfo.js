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
        delete_clicked: 0
    }

    onClickHandler = () => {
        if (this.state.delete_clicked === 0) {
            this.setState({
                delete_clicked: 1
            })
        } else if (this.state.delete_clicked === 1) {
            console.log("delete")
        } else {
            this.setState({
                delete_clicked: 0
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