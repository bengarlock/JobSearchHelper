import React from 'react'
import Application from "../Cards/Application";
import ApplicationInfo from "./ApplicationInfo";
import "../Stylesheets/Applications.css"

class Applications extends React.Component {

    state = {
        current_application: '',
        applications: '',
        search: '',
        search_applications: '',
    }

    componentDidMount = async () => {
        const applications = [...this.props.applications]
        this.setState({
            applications: applications
        })
    }

    toggleApplication = (applicationId) => {
        this.setState({
            current_application: applicationId
        })
    }

    renderApplications = () => {
        if (this.state.search_applications) {
            return this.state.search_applications.map(application =>
                <Application
                    key={application.id}
                    application={application}
                    currentApplication={this.state.current_application}
                    toggleApplication={this.toggleApplication}/>)
        } else if (this.props.applications) {
            return this.props.applications.map(application =>
                <Application
                    key={application.id}
                    application={application}
                    currentApplication={this.state.current_application}
                    toggleApplication={this.toggleApplication}/>)
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


    render() {
        return(
            <>
                <div className="content-wrapper" id="application">
                    <div id="application-list-wrapper">
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
                            {this.state.search ? <button>clear</button> : null}
                        </div>
                        {this.renderApplications()}
                    </div>
                    <div id="application-form-wrapper">
                        {this.state.current_application ?
                            <ApplicationInfo
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

export default Applications