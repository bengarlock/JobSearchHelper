import React from "react"
import "../Stylesheets/CoverLetterTemplate.css"
import coverLetter from "../Media/Cover Letter - Template.docx"
import resume from "../Media/Resume - Ben Garlock.pdf";
import Template from "../Cards/Template";

class CoverLetterTemplates extends React.Component {

    state = {
        value: "Copy",
        letter: {
            header: '',
            greeting: '{Greeting}',
            opening: '{Opening}',
            body: '{Opening}',
            closing: '{Opening}',
        },
        templates: [],
    }

    componentDidMount() {
        fetch(this.props.backendUrl + "templates")
            .then(res => res.json())
            .then(data => this.setState({
                templates: data
            }))
    }

    toggleTemplate = (template) => {
        if (template.type === "greeting") {
            this.setState({
                letter: {
                    greeting: template.body,
                    opening: this.state.letter.opening,
                }
            })
        } else if (template.type === "opening") {
            this.setState({
                letter: {
                    greeting: this.state.letter.greeting,
                    opening: template.body
                }
            })
        }
    }

    renderGreetings = () => {
        const greetings = this.state.templates.filter(item => item.type === "greeting")
        return greetings.map(template =>
            <Template key={template.id}
                      template={template}
                      toggleTemplate={this.toggleTemplate}
                      currentTemplate={this.state.currentTemplate}/>)
    }

    renderOpenings = () => {
        const greetings = this.state.templates.filter(item => item.type === "opening")
        return greetings.map(template =>
            <Template key={template.id}
                      template={template}
                      toggleTemplate={this.toggleTemplate}
                      currentTemplate={this.state.currentTemplate}/>)
    }

    cleanMe = (object) => {
        if (object) {
            object = object.replace("{contact}", this.props.company.contact)
            object = object.replace("{job_title}", this.props.company.job_title)
            object = object.replace("{company_name}", this.props.company.company_name)
            return object
        }

    }


    renderCoverLetter = () => {
        let greeting = this.cleanMe(this.state.letter.greeting)
        let opening = this.cleanMe(this.state.letter.opening)
        let body = this.cleanMe(this.state.letter.body)


        return (
            <>
                <p>
                    {greeting}
                    <br /><br />
                    {opening}
                </p>
            </>
        )
    }

    render() {
        console.log(this.props.company)

        return(
            <div className="content-wrapper" id="cover-letter-generator">

                {this.props.company.company_name ? (

                    <>
                        <div className="doc-wrapper" id="template-list">
                            <div className="template-sub-wrapper">
                                <h3>Greetings</h3>
                                {this.renderGreetings()}
                                <h3>Openings</h3>
                                {this.renderOpenings()}
                            </div>

                        </div>
                        <div className="doc-wrapper" id="cover-letter-content">
                            <h3>Cover Letter</h3>
                            {this.renderCoverLetter()}
                        </div>

                    </>
                    )
                : null}

            </div>
        )
    }
}

export default CoverLetterTemplates