import React from 'react'
import "../Stylesheets/Job.css"

class Job extends React.Component {

    onClickHandler = (e) => {
        navigator.clipboard.writeText(this.props.job)
        const buttons = document.getElementsByClassName("job-selected")

        const button = e.target
        button.className = "job-selected"

    }

    render() {
        return(
            <button className="job" onClick={this.onClickHandler}>
                {this.props.job}
            </button>
        )
    }
}

export default Job