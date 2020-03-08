import React, { Component } from "react";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Modal from "./Modal";

class PortfolioContainer extends Component {
  state = {
    currentPage: "",
    currentProject: ""
  };

  componentDidMount = () => this.setState({ currentPage: "About" });

  handlePageChange = page => {
    this.setState({ currentPage: page });
    console.log(this.state)
  };

  handleClickProject = event => {
    event.preventDefault()
    let selected = event.target.id
    console.log(selected)
    this.setState({ currentProject: selected });
  };

  renderPage = () => {
    if (this.state.currentPage === "About") {
      return <About />;
    } else if (this.state.currentPage === "Portfolio") {
      return <Portfolio
        handleClickProject={this.handleClickProject}
      />;
    } else if (this.state.currentPage === "Contact") {
      return <Contact />;
    }
  };

  render() {
    return (
      <div>
        <Navbar
          handlePageChange={this.handlePageChange}
        />
        {this.renderPage()}
        <Modal 
          name={this.state.currentProject}
          test="hello"
        />
        <Footer />
      </div>
    );
  }
}

export default PortfolioContainer;