import "../Stylesheets/App.css"
import Header from "./Header";
import Menu from "./Menu";
import Content from "./Content";
import React from 'react'

class App extends React.Component {

    state = {
        current_page: '',
        company_name: '',
        job_title: '',
        url: '',
        technologies: []
    }

    togglePage = (page) => {
        this.setState(this.setState({
            current_page: page
        }))
    }

    updateTechnologies = (tech, status) => {
        console.log(tech, status)
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
            company_name: company.company_name,
            job_title: company.job_title,
            url: company.url,
        })
    }


    render() {
        console.log(this.state.technologies)
        return (
            <>
                <Header company={this.state}/>
                <div id="menu-content-wrapper">
                    <Menu currentPage={this.state.current_page}
                          togglePage={this.togglePage} />
                    <Content currentPage={this.state.current_page}
                             setCompany={this.setCompany}
                             company={this.state}
                             updateTechnologies={this.updateTechnologies}/>
                </div>

            </>
        );
    }
}

export default App;
