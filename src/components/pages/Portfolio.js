import React, { Component } from "react";
import CustomCorner from "../../images/custom-corner.PNG"
import GoogleBooks from "../../images/google-books.PNG"
// import Carousel from 'react-responsive-carousel';

class Portfolio extends Component {

    render() {
        return (
            // <Carousel showArrows={true} >
            //     <div>
            //         <img src="#!" alt="" />
            //         <p className="legend">Legend 1</p>
            //     </div>
            //     <div>
            //         <img src="#!" alt="" />
            //         <p className="legend">Legend 2</p>
            //     </div>
            //     <div>
            //         <img src="#!" alt="" />
            //         <p className="legend">Legend 3</p>
            //     </div>
            //     <div>
            //         <img src="#!" alt="" />
            //         <p className="legend">Legend 4</p>
            //     </div>
            //     <div>
            //         <img src="assets/5.jpeg" alt="" />
            //         <p className="legend">Legend 5</p>
            //     </div>
            //     <div>
            //         <img src="assets/6.jpeg" alt="" />
            //         <p className="legend">Legend 6</p>
            //     </div>
            // </Carousel>
            <div className="carousel carousel-slider">

                <div className="carousel-fixed-item center-align center" id="carousel-footer">

                    <h3 id="project">My Projects</h3>
                    <a href="#!" className="btn-large waves-effect waves-purple light-blue black-text darken-text-2" id="prev">prev</a>
                    <a href="#!" className="btn-large waves-effect waves-purple light-blue black-text darken-text-2" id="next">next</a>
                </div>

                <div src={CustomCorner} alt="custom-corner" className="carousel-item black white-text pointer" id="custom-corner">
                <p id="click-project"></p>
                </div>

                <div src={GoogleBooks} alt="google-books" className="carousel-item black white-text pointer" id="custom-corner">
                <p id="click-project"></p>
                </div>

                <div className="carousel-item black white-text pointer" id="google-books">
                    <p id="click-project"></p>
                </div>

                <div className="carousel-item black white-text pointer" id="scraper">
                    <p id="click-project"></p>
                </div>

                <div className="carousel-item black white-text pointer" id="clicky">
                    <p id="click-project"></p>
                </div>

                <div className="carousel-item black white-text pointer" id="trivia">
                    <p id="click-project"></p>
                </div>

                <div className="carousel-item black white-text pointer" id="doomsday">
                    <p id="click-project"></p>
                </div>

                <div className="carousel-item black white-text pointer" id="house-party">
                    <p id="click-project"></p>
                </div>

                <div className="carousel-item black white-text pointer" id="train">
                    <p id="click-project"></p>
                </div>

                <div className="carousel-item black white-text pointer" id="friend">
                    <p id="click-project"></p>
                </div>

                <div className="carousel-item black white-text pointer" id="burger">
                    <p id="click-project"></p>
                </div>

                <div className="carousel-item black white-text pointer" id="liri">
                    <p id="click-project"></p>
                </div>

                <div className="carousel-item black white-text pointer" id="bamazon">
                    <p id="click-project"></p>
                </div>

            </div>
        );
    }
};

export default Portfolio;