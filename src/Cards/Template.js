import React from 'react'
import "../Stylesheets/Templates.css"


class Template extends React.Component {

    state = {
        clicked: ''
    }

    componentDidMount() {
        this.setState({
            clicked: false
        })
    }

    onClickHandler = () => {
        this.setState({
            clicked: !this.state.clicked
        })
        this.props.toggleTemplate(this.props.template)
    }

    render() {
        return(
            <div className={this.state.clicked ?
                "template-item-selected" : "template-item"} onClick={this.onClickHandler}>
                {this.props.template.name}
            </div>
        )
    }
}

export default Template