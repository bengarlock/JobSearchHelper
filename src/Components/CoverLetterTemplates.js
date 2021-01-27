import React from "react"
import "../Stylesheets/CoverLetterTemplate.css"
import coverLetter from "../Media/Cover Letter - Template.docx"
import Template from "../Cards/Template";
import ReactHtmlParser from 'react-html-parser';


import Document from 'docx'
import { saveAs } from "file-saver";


class CoverLetterTemplates extends React.Component {

    state = {
        value: "Copy",
        letter: {
            header: '',
            greeting: '{Greeting}',
            opening: '{Opening}',
            body: [],
            closing: '',
        },
        templates: [],
    }

    componentDidMount() {
        fetch(this.props.backendUrl + "templates")
            .then(res => res.json())
            .then(data => this.setState({
                templates: data,
            }))
    }

    toggleTemplate = (template) => {
        if (template.type === "greeting") {
            this.setState({
                letter: {
                    greeting: template.body,
                    opening: this.state.letter.opening,
                    body: this.state.letter.body,
                    closing: this.state.letter.closing,
                }
            })
        } else if (template.type === "opening") {
            this.setState({
                letter: {
                    greeting: this.state.letter.greeting,
                    opening: template.body,
                    body: this.state.letter.body,
                    closing: this.state.letter.closing,
                }
            })
        } else if (template.type === "asset") {

            if (this.state.letter.body.includes(template.body)) {
                let currentBody = [...this.state.letter.body]
                currentBody = currentBody.filter(v => v !== template.body)

                this.setState({
                    letter: {
                        greeting: this.state.letter.greeting,
                        opening: this.state.letter.opening,
                        body: currentBody,
                        closing: this.state.letter.closing,
                    }
                })
            } else {
                let currentBody = [...this.state.letter.body]
                currentBody.push(template.body)
                this.setState({
                    letter: {
                        greeting: this.state.letter.greeting,
                        opening: this.state.letter.opening,
                        body: currentBody,
                        closing: this.state.letter.closing,
                    }
                })
            }

        } else if (template.type === "closing") {
            this.setState({
                letter: {
                    greeting: this.state.letter.greeting,
                    opening: this.state.letter.opening,
                    body: this.state.letter.body,
                    closing: template.body,
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

    renderAssetModules = () => {
        const assets = this.state.templates.filter(item => item.type === "asset")
        return assets.map(template =>
            <Template key={template.id}
                      template={template}
                      toggleTemplate={this.toggleTemplate}
                      currentTemplate={this.state.currentTemplate} />)
    }

    renderClosing = () => {
        const closings = this.state.templates.filter(item => item.type === "closing")
        return closings.map(template =>
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
            object = object.replace("{b}", "<b>")
            object = object.replace("{/b}", "</b>")
            return object
        }
    }

    renderCoverLetter = () => {
        let greeting = this.cleanMe(this.state.letter.greeting)
        let opening = this.cleanMe(this.state.letter.opening)
        let body = this.state.letter.body.map(item => this.cleanMe(item))
        let closing = this.cleanMe(this.state.letter.closing)


        // const doc = new Document()
        // doc.addSection({
        //     properties: {},
        //     children: [
        //         new doc.Paragraph({
        //             children: [
        //                 new doc.TextRun(greeting),
        //             ]
        //
        //         }),
        //         new doc.Paragraph({
        //             children: [
        //                 new doc.TextRun(opening),
        //             ]
        //
        //         }),
        //         new doc.Paragraph({
        //             children: [
        //                 new doc.TextRun(body),
        //             ]
        //
        //         })
        //     ]
        // })
        // doc.Packer.toBlob(doc).then(blob => {
        //     console.log(blob)
        //     saveAs(blob, "test.docx")
        //     console.log("finished")
        // })





        return (
            <>
                <div id="letter-text">
                    {ReactHtmlParser(greeting)}
                    <br /><br />
                    {ReactHtmlParser(opening)}
                    <br /><br />
                    {this.state.letter.body[0] ? ReactHtmlParser(body.join("")) : null}

                    {ReactHtmlParser(closing)}
                </div>
            </>
        )

    }

    render() {
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
                                <h3>Assets</h3>
                                {this.renderAssetModules()}
                                <h3>Closings</h3>
                                {this.renderClosing()}
                            </div>
                            <div className="doc-wrapper" id="doc-download">
                                <a href={coverLetter}
                                   className="doc-link"
                                   download={"Ben Garlock - "
                                   + `${this.props.company.company_name}`
                                   + " - "
                                   + `${this.props.company.job_title}`
                                   + " - Cover Letter.docx"}>Cover Letter Template
                                </a>
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