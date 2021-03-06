import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import CustomCorner from "../images/custom-corner.PNG"
import GoogleBooks from "../images/google-books.PNG"
import Scraper from "../images/scraper.PNG"
import Clicky from "../images/clicky.PNG"
import Trivia from "../images/trivia.png"
import HouseParty from "../images/house-party.png"
import Train from "../images/train.png"
import Burger from "../images/burger.png"
import Liri from "../images/liri.png"
import Chat from "../images/chat.PNG"

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
                    <div id="custom-corner">
                        <img src={CustomCorner} alt="custom-corner" />
                    </div>
                </a>

                <a href="#modal-0" className="modal-trigger" onClick={(event) => props.handleClickProject(event)}>
                    <div id="google-books">
                        <img src={GoogleBooks} alt="google-books" />
                    </div>
                </a>

                <a href="#modal-0" className="modal-trigger" onClick={(event) => props.handleClickProject(event)}>
                    <div id="chat">
                        <img src={Chat} alt="chat" />
                    </div>
                </a>

                <a href="#modal-0" className="modal-trigger" onClick={(event) => props.handleClickProject(event)}>
                    <div id="scraper">
                        <img src={Scraper} alt="scraper" />
                    </div>
                </a>

                <a href="#modal-0" className="modal-trigger" onClick={(event) => props.handleClickProject(event)}>
                    <div id="clicky">
                        <img src={Clicky} alt="clicky" />
                    </div>
                </a>

                <a href="#modal-0" className="modal-trigger" onClick={(event) => props.handleClickProject(event)}>
                    <div id="trivia">
                        <img src={Trivia} alt="trivia" />
                    </div>
                </a>

                <a href="#modal-0" className="modal-trigger" onClick={(event) => props.handleClickProject(event)}>
                    <div id="house-party">
                        <img src={HouseParty} alt="house-party" />
                    </div>
                </a>

                <a href="#modal-0" className="modal-trigger" onClick={(event) => props.handleClickProject(event)}>
                    <div id="train">
                        <img src={Train} alt="train" />
                    </div>
                </a>

                <a href="#modal-0" className="modal-trigger"  onClick={(event) => props.handleClickProject(event)}>
                    <div id="liri">
                        <img src={Liri} alt="liri" />
                    </div>
                </a>

            </Carousel>
            
        </div>
    );
};

export default Portfolio