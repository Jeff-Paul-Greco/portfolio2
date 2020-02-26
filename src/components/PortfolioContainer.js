import React, { Component } from "react";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Navbar from "./Navbar";
import Footer from "./Footer";

import Demo from "./pages/Test"

class PortfolioContainer extends Component {
    state = {
      currentPage: ""
    };

    componentDidMount = () => this.setState({ currentPage: "About" });
  
    handlePageChange = page => {
      this.setState({ currentPage: page });
    };
  
    renderPage = () => {
      if (this.state.currentPage === "About") {
        return <About />;
      } else if (this.state.currentPage === "Portfolio") {
        return <Demo />;
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
          <Footer/>
        </div>
      );
    }
  }

  export default PortfolioContainer;