import React from "react"
import "../Stylesheets/TechButton.css"


class TechButton extends React.Component {

    state = {
        clicked: false
    }

    onClickHandler = (e) => {
        if (this.state.clicked) {
            e.target.style.backgroundColor = "#fff"
            this.props.updateTechnologies(this.props.tech, false)
        } else {
            e.target.style.backgroundColor = "#095a37"
            this.props.updateTechnologies(this.props.tech, true)
        }
        this.setState({
            clicked: !this.state.clicked
        })
    }

    render() {
        return(
            <button className="tech-button" onClick={this.onClickHandler}>
                {this.props.tech}
            </button>
        )
    }
}

export default TechButton