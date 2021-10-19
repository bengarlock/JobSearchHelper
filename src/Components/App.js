import "../Stylesheets/App.css"
import Header from "./Header";
import Menu from "./Menu";
import Content from "./Content";
import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getJobApplications } from "../Actions/JobApplications";


class App extends React.Component {

    static propTypes = {
        applications: PropTypes.array.isRequired,
    }

    state = {
        current_page: '',
        company_name: '',
        job_title: '',
        url: '',
        technologies: [],
        applications: [],
        contact: '',
    }

    componentDidMount = async () => {
        this.props.getJobApplications()
    }


    togglePage = (page) => {
        this.setState({
            current_page: page
        })
    }

    updateTechnologies = (tech, status) => {
        if (status) {
            let newArray = [...this.state.technologies]
            newArray.push(tech)
            this.setState({
                technologies: newArray
            })
        } else {
            let newArray = [...this.state.technologies]
            const index = newArray.indexOf(tech)
            newArray.splice(index, 1)
            this.setState({
                technologies: newArray
            })
        }
    }

    updateApplications = (application, action) => {
        if (action === "remove") {
            let newApplications = [...this.state.applications]
            let updatedApplications = newApplications.filter(item => item.id !== application.id)
            this.setState({
                applications: updatedApplications
            })
        } else if (action === "add") {
            let newApplications = [...this.state.applications, application]
            this.setState({
                applications: newApplications
            })
        } else if (action === "reset") {
            const applications = [...this.state.applications]
            this.setState({
                current_page: '',
                company_name: '',
                job_title: '',
                url: '',
                technologies: [],
                applications: applications,
                contact: '',
            })
        }
    }

    setCompany = (company) => {
        this.updateApplications(company, "add")

        this.setState({
            id: company.id,
            company_name: company.company_name,
            job_title: company.job_title,
            url: company.url,
            contact: company.contact,
        })
    }


    render() {
        return (
            <>
                <Header company={this.state}/>
                <div id="menu-content-wrapper">
                    <Menu currentPage={this.state.current_page}
                          togglePage={this.togglePage} />
                    <Content currentPage={this.state.current_page}
                             setCompany={this.setCompany}
                             company={this.state}
                             updateTechnologies={this.updateTechnologies}
                             updateApplications={this.updateApplications}
                             />
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    //state.resyRestaurants calls the reducer and .resyRestaurants calls the action
    applications: state.applications.applications
})

export default connect(mapStateToProps, { getJobApplications })(App);
