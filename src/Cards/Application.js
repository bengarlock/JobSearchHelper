import React from 'react'
import { toggleCompany } from "../Actions/Company";
import { connect } from "react-redux";
import { changeCurrentApplication } from "../Actions/JobApplications";
import PropTypes from "prop-types";
import ApplicationInfo from "../Components/ApplicationInfo";


class Application extends React.Component {

    static propTypes = {
        applications: PropTypes.array.isRequired,
        currentApplication: PropTypes.array.isRequired
    }

    state = {
        renderInfo: false
    }

    onClickHandler = () => {
        this.props.changeCurrentApplication(this.props.application)
        this.setState({
            renderInfo: !this.state.renderInfo
        })
    }

    render() {
        return(
            <>
                <div className={this.props.application.id === this.props.currentApplication ?
                    "social-link-selected" : "social-link"}
                     onClick={this.onClickHandler}>
                    {this.props.application.company_name}
                </div>

                {this.state.renderInfo ?
                    <>
                        {this.props.currentApplication[0] ?
                            <ApplicationInfo /> : null
                        }
                    </>
                    : null}
            </>

        )
    }
}

const mapStateToProps = (state) => ({
    applications: state.applications.applications,
    currentApplication: state.applications.currentApplication
})

export default connect(mapStateToProps, { toggleCompany, changeCurrentApplication })(Application);