import React from 'react'
import Application from "../Cards/Application";
import ApplicationInfo from "./ApplicationInfo";
import "../Stylesheets/Applications.css"
import {connect} from "react-redux";
import { getJobApplications, changeCurrentApplication} from "../Actions/JobApplications";
import PropTypes from "prop-types";

class Applications extends React.Component {

    static propTypes = {
        applications: PropTypes.array.isRequired,
        currentApplication: PropTypes.array.isRequired
    }

    state = {
        search: '',
    }

    renderApplications = () => {
        return this.props.applications.map(application =>
            <Application key={application.id} application={application}/>)
    }

    onChangeHandler = async (e) => {
        if (e.target.name === "search-form") {
            this.setState({
                search: e.target.value
            })
        }
    }


    onClickHandler = () => {
        this.setState({
            search: '',
        })
    }


    render() {
        return(
            <>
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
                    {this.props.current_application ?
                        <ApplicationInfo /> : null
                    }
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    applications: state.applications.applications,
    currentApplication: state.applications.currentApplication
})

export default connect(mapStateToProps, { getJobApplications })(Applications);