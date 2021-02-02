import React from 'react'
import "../Stylesheets/Job.css"

class Job extends React.Component {

    onClickHandler = () => {
        navigator.clipboard.writeText(this.props.job)
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