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
    currentProject: "",
    currentDescription: "",
    button1: [],
    button2: []
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
    switch (selected) {
      case "custom-corner":
        this.setState({ currentProject: "Custom Corner Demo" });
        this.setState({ currentDescription: "Custom Corner is a Full MERN Stack site developed for an interior design client. The app aggregates furniture from various vendors and allows the user to save and stage furniture for various seperate clients as well as pin saved furniture from a client's tackboard to Pinterest.com. The code is proprietary and user accounts are closed to the public, so a demo site has been linked below which displays the app's functionality." })
        this.setState({ button1: ["https://jeff-paul-greco.github.io/Custom-Corner-Demo/", "Demo Site"] });
        this.setState({ button2: ["https://custom-corner.com/", "Site"] });
        break;
      case "google-books":
        this.setState({ currentProject: "React Book Search" });
        this.setState({ currentDescription: "Full MERN Stack app that searches Google Books' API and saves searched books to a favorites list!" })
        this.setState({ button1: ["https://cryptic-dawn-75768.herokuapp.com/", "Site"] });
        this.setState({ button2: ["https://github.com/Jeff-Paul-Greco/google-books-search", "Code"] });
        break;
      case "scraper":
        this.setState({ currentProject: "Mongo Web Scraper" });
        this.setState({ currentDescription: "Scrape and save articles from Eventhubs.com and save them with MongoDB!" })
        this.setState({ button1: ["https://arcane-reef-76455.herokuapp.com/", "Site"] });
        this.setState({ button2: ["https://github.com/Jeff-Paul-Greco/scraper", "Code"] });
        break;
      case "clicky":
        this.setState({ currentProject: "React Memory Game" });
        this.setState({ currentDescription: "A memory game using React. Try not to click the same image twice!" })
        this.setState({ button1: ["https://jeff-paul-greco.github.io/clicky-game", "Site"] });
        this.setState({ button2: ["https://github.com/Jeff-Paul-Greco/clicky-game", "Code"] });
        break;
        case "trivia":
        this.setState({ currentProject: "Trivia Game" });
        this.setState({ currentDescription: "Try to answer all of the questions before the time runs out!" })
        this.setState({ button1: ["https://jeff-paul-greco.github.io/Trivia-Game", "Site"] });
        this.setState({ button2: ["https://github.com/Jeff-Paul-Greco/Trivia-Game", "Code"] });
        break;
        case "house-party":
        this.setState({ currentProject: "House Party" });
        this.setState({ currentDescription: "Try to answer all of the questions before the time runs out!" })
        this.setState({ button1: ["https://jeff-paul-greco.github.io/project1", "Site"] });
        this.setState({ button2: ["https://github.com/Jeff-Paul-Greco/project1", "Code"] });
        break;
        case "train":
        this.setState({ currentProject: "Train Scheduler" });
        this.setState({ currentDescription: "Pick a train route, it's starting time, and the frequency with which it runs, and keep track of upcoming schedules!" })
        this.setState({ button1: ["https://jeff-paul-greco.github.io/train-scheduler", "Site"] });
        this.setState({ button2: ["https://github.com/Jeff-Paul-Greco/train-scheduler", "Code"] });
        break;
        case "burger":
        this.setState({ currentProject: "Eat Da Burger" });
        this.setState({ currentDescription: "This site utilizes express handlebars and MySQL to keep track of which burgers you have eaten. You can even add your own!" })
        this.setState({ button1: ["https://pure-beach-62697.herokuapp.com", "Site"] });
        this.setState({ button2: ["https://github.com/Jeff-Paul-Greco/burger", "Code"] });
        break;
        case "liri":
        this.setState({ currentProject: "Liri Node App" });
        this.setState({ currentDescription: "This Node app utilizes a variety of APIs. Liri - the Language Interpretation and Recognition Interface!" })
        this.setState({ button1: ["https://github.com/Jeff-Paul-Greco/liri-node-app", "Code"] });
        this.setState({ button2: ["https://github.com/Jeff-Paul-Greco/liri-node-app", "Info"] });
        break;
      default:
        break;
    }

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
          description={this.state.currentDescription}
          button1={this.state.button1}
          button2={this.state.button2}
        />
        <Footer />
      </div>
    );
  }
}

export default PortfolioContainer;