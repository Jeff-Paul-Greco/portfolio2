import React, { Component } from "react";
import Email from "../images/email.png";
import Github from "../images/github.png";
import Resume from "../images/resume.png";
import Linkedin from "../images/linkedin.png";
import axios from "axios";


class Contact extends Component {

    state = {
        firstName: "",
        lastName: "",
        email: "",
        message: ""
    }

    handleClick = event => {
        event.preventDefault();
        let selected = event.target.id;
        switch (selected) {
            case "firstName":
                this.setState({ firstName: event.target.value })
                break;
            case "lastName":
                this.setState({ lastName: event.target.value })
                break;
            case "email":
                this.setState({ email: event.target.value })
                break;
            case "message":
                this.setState({ message: event.target.value })
                break;
            default:
            break;
        }
    };

    handleSubmit = (event) => {
        event.preventDefault();

        let dataToSubmit = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            message: this.state.message
        }
        console.log(dataToSubmit)
        alert("message sent to jeffpgreco@gmail.com");
        axios.post("/api/sendMail", dataToSubmit)
        
    };

    render() {

        return (

            <div className="container">
                <div className="row">
                    <div className="col m7">
                        <div className="card z-depth-5">

                            <div className="card-content">
                                <div className="row">
                                    <form className="col m12" onSubmit={this.handleSubmit}>
                                        <div className="row contact-head">
                                            <span className="card-title" id="contact-text">Contact</span>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col m6">
                                                <input id="firstName" type="text" value={this.statefirstName} onChange={this.handleClick} />
                                                <label htmlFor="firstName">First Name</label>
                                            </div>
                                            <div className="input-field col m6">
                                                <input id="lastName" type="text" value={this.state.lastName} onChange={this.handleClick} />
                                                <label htmlFor="lastName">Last Name</label>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col m12">
                                                <input id="email" type="email" value={this.state.email} onChange={this.handleClick} />
                                                <label htmlFor="email">Email</label>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col m12">
                                                <textarea id="message" value={this.state.message} onChange={this.handleClick} className="materialize-textarea"></textarea>
                                                <label htmlFor="message">Message</label>
                                            </div>
                                        </div>
                                        <button className="btn waves-effect waves-purple light-blue black-text darken-text-2"
                                            id="submit" onClick={this.handleSubmit}>submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col m5 center">
                        <div className="row" id="contact-links">
                            <div className="card z-depth-5" id="links-card">
                                <div className="card-content black-text">
                                    <span className="card-title" id="phone">(704)604-9105</span>
                                </div>
                                <div className="card-action" id="icons">
                                    <a href="mailto:jeffpgreco@gmail.com" target="_top"><img src={Email}
                                        className="icon" alt="email" /></a>
                                    <a href="https://github.com/Jeff-Paul-Greco" rel="noopener noreferrer" target="_blank"><img src={Github}
                                        className="icon" alt="github" /></a>
                                    <a href="https://www.linkedin.com/in/jeff-greco-019a28189" rel="noopener noreferrer" target="_blank"><img
                                        src={Linkedin} className="icon" alt="linkedin" /></a>
                                    <a href="https://drive.google.com/open?id=1EGxcgCeX5JwdVODhA8utjJ10ZZQopUyX" rel="noopener noreferrer"
                                        target="_blank"><img src={Resume} className="icon" alt="resume" id="last-icon" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="card z-depth-5" id="skill-card">
                                <div className="card-content black-text">
                                    <span className="card-title" id="skills">Skills</span>
                                </div>
                                <div className="card-action" id="elim-padding">
                                    <div className="row" id="skills-list">
                                        <div className="col m6 center">
                                            <ul className="skill-list-col">
                                                <li><i className="material-icons">chevron_right</i>Javascript</li>
                                                <li><i className="material-icons">chevron_right</i>React</li>
                                                <li><i className="material-icons">chevron_right</i>MySQL</li>
                                                <li><i className="material-icons">chevron_right</i>MongoDB</li>
                                                <li><i className="material-icons">chevron_right</i>Node.js</li>
                                            </ul>
                                        </div>
                                        <div className="col m6 center">
                                            <ul className="skill-list-col">
                                                <li><i className="material-icons">chevron_right</i>HTML</li>
                                                <li><i className="material-icons">chevron_right</i>CSS</li>
                                                <li><i className="material-icons">chevron_right</i>Bootstrap</li>
                                                <li><i className="material-icons">chevron_right</i>Materialize</li>
                                                <li><i className="material-icons">chevron_right</i>CSS Grid</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Contact;