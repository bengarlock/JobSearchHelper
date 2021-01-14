import React from "react"
import "../Stylesheets/CompanyInfo.css"

class Content extends React.Component {

    state = {
        company_name: '',
        job_title: '',
        url: '',
    }

    onChangeHandler = (e) => {
        if (e.target.name === "company-name") {
            this.setState({
                company_name: e.target.value
            })
        } else if (e.target.name === "job-title") {
            this.setState({
                job_title: e.target.value
            })
        } else if (e.target.name === "url") {
            this.setState({
                url: e.target.value
            })
        }
    }

    onSubmitHandler = (e) => {
        e.preventDefault()
        this.props.setCompany(this.state)
        // this.setState({
        //     company_name: '',
        //     job_title: '',
        //     url: '',
        // })
    }

    render() {
        return(
            <div id="content">
                <h3>Company Info</h3>
                <form id="company-form" onSubmit={this.onSubmitHandler}>
                    <input name="company-name"
                           onChange={this.onChangeHandler}
                           value={this.state.company_name}
                           placeholder="Company Name"
                           autoComplete="off"/>
                           <br />
                    <input name="job-title"
                           onChange={this.onChangeHandler}
                           value={this.state.job_title}
                           placeholder="Job Title"
                           autoComplete="off"/>
                           <br />
                    <input name="url"
                           onChange={this.onChangeHandler}
                           value={this.state.url}
                           placeholder="Listing URL"
                           autoComplete="off"/>
                           <br />
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default Content