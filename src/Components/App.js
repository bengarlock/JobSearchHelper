import "../Stylesheets/App.css"
import Menu from "./Menu";
import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getJobApplications } from "../Actions/JobApplications";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Create from "./Create"
import CoverLetterTemplates from "./CoverLetterTemplates";
import SocialLinks from "./SocialLinks";
import Applications from './Applications'
import Reset from "./Reset";


class App extends React.Component {

    static propTypes = {
        applications: PropTypes.array.isRequired,
    }


    componentDidMount = async () => {
        this.props.getJobApplications()
    }

    render() {
        return (
            <>
                <Router basename={"/jobapplications"}>
                    <Menu />
                    <Route exact path="/"><Redirect to="/home" /></Route>
                    <Route path="/home" component={Create} />
                    <Route path="/coverletter" component={CoverLetterTemplates} />
                    <Route path="/sociallinks" component={SocialLinks} />
                    <Route path="/applications" component={Applications} />
                    <Route path="/reset" component={Reset} />
                </Router>
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    applications: state.applications.applications
})

export default connect(mapStateToProps, { getJobApplications })(App);
