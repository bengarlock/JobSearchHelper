import React from 'react'



class Application extends React.Component {

    onClickHandler = () => {
        this.props.toggleApplication(this.props.application.id)
    }

    render() {
        return(
            <div className={this.props.application.id === this.props.currentApplication ?
                "social-link-selected" : "social-link"}
                 onClick={this.onClickHandler}>
                {this.props.application.company_name}
            </div>
        )
    }
}

export default Application