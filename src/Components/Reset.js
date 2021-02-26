import React from 'react'


class Reset extends React.Component {

    state = {
        clicked: false
    }


    onClickHandler = () => {
        if (this.state.clicked) {
            this.props.updateApplications(null, "reset")
        } else {
            this.setState({ clicked: true })
        }
    }


    render() {
        return(
            <div className="content-wrapper">
                {this.state.clicked ?
                    <button onClick={this.onClickHandler} style={{backgroundColor: 'red'}}>Confirm Reset?</button>
                    :
                    <button onClick={this.onClickHandler}>Reset Form</button>}
            </div>

        )
    }
}

export default Reset