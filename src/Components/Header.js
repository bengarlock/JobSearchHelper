import React from "react"
import "../Stylesheets/Header.css"

class Header extends React.Component {

    render() {
        return(
            <>
                <div id="header">
                    Job Search Helper
                </div>
                {this.props.company.company_name ?
                    <div id="company-name-header">{this.props.company.company_name}</div> : null}
            </>
        )
    }
}

export default Header