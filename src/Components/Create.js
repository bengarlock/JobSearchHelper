import React from "react"
import "../Stylesheets/Create.css"
import fullstackresume from "../Media/Resume - Full Stack Developer - v3 - Final.pdf"
import salesengineerresume from "../Media/Resume - Solutions Engineer - v3 - Final.pdf"
import customersupportengineer from "../Media/Resume - Customer Support Engineer - v3 - Final.pdf"
import customersuccessmanager from "../Media/Resume - Customer Success Manager - v3 - Final.pdf"
import TechButton from "../Cards/TechButton";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createJobApplication } from '../Actions/JobApplications'
import { toggleCompany } from "../Actions/Company";

class Create extends React.Component {

    static propTypes = {
        applications: PropTypes.array.isRequired,
        company: PropTypes.array.isRequired
    }

    state = {
        company_name: '',
        job_title: '',
        contact: '',
        url: '',
        applied_before: false,
    }

    onChangeHandler = (e) => {
        if (e.target.name === "company-name") {
            let company = e.target.value
            let check = this.props.applications.find(item =>
                item.company_name.toLowerCase() === company.toLowerCase()
            )
            if (check) {
                this.setState({
                    applied_before: true
                })
            } else {
                this.setState({
                    applied_before: false
                })
            }
            this.setState({
                company_name: e.target.value
            })
        } else if (e.target.name === "job-title") {
            this.setState({
                job_title: e.target.value
            })
        } else if (e.target.name === "contact") {
            this.setState({
                contact: e.target.value
            })
        } else if (e.target.name === "url") {
            this.setState({
                url: e.target.value
            })
        }
    }

    onSubmitHandler = (e) => {
        e.preventDefault()

        const application = {
            company_name: this.state.company_name,
            job_title: this.state.job_title,
            url: this.state.url,
            status: "Applied",
            contact: this.state.contact,
        }

        const company = this.props.createJobApplication(application)
        this.props.toggleCompany(company)

        this.setState({
            company_name: '',
            job_title: '',
            contact: '',
            url: '',
            applied_before: false,
        })
    }

    renderDocs = () => {
        return (
            <div className="doc-wrapper">
                <h3>Documents</h3>
                <a href={fullstackresume}
                   className="doc-link"
                   download={"Ben Garlock - "
                   + `${this.props.company.company_name}`
                   + " - "
                   + `${this.props.company.job_title}`
                   + " - Resume.pdf"}>Resume - Full Stack Engineer</a>
                <a href={salesengineerresume}
                   className="doc-link"
                   download={"Ben Garlock - "
                   + `${this.props.company.company_name}`
                   + " - "
                   + `${this.props.company.job_title}`
                   + " - Resume.pdf"}>Resume - Solutions Engineer</a>
                <a href={customersupportengineer}
                   className="doc-link"
                   download={"Ben Garlock - "
                   + `${this.props.company.company_name}`
                   + " - "
                   + `${this.props.company.job_title}`
                   + " - Resume.pdf"}>Resume - Customer Support Engineer</a>
                <a href={customersuccessmanager}
                   className="doc-link"
                   download={"Ben Garlock - "
                   + `${this.props.company.company_name}`
                   + " - "
                   + `${this.props.company.job_title}`
                   + " - Resume.pdf"}>Resume - Customer Success Manager</a>
            </div>
        )
    }

    renderTechnology = () => {
        let technologies = [
            "JavaScript", "HTML", "CSS", "Python", "Ruby on Rails", "Postgres", "MySQL",
            "React.js", "SQL", "APIs", "Redux", "Django"]
        return (
            <>
                <h3>Required Technologies - {this.props.company.technologies.join(", ")}</h3>
                <div id="tech-wrapper">
                    {technologies.map(tech => <TechButton
                        key={technologies.indexOf(tech)}
                        tech={tech}
                        updateTechnologies={this.props.updateTechnologies}/>)}
                </div>
            </>
        )
    }

    render() {
        return(
            <div className="content-wrapper">
                <h3>Create Application</h3>
                <div>{this.state.applied_before ? <span>You may have applied here before</span> : null}</div>
                <form id="company-form" onSubmit={this.onSubmitHandler}>
                    <input name="company-name"
                           onChange={this.onChangeHandler}
                           value={this.state.company_name}
                           placeholder="Company Name"
                           autoComplete="off"/>
                    <input name="job-title"
                           onChange={this.onChangeHandler}
                           value={this.state.job_title}
                           placeholder="Job Title"
                           autoComplete="off"/>

                    <input name="contact"
                           onChange={this.onChangeHandler}
                           value={this.state.contact}
                           placeholder="Contact"
                           autoComplete="off"/>

                    <input name="url"
                           onChange={this.onChangeHandler}
                           value={this.state.url}
                           placeholder="Listing URL"
                           autoComplete="off"/>
                    <input type="submit" className="submit"/>

                </form>

                <div>
                    {/*{this.props.company.company_name ? this.renderTechnology() : null}*/}
                </div>

                <div id="doc-wrapper">
                    {/*{this.props.company.company_name ? this.renderDocs() : null}*/}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    applications: state.applications.applications,
    company: state.company.company
})

export default connect(mapStateToProps, { createJobApplication, toggleCompany })(Create);