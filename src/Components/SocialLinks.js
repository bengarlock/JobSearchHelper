import React from "react"
import "../Stylesheets/SocialLinks.css"
import Job from "../Cards/Job";

const date = new Date()
const dateFormatted = date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear()
const jobTitles = [
    "QA Engineer", "Developer Relations", "Developer advocacy", "Developer Evangelist",
    "Technical solutions engineer", "Creative developer", "Technical writer",
    "Implementation Specialist", "Creative developer", "Deployment engineer", "Technical service support",
    "Support Engineer", "Integration Specialist", "Customer Success Manager", "Tech Support Engineer",
    "Sales Engineer", "Technical Project Manager", "Solutions Engineer", "Customer Success Engineer",
    "DevOps Engineer", "Success Engineer"
]


class SocialLinks extends React.Component {

    onClickHandler = (e) => {
        if (e.target.id === "linked-in") {
            navigator.clipboard.writeText('https://www.linkedin.com/in/ben-garlock-18400578/')
            e.target.style.backgroundColor = "#05167d"
        } else if (e.target.id === "github") {
            navigator.clipboard.writeText('https://github.com/bengarlock')
            e.target.style.backgroundColor = "#05167d"
        } else if (e.target.id === "portfolio") {
            navigator.clipboard.writeText('https://bengarlock.com')
            e.target.style.backgroundColor = "#05167d"
        } else if (e.target.id === "account-manager-title") {
            navigator.clipboard.writeText('Sr. Account Manager')
            e.target.style.backgroundColor = "#05167d"
        } else if (e.target.id === "account-manager-role") {
            navigator.clipboard.writeText("Directly responsible for maintaining 300+ elite, high-value OpenTable restaurant partnerships.\n \n" +
                "Coordinated with software development teams to provide product feedback, deploy new features, and conduct production tests.\n \n" +
                "Utilized data and analytical tools to assist OpenTable partners in optimizing best practices and use of the OpenTable " +
                "platform including marketing, business development products, and inventory utilization.\n \n" +
                "Lead partner's system conversion efforts from a legacy system built on client-server architecture to a " +
                "cloud-based technology product.")
        } else if (e.target.id === "job-tracker-template") {
            navigator.clipboard.writeText(dateFormatted + "\t"
                + this.props.company.company_name + "\t "
                + this.props.company.job_title + "\t"
                + "Applied" + "\t"
                + this.props.company.url)
        } else if (e.target.id === "job-tracker-link") {
            window.open("https://docs.google.com/spreadsheets/d/1NWsGKRt_ffM1FUEJztA5m5rytPTg6fKWvRd7Ua9wFI8/edit#gid=0")
        }
    }

    renderJobTitleIdes = () => {
        return jobTitles.map(job => <Job key={jobTitles.indexOf(job)} job={job}/>)
    }


    render() {
        return(
            <div className="social-links-wrapper">
                <h3>Social Links</h3>
                    <div className='social-link' id="linked-in"
                         onClick={this.onClickHandler}> LinkedIn </div>
                    <div className='social-link'  id="github"
                         onClick={this.onClickHandler}>GitHub</div>
                    <div className='social-link'  id="portfolio"
                         onClick={this.onClickHandler}>Portfolio</div>

                <h3>Shortcuts</h3>
                <div className='social-link' id="job-tracker-template"
                     onClick={this.onClickHandler}>Data Entry</div>

                <h3>Job Titles</h3>
                <div className="job-title-wrapper">
                    {this.renderJobTitleIdes()}
                </div>



            </div>
        )
    }
}

export default SocialLinks