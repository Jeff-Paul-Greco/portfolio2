import React from "react";
import { Dropdown, Divider } from 'react-materialize';

function Navbar(props) {

    return (

        <div className="navbar-fixed">
            <nav>
                <div className="nav-wrapper black z-depth-3">
                    <a href="#!" onClick={() => props.handlePageChange("About")} className="brand-logo center" id="nav-logo">Jeff Greco</a>
                    <ul className="right hide-on-large-only">
                        <li><a href="#!" onClick={() => props.handlePageChange("Portfolio")}>Portfolio</a></li>
                        <li><a href="#!" onClick={() => props.handlePageChange("Contact")}>Contact</a></li>
                        <li><a href="https://drive.google.com/open?id=1EGxcgCeX5JwdVODhA8utjJ10ZZQopUyX" target="_blank" rel="noopener noreferrer">Resume</a></li>
                    </ul>
                    <ul className="right hide-on-med-and-down">
                        <Dropdown className="right"
                            options={{
                                alignment: 'right',
                                autoTrigger: true,
                                closeOnClick: true,
                                constrainWidth: true,
                                container: null,
                                coverTrigger: true,
                                hover: true,
                                inDuration: 150,
                                onCloseEnd: null,
                                onCloseStart: null,
                                onOpenEnd: null,
                                onOpenStart: null,
                                outDuration: 250
                            }}
                            trigger={<a href="#!" node="button" id="dropdown" >Menu
                            <i className="material-icons right">arrow_drop_down</i>
                            </a>}
                        >
                            <a href="#!" onClick={() => props.handlePageChange("About")} className="waves-effect waves-purple white-text">
                                About</a>
                                <Divider />
                            <a href="#!" onClick={() => props.handlePageChange("Contact")} className="waves-effect waves-purple white-text">
                                Contact</a>
                                <Divider />
                            <a href="#!" onClick={() => props.handlePageChange("Portfolio")} className="waves-effect waves-purple white-text">
                                Portfolio</a>
                                <Divider />
                            <a href="https://drive.google.com/open?id=1EGxcgCeX5JwdVODhA8utjJ10ZZQopUyX" target="_blank" rel="noopener noreferrer" className="waves-effect waves-purple white-text">
                                Resume</a>
                                <Divider />
                        </Dropdown>
                    </ul>
                </div>
            </nav>
        </div>
    );

}

export default Navbar;