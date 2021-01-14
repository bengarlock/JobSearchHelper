import React from "react"
import "../Stylesheets/SocialLinks.css"

class SocialLinks extends React.Component {

    onClickHandler = (e) => {
        if (e.target.id === "linked-in") {
            navigator.clipboard.writeText('https://www.linkedin.com/in/ben-garlock-18400578/')
            e.target.style.backgroundColor = "#2a603a"
        } else if (e.target.id === "github") {
            navigator.clipboard.writeText('https://github.com/bengarlock')
            e.target.style.backgroundColor = "#2a603a"
        } else if (e.target.id === "portfolio") {
            navigator.clipboard.writeText('https://bengarlock.com')
            e.target.style.backgroundColor = "#2a603a"
        }
    }


    render() {
        return(
            <div id="content-wrapper">
                <h3>Social Links</h3>

                <div id="links-wrapper">
                    <div className='social-link' id="linked-in"
                         onClick={this.onClickHandler}> LinkedIn </div>
                    <div className='social-link'  id="github"
                         onClick={this.onClickHandler}>GitHub</div>
                    <div className='social-link'  id="portfolio"
                         onClick={this.onClickHandler}>Portfolio</div>
                </div>

            </div>
        )
    }
}

export default SocialLinks