import React, { Component } from "react";
import Pic from "../images/pic.png"

class About extends Component {

    render() {

        return (

            <div className="container">
                <div className="row">
                    <div className="col s12 m12">
                        <div className="card horizontal z-depth-5" id="horizontal">
                            <div className="card-image">
                                <img src={Pic} id="profile-pic" alt="pic"></img>
                                <span className="card-title" id="pic-text">About Me</span>
                            </div>
                            <div className="card-content">
                                <p>Full Stack Web Developer with a certificate from the University of
                                    North Carolina Charlotte. I am skilled in using Javascript/ES6,
                                    React.js, MongoDB/Mongoose, MySQL/Sequelize, Express.js, Html and CSS.
                                    I also have experience with various CSS libraries including Bootstrap,
                                    Materialize and CSS Grid. I am a well rounded developer with a strong
                                    focus on having an intuitive and efficient user experience. I find my
                                    approach to parsing and assimilating new knowledge as well as my ability
                                    to work well with people of all different personalities to be amongst my
                                    greatest assets. I look forward to growing with a company and getting
                                new opportunities to improve my abilities. </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        );
    }
}

export default About;