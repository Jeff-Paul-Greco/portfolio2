import React, { Component } from "react";
import Email from "../../images/email.png";
import Github from "../../images/github.png";
import Resume from "../../images/resume.png";
import Linkedin from "../../images/linkedin.png";

class Contact extends Component {

    render() {

        return (

            <div className="container">
                <div className="row">
                    <div className="col m7">
                        <div className="card z-depth-5">

                            <div className="card-content">
                                <div className="row">
                                    <form className="col m12">
                                        <div className="row contact-head">
                                            <span className="card-title" id="contact-text">Contact</span>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col m6">
                                                <input id="first_name" type="text" className="validate" />
                                                <label htmlFor="first_name">First Name</label>
                                            </div>
                                            <div className="input-field col m6">
                                                <input id="last_name" type="text" className="validate" />
                                                <label htmlFor="last_name">Last Name</label>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col m12">
                                                <input id="email" type="email" className="validate" />
                                                <label htmlFor="email">Email</label>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col m12">
                                                <textarea id="textarea1" className="materialize-textarea"></textarea>
                                                <label htmlFor="textarea1">Message</label>
                                            </div>
                                        </div>
                                        <button className="btn waves-effect waves-purple light-blue black-text darken-text-2"
                                            id="submit">submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col m5 center">
                        <div className="card z-depth-5">
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
                                <a href="./assets/docs/Greco Resume.pdf"
                                    target="_blank"><img src={Resume} className="icon" alt="resume" id="last-icon" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Contact;