import React from 'react'
import Application from "../Cards/Application";
import ApplicationInfo from "./ApplicationInfo";
import "../Stylesheets/Applications.css"
import {connect} from "react-redux";
import {getJobApplications} from "../Actions/JobApplications";
import PropTypes from "prop-types";

class Applications extends React.Component {

    static propTypes = {
        applications: PropTypes.array.isRequired,
    }

    state = {
        current_application: '',
        applications: '',
        search: '',
        search_applications: '',
    }

    toggleApplication = (applicationId) => {
        this.setState({
            current_application: applicationId
        })
    }

    removeAppFromSearch = (app) => {
        const search_applications = [...this.state.search_applications]
        const updatedList = search_applications.filter(application => application.id !== app.id)
        this.setState({search_applications: updatedList})

        const applications = [...this.state.applications]
        const updatedApplications = applications.filter(application => application.id !== app.id)
        this.setState({applications: updatedApplications})
    }

    renderApplications = () => {
        if (this.state.search_applications) {
            return this.state.search_applications.map(application =>
                <Application
                    key={application.id}
                    application={application}/>)
        } else if (this.props.applications) {
            return this.props.applications.map(application =>
                <Application
                    key={application.id}
                    application={application}/>)
        } else {
            return <div>Loading...</div>
        }
    }

    onChangeHandler = async (e) => {
        if (e.target.name === "search-form") {
            await this.setState({search: e.target.value})
            const applications = [...this.state.applications]
            const searchResults = applications.filter(application =>
                application.company_name.toLowerCase().includes(this.state.search.toLowerCase()))
            this.setState({search_applications: searchResults})
        }
    }


    onClickHandler = () => {
        this.setState({search: '', search_applications: ''})
    }


    render() {
        return(
            <>
                <div className="content-wrapper" id="application">
                    <div id="application-header-wrapper">
                        <h3>Applications</h3>
                        <div id="application-search-form">
                            <form>
                                <input
                                    autoComplete="off"
                                    type="text"
                                    placeholder="Applications Search"
                                    name="search-form"
                                    value={this.state.search}
                                    onChange={this.onChangeHandler}
                                />
                            </form>
                            {this.state.search ? <button onClick={this.onClickHandler}>
                                clear
                            </button> : null}
                        </div>
                        <div id="application-list-wrapper">
                            {this.renderApplications()}
                        </div>
                    </div>

                    <div id="application-form-wrapper">
                        {this.state.current_application ?
                            <ApplicationInfo
                                removeAppFromSearch={this.removeAppFromSearch}
                                renderApplications={this.renderApplications}
                                updateApplications={this.props.updateApplications}
                                toggleApplication={this.toggleApplication}
                                backendUrl={this.props.backendUrl}
                                application={this.props.applications.find(
                                    item=> item.id === this.state.current_application
                                )}/> : null
                        }
                    </div>
                </div>


            </>
        )
    }
}

const mapStateToProps = (state) => ({
    applications: state.applications.applications
})

export default connect(mapStateToProps, { getJobApplications })(Applications);