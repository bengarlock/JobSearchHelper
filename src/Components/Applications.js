import React from 'react'
import Application from "../Cards/Application";
import ApplicationInfo from "./ApplicationInfo";
import "../Stylesheets/Applications.css"

class Applications extends React.Component {

    state = {
        current_application: ''
    }

    toggleApplication = (applicationId) => {
        this.setState({
            current_application: applicationId
        })
    }

    renderApplications = () => {
        return this.props.applications.map(application =>
            <Application
                key={application.id}
                application={application}
                currentApplication={this.state.current_application}
                toggleApplication={this.toggleApplication}/>)
    }


    render() {
        return(
            <>
                <div className="content-wrapper" id="application">


                    <div id="application-list-wrapper">
                        <h3>Applications</h3>
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