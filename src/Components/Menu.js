
import React from "react"
import "../Stylesheets/Menu.css"

class Menu extends React.Component {

    pageToggle = (e) => {
        this.props.togglePage(e.target.id)
    }


    render() {
        return(
            <div id="menu-wrapper">
                <ul>
                    <li className={this.props.currentPage === "company-info" ?
                        "menu-item-selected" : "menu-item"}
                        onClick={this.pageToggle}
                        id="company-info">Company Info
                    </li>

                    <li className={this.props.currentPage === "cover-letter" ?
                        "menu-item-selected" : "menu-item"}
                        onClick={this.pageToggle}
                        id="cover-letter">Cover Letter Templates
                    </li>

                    <li className={this.props.currentPage === "social-links" ?
                        "menu-item-selected" : "menu-item"}
                        onClick={this.pageToggle}
                        id="social-links">Social Links
                    </li>
                    <li className={this.props.currentPage === "applications" ?
                        "menu-item-selected" : "menu-item"}
                        onClick={this.pageToggle}
                        id="applications">Applications
                    </li>
                    <li className={this.props.currentPage === "reset" ?
                        "menu-item-selected" : "menu-item"}
                        onClick={this.pageToggle}
                        id="reset">Reset
                    </li>
                </ul>
            </div>
        )
    }
}

export default Menu