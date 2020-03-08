import React, { Component } from "react";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Modal from "./Modal";

const projects = {
  customCorner: {
      title: "Custom Corner Demo",
      description: "Custom Corner is a Full MERN Stack site developed for an interior design client. The app aggregates furniture from various vendors and allows the user to save and stage furniture for various seperate clients as well as pin saved furniture from a client's tackboard to Pinterest.com. The code is proprietary and user accounts are closed to the public, so a demo site has been linked below which displays the app's functionality.",
      firstChoice: ["https://jeff-paul-greco.github.io/Custom-Corner-Demo/", "Demo Site"],
      secondChoice: ["https://custom-corner.com/", "Site"]
  },
  googleBooks: {
      title: "React Book Search",
      description: "Full MERN Stack app that searches Google Books' API and saves searched books to a favorites list!",
      firstChoice: ["https://cryptic-dawn-75768.herokuapp.com/", "Site"],
      secondChoice: ["https://github.com/Jeff-Paul-Greco/google-books-search", "Code"]
  }

}

class PortfolioContainer extends Component {
  state = {
    currentPage: "",
    currentProject: ""
  };

  componentDidMount = () => this.setState({ currentPage: "About" });

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleClickProject = event => {
    event.preventDefault()
    let selected = event.target.index
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
          key={this.state.currentProject}
          test="hello"
        />
        <Footer />
      </div>
    );
  }
}

export default PortfolioContainer;