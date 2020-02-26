import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import CustomCorner from "../../images/custom-corner.PNG"
import GoogleBooks from "../../images/google-books.PNG"
import Scraper from "../../images/scraper.PNG"
import Clicky from "../../images/clicky.PNG"
import Trivia from "../../images/trivia.png"
import Doomsday from "../../images/doomsday.png"
import HouseParty from "../../images/house-party.png"
import Train from "../../images/train.png"
import Friend from "../../images/friend-finder.png"
import Burger from "../../images/burger.png"
import Liri from "../../images/liri.png"
import Bamazon from "../../images/bamazon.png"

class Portfolio extends Component {
    render() {
        return (
            <div className="portfolio-wrapper">
                <Carousel
                    showIndicators={true}
                    showStatus={false}
                    showThumbs={false}
                    height={"100%"}
                    axis={"horizontal"}
                    infiniteLoop={true}
                >
                    <div>
                        <img src={CustomCorner} alt="custom-corner" />
                    </div>
                    <div>
                        <img src={GoogleBooks} alt="google-books" />
                    </div>
                    <div>
                        <img src={Scraper} alt="scraper" />
                    </div>
                    <div>
                        <img src={Clicky} alt="clicky" />
                    </div>
                    <div>
                        <img src={Trivia} alt="trivia" />
                    </div>
                    <div>
                        <img src={HouseParty} alt="house-party" />
                    </div>
                    <div>
                        <img src={Doomsday} alt="doomsday" />
                    </div>
                    <div>
                        <img src={Train} alt="train" />
                    </div>
                    <div>
                        <img src={Friend} alt="friend" />
                    </div>
                    <div>
                        <img src={Burger} alt="burger" />
                    </div>
                    <div>
                        <img src={Liri} alt="liri" />
                    </div>
                    <div>
                        <img src={Bamazon} alt="bamazon" />
                    </div>
                </Carousel>
            </div>
        );
    }
};

export default Portfolio