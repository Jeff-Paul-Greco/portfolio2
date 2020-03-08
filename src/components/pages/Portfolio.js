import React from 'react';
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

function Portfolio(props) {

    return (
        <div className="portfolio-wrapper">
            <Carousel
                showIndicators={true}
                showStatus={false}
                showThumbs={false}
                height={"100%"}
                axis={"horizontal"}
                infiniteLoop={true}
                labels={{ leftArrow: "prev" }}
                autoPlay={true}
                interval={6000}
                transitionTime={3000}
            >
                <a href="#modal-0" className="modal-trigger" onClick={(event) => props.handleClickProject(event)}>
                    <div index="0">
                        <img src={CustomCorner} alt="custom-corner" />
                    </div>
                </a>

                <a href="#modal-0" className="modal-trigger" onClick={(event) => props.handleClickProject(event)}>
                    <div index="1">
                        <img src={GoogleBooks} alt="google-books" />
                    </div>
                </a>

                <a href="#modal-0" className="modal-trigger" onClick={(event) => props.handleClickProject(event)}>
                    <div index="2">
                        <img src={Scraper} alt="scraper" />
                    </div>
                </a>

                <a href="#modal-0" className="modal-trigger" onClick={(event) => props.handleClickProject(event)}>
                    <div index="clicky">
                        <img src={Clicky} alt="clicky" />
                    </div>
                </a>

                <a href="#modal-0" className="modal-trigger" onClick={(event) => props.handleClickProject(event)}>
                    <div index="trivia">
                        <img src={Trivia} alt="trivia" />
                    </div>
                </a>

                <a href="#modal-0" className="modal-trigger" onClick={(event) => props.handleClickProject(event)}>
                    <div index="house-party">
                        <img src={HouseParty} alt="house-party" />
                    </div>
                </a>

                <a href="#modal-0" className="modal-trigger" onClick={(event) => props.handleClickProject(event)}>
                    <div index="doomsday">
                        <img src={Doomsday} alt="doomsday" />
                    </div>
                </a>

                <a href="#modal-0" className="modal-trigger" onClick={(event) => props.handleClickProject(event)}>
                    <div index="train">
                        <img src={Train} alt="train" />
                    </div>
                </a>

                <a href="#modal-0" className="modal-trigger" onClick={(event) => props.handleClickProject(event)}>
                    <div index="friend">
                        <img src={Friend} alt="friend" />
                    </div>
                </a>

                <a href="#modal-0" className="modal-trigger" onClick={(event) => props.handleClickProject(event)}>
                    <div index="burger">
                        <img src={Burger} alt="burger" />
                    </div>
                </a>

                <a href="#modal-0" className="modal-trigger"  onClick={(event) => props.handleClickProject(event)}>
                    <div index="liri">
                        <img src={Liri} alt="liri" />
                    </div>
                </a>

                <a href="#modal-0" className="modal-trigger" onClick={(event) => props.handleClickProject(event)}>
                    <div index="bamazon">
                        <img src={Bamazon} alt="bamazon" />
                    </div>
                </a>

            </Carousel>
            
        </div>
    );
};

export default Portfolio