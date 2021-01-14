import React from "react"
import CompanyInfo from "./CompanyInfo";
import "../Stylesheets/CoverLetterTemplate.css"

class CoverLetterTemplates extends React.Component {

    state = {
        value: "Copy",
    }

    render() {

        return(
            <div id="content-wrapper">

                {this.props.company.company_name ? (

                    <>
                        <div className="template-wrapper">
                            <h3>Sales Engineering</h3>
                            <p>Hello {this.props.company.company_name} Team, </p>

                            <p>I'm excited to present my application for the <b>{this.props.company.job_title ?
                                this.props.company.job_title : "Sales Engineering"} </b>
                                position. Learning about {this.props.company.company_name}'s
                                emphasis of using data to power decision making is a value that I've had fifteen years
                                of experience with, and I'm interested at the prospect of applying these skills to this
                                role.
                            </p>
                            <p>
                                During my many years as an Sr. Account Manager at OpenTable, I routinely used data to
                                solve problems and answer customer questions.  It was also important to be able to
                                communicate complex technical concepts to customers that were not tech-savvy which was a
                                skill I developed over eight years as a systems technician and trainer.  I've had the
                                great pleasure of working with tens of thousands of customers across 42 states, and I'm
                                confident this experience can provide an excellent value to {this.props.company.company_name}.
                            </p>
                            <p>
                                On the technical side, I've recently became certified in Software Engineering at
                                Flatiron School and I'm very comfortable with APIs, JSON, and webhooks. You're welcome to
                                see a some of the projects I've worked on at <a href="https://bengarlock.com" target="_blank">
                                https://bengarlock.com</a>
                            </p>
                            <p>
                                Thank you for your time, and I look forward to speaking with you.
                            </p>
                        </div>
                        <div className="template-wrapper">
                            <h3>Software Engineer</h3>
                            <p>Hello {this.props.company.company_name} Team, </p>

                            <p>I’m very excited to submit my application for the {this.props.company.job_title} position.
                                I’m confident my technical knowledge and previous work experience will be a significant
                                asset in {this.props.company.company_name}’s goals.</p>

                            In my previous role at OpenTable, I was charged with working with several international teams across the company including engineers, product managers, and designers to develop and expand our core product lines and deliver new features to our customers.  Being in a client-facing role has given me unique insight to the importance of listening to customers and using collaboration to not only deliver high-quality products and services, but to do so in a timely fashion.

                            With regards to the technical requirements of this position, I recently completed Flatiron School’s Software Engineering program which has given me a practical application of many of the technologies and frameworks this position requires including Python, JavaScript, Postgres, Django and many others.

                            I’d welcome the opportunity to talk with you about the work you’re doing at Splunk and how I can add value to your team. I’m available for an introductory call or meeting and would be happy to work around your schedule.

                            Thank you in advance for your time.

                            Ben Garlock

                        </div>
                    </>
                    )
                : null}

            </div>
        )
    }
}

export default CoverLetterTemplates