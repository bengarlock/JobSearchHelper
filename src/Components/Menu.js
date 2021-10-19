
import React from "react"
import "../Stylesheets/Menu.css"
import { toggleMenu } from '../Actions/Menu'
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class Menu extends React.Component {

    static propTypes = {
        menu: PropTypes.string.isRequired,
    }

    pageToggle = (e) => {
        this.props.toggleMenu(e.target.id)
    }

    render() {
        return(
            <div id="menu-wrapper">

                <Link to={{pathname: "/home"}}
                      className={this.props.menu === "create" ?
                    "menu-item-selected" : "menu-item"}
                      onClick={this.pageToggle}
                      id="create">Create</Link>

                <Link to={{pathname: "/cover"}} className={this.props.menu === "cover-letter" ?
                    "menu-item-selected" : "menu-item"}
                      onClick={this.pageToggle}
                      id="cover-letter">Cover Letter</Link>

                <Link to={{pathname: "/sociallinks"}} className={this.props.menu === "social-links" ?
                    "menu-item-selected" : "menu-item"}
                      onClick={this.pageToggle}
                      id="social-links">Social Links
                </Link>

                <Link to={{pathname: "/applications"}} className={this.props.menu === "applications" ?
                    "menu-item-selected" : "menu-item"}
                      onClick={this.pageToggle}
                      id="applications">
                    Applications
                </Link>
                <Link to={{pathname: "/reset"}} className={this.props.menu === "reset" ?
                    "menu-item-selected" : "menu-item"}
                      onClick={this.pageToggle}
                      id="reset">
                    Reset
                </Link>





            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    //state.resyRestaurants calls the reducer and .resyRestaurants calls the action
    menu: state.menu.menu
})

export default connect(mapStateToProps, { toggleMenu })(Menu);