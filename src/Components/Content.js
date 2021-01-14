import React from "react"
import CompanyInfo from "./CompanyInfo";
import "../Stylesheets/Content.css"
import CoverLetterTemplates from "./CoverLetterTemplates";
import SocialLinks from "./SocialLinks";

class Content extends React.Component {


    render() {
        return(
            <div id="content-wrapper">
                {this.props.currentPage === "company-info" ? <CompanyInfo
                    currentPage={this.props.currentPage}
                    setCompany={this.props.setCompany}
                    company={this.props.company}/> : null}

                {this.props.currentPage === "cover-letter" ? <CoverLetterTemplates
                    company={this.props.company}/> : null}

                {this.props.currentPage === "social-links" ? <SocialLinks
                    company={this.props.company}/> : null}
            </div>
        )
    }
}

export default Content