import React from "react"
import "../Stylesheets/CoverLetterTemplate.css"
import coverLetter from "../Media/Cover Letter - Template.docx"
import resume from "../Media/Resume - Ben Garlock.pdf";

class CoverLetterTemplates extends React.Component {

    state = {
        value: "Copy",
    }

    renderTechText = () => {
        const text = this.props.company.technologies.join(", ")
        return text
    }

    render() {

        return(
            <div id="content-wrapper">

                {this.props.company.company_name ? (

                    <>
                        <div className="doc-wrapper">
                            <h3>Documents</h3>
                            <a href={coverLetter}
                               className="doc-link"
                               download={"Ben Garlock - "
                               + `${this.props.company.company_name}`
                               + " - "
                               + `${this.props.company.job_title}`
                               + " - Cover Letter.docx"}>Cover Letter Template</a>
                        </div>


                        <div className="doc-wrapper">

                            <h3>Sales Engineering</h3>
                            <p>
                                Hello {this.props.company.company_name} Team,
                            <br /><br />

                                I'm excited to present my application for the <b>{this.props.company.job_title ?
                                this.props.company.job_title : "Sales Engineering"} </b>
                                position. Learning about {this.props.company.company_name}'s
                                emphasis of using data to power decision making is a value that I've had fifteen years
                                of experience with, and I'm interested at the prospect of applying these skills to this
                                role.
                            <br /><br />

                                During my many years as an Sr. Account Manager at OpenTable, I routinely used data to
                                solve problems and answer customer questions.  It was also important to be able to
                                communicate complex technical concepts to customers that were not tech-savvy which was a
                                skill I developed over eight years as a systems technician and trainer.  I've had the
                                great pleasure of working with tens of thousands of customers across 42 states, and I'm
                                confident this experience can provide an excellent value to {this.props.company.company_name}.
                            <br /><br />

                                On the technical side, I've hold certification in Software Engineering from Flatiron School
                                and I'm very comfortable with {this.renderTechText()}, and many others. You're welcome to
                                see a some of the projects I've worked on at <a href="https://bengarlock.com" target="_blank">
                                https://bengarlock.com</a>
                            <br /><br />

                                Thank you for your time, and I look forward to speaking with you.
                            <br /><br />
                            Ben Garlock
                            </p>

                        </div>
                        <div className="doc-wrapper">
                            <h3>Software Engineer</h3>
                            <br />
                            <p> Hello {this.props.company.company_name} Team,

                                <br /><br />

                                I’m pleased to submit my application for the <b>{this.props.company.job_title ?
                                    this.props.company.job_title : "Software Engineer"} </b> position.
                                I’m excited at the prospect of applying my technical knowledge and previous work
                                experience to further {this.props.company.company_name}'s goals.

                                <br /><br />

                                In my previous role at OpenTable, I was charged with working with several international
                                teams across the company including engineers, product managers, and designers to develop
                                and expand our core product lines and deliver new features to our customers. Being in a
                                client-facing role has given me unique insight to the importance of listening to
                                customers and using collaboration to not only deliver high-quality products and
                                services, but to do so in a timely fashion.

                                <br /><br />

                                With regards to the technical requirements of this position, I'm certified in Software
                                Engineering from Flatiron School and I hold a Bachelor of Science in Network
                                Engineering.  I also have a practical understanding of many of the technologies and
                                frameworks this position requires including {this.renderTechText()} and
                                many more.  A portfolio of my work is available
                                at <a href="https://www.bengarlock.com">https://www.bengarlock.com</a>.

                                <br /><br />

                                I’d welcome the opportunity to talk with you about the work you’re doing
                                at {this.props.company.company_name} and how I can add value to your team. I’m available
                                for an introductory call or meeting and would be happy to work around your schedule.

                                Thank you in advance for your time.

                                <br /><br />

                                Ben Garlock </p>

                        </div>
                    </>
                    )
                : null}

            </div>
        )
    }
}

export default CoverLetterTemplates