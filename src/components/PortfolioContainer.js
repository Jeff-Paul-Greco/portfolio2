import React, { Component } from "react";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Navbar from "./Navbar";

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
        return <Portfolio />;
      } else if (this.state.currentPage === "Contact") {
        return <Contact />;
      } 
    };
  
    render() {
      return (
        <div>
          <Navbar/>
          {this.renderPage()}
        </div>
      );
    }
  }

  export default PortfolioContainer;