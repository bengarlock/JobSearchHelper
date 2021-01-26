import "../Stylesheets/App.css"
import Header from "./Header";
import Menu from "./Menu";
import Content from "./Content";
import React from 'react'

const backendUrl = "https://www.bengarlock.com:8080/"

class App extends React.Component {

    state = {
        current_page: '',
        company_name: '',
        job_title: '',
        url: '',
        technologies: [],
        applications: [],
        contact: '',
    }

    componentDidMount() {
        fetch(backendUrl + "jobapps/")
            .then(res => res.json())
            .then(applications => this.setState({
                applications: applications
            }))
    }


    togglePage = (page) => {
        this.setState(this.setState({
            current_page: page
        }))
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

    setCompany = (company) => {
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
                             backendUrl={backendUrl}/>
                </div>

            </>
        );
    }
}

export default App;
