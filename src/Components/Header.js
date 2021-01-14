import React from "react"
import "../Stylesheets/Header.css"

class Header extends React.Component {

    render() {
        return(
            <div>
                <div id="header">
                    Job Search Helper
                </div>
                {this.props.company.company_name ?
                    <div id="company-name-header">{this.props.company.company_name}</div> : null}
            </div>
        )
    }
}

export default Header