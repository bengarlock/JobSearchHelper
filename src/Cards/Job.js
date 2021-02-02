import React from 'react'
import "../Stylesheets/Job.css"

class Job extends React.Component {

    onClickHandler = (e) => {
        navigator.clipboard.writeText(this.props.job)

        if (document.getElementById("job-selected")) {

            const oldButton = document.getElementById("job-selected")
            console.log(oldButton)
            oldButton.id = null
        }

        const button = e.target
        button.id = "job-selected"

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