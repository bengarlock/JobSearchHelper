import React from 'react'
import "../Stylesheets/ApplicationInfo.css"

class ApplicationInfo extends React.Component {

    state = {
        date_applied: '',
        company_name: '',
        job_title: '',
    }


    render() {
        return(
            <div className="content-wrapper">
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
                        <a href={this.props.application.url} target="_blank">Job Listing</a>
                    </div>
                    <div className="app-item">
                        {this.props.application.status}
                    </div>
                </div>

            </div>
        )
    }
}

export default ApplicationInfo