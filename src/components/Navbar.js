import React, { Component } from "react";
import Resume from "../GrecoResume.pdf";

function Navbar(props) {

    return (

        <div className="navbar-fixed">
            <ul id="dropdown1" className="dropdown-content">
                <li><a name="about" className="waves-effect waves-purple white-text">About Me</a></li>
                <li className="divider"></li>
                <li><a name="portfolio" className="waves-effect waves-purple white-text">Portfolio</a></li>
                <li className="divider"></li>
                <li><a name="contact" className="waves-effect waves-purple white-text">Contact</a></li>
                <li className="divider"></li>
                <li><a name="resume"
                    className="waves-effect waves-purple white-text" target="_blank">Resume</a></li>
            </ul>
            <nav>
                <div className="nav-wrapper black z-depth-3">
                    <a className="brand-logo center" id="nav-logo">Jeff Greco</a>
                    <ul className="right hide-on-med-and-down">
                        <li><a className="dropdown-trigger" href="#!" data-target="dropdown1">Menu<i
                            className="material-icons right">arrow_drop_down</i></a></li>
                    </ul>
                    <ul className="right hide-on-large-only">
                        <li><a href="#" onClick={() => props.handlePageChange("Portfolio")}>Portfolio</a></li>
                        <li><a href="#" onClick={() => props.handlePageChange("Contact")}>Contact</a></li>
                        <li><a href={Resume} target="_blank" rel="noopener noreferrer">Resume</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    );

}

export default Navbar;