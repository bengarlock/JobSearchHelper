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

    }

    togglePage = (page) => {
        this.setState(this.setState({
            current_page: page
        }))
    }

    setCompany = (company) => {
        this.setState({
            company_name: company.company_name,
            job_title: company.job_title,
            url: company.url,
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
                             company={this.state}/>
                </div>

            </>
        );
    }
}

export default App;
