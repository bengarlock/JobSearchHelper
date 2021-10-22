import React from "react";
import ReactToPrint from "react-to-print";
import ReactHtmlParser from "react-html-parser";
import "../Stylesheets/CoverLetterPrint.css"

class CoverLetterPrint extends React.Component {
    render() {
        return (
            <div id="letter-text">

                <h1>Ben Garlock</h1>
                <span>
                    New York, NY |
                    646-241-6885 |
                    <a href="mailto:ben.garlock@gmail.com" target="_blank" rel="noreferrer">ben.garlock@gmail.com</a> |
                    <a href="https://github.com/bengarlock" target="_blank" rel="noreferrer">Github</a> |
                    <a href="https://ben-garlock.medium.com/" target="_blank" rel="noreferrer">Blog</a> |
                    <a href="https://www.linkedin.com/in/ben-garlock-18400578/" target="_blank" rel="noreferrer">LinkedIn</a> |
                    <a href="https://www.bengarlock.com/" target="_blank" rel="noreferrer">Portfolio</a> |
                </span>
                <br />
                <span id="job-title-header">
                    <b>{this.props.jobTitle.toUpperCase()}</b>
                </span>
                <br />
                <div id="line-separator">
                </div>
                <br />
                <br />

                {ReactHtmlParser(this.props.greeting)}
                <br /><br />
                {ReactHtmlParser(this.props.opening)}
                <br /><br />
                {ReactHtmlParser(this.props.body.join(""))}
                {ReactHtmlParser(this.props.closing)}
            </div>
        );
    }
}

class PrintCoverLetter extends React.Component {
    render() {
        return (
            <div>
                <title>Ben Garlock - {this.props.company_name} - {this.props.jobTitle} - Cover Letter</title>
                <ReactToPrint
                    trigger={() => <button href="#">Print to PDF</button>}
                    content={() => this.componentRef}
                    bodyClass={"test"}
                />

                <CoverLetterPrint  greeting={this.props.greeting}
                                   jobTitle={this.props.jobTitle}
                                   opening={this.props.opening}
                                   body={this.props.body}
                                   closing={this.props.closing}
                                   ref={(el) => (this.componentRef = el)} />
            </div>
        );
    }
}

export default PrintCoverLetter;
