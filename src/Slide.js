import React from 'react';
import firstImg from './img/avengers.jpg';
import secondImg from './img/woman.jpg';
import thirdImg from './img/avengersW.jpg';
import fourthImg from './img/jokerC.jpg';
import fifthImg from './img/pirates.jpg';
import sixthImg from './img/fast9.jpg';
import Carousel from 'react-bootstrap/Carousel';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Slide = () => {
    AOS.init({
        duration: 1000
    });
    return (

        <Carousel controls={false} id="carousel" interval={6000} pause={false}>
            <Carousel.Item>
                <Jumbotron data-aos="fade-up">
                    <h2 className="f3">31 SEPT 2019</h2>
                    <h2 className="f2">AVENGERS - INFINITY WAR</h2>
                    <hr className="line" />
                    <p className="font-italic f5">
                        An unprecedented cinematic journey ten years in the making and spanning the entire Marvel Cinematic Universe, Marvel Studios' "Avengers: Infinity War" brings to the screen the ultimate, deadliest showdown of all time.
                        </p>
                    <p>
                        <Button className="bShow f4 ph4 pv2" variant="outline-danger">Book Show</Button>
                        <Button className="trailer f4 ph4 pv2" variant="outline-success">Watch Trailer</Button>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                    </p>
                </Jumbotron>
                <img
                    className="d-block w-100"
                    src={firstImg}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <Jumbotron data-aos="fade-up" >
                    <h2 className="f3">14 AUGUST 2020</h2>
                    <h2 className="f2">Wonder Woman - 1984</h2>
                    <hr className="line" />
                    <p className="font-italic f5">
                        Wonder Woman is finally returning to the big screen—and so is Steve Trevor. The first trailer for Wonder Woman 1984 dropped Sunday and revealed that Wonder Woman’s love interest, who died in the original film, has somehow been resurrected. He returns to her in 1984, when people still shopped at malls and the greatest superhero in the world wore oversized blazers with her sleeves pushed up.
                        </p>
                    <p>
                        <Button className="bShow f4 ph4 pv2" variant="outline-danger">Book Show</Button>
                        <Button className="trailer f4 ph4 pv2" variant="outline-success">Watch Trailer</Button>
                        <i className="fa fa-star first" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                    </p>
                </Jumbotron>
                <img
                    className="d-block w-100"
                    src={secondImg}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <Jumbotron>
                    <h2 className="f3">31 SEPT 2019</h2>
                    <h2 className="f2">AVENGERS - INFINITY WAR</h2>
                    <hr className="line" />
                    <p>
                        An unprecedented cinematic journey ten years in the making and spanning the entire Marvel Cinematic Universe, Marvel Studios' "Avengers: Infinity War" brings to the screen the ultimate, deadliest showdown of all time.
                        </p>
                    <p>
                        <Button className="bShow f4 ph4 pv2" variant="outline-danger">Book Show</Button>
                        <Button className="trailer f4 ph4 pv2" variant="outline-success">Watch Trailer</Button>
                        <i className="fa fa-star first" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                    </p>
                </Jumbotron>
                <img
                    className="d-block w-100"
                    src={thirdImg}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <Jumbotron>
                    <h2 className="f3">3 OCTOBER 2019</h2>
                    <h2 className="f2">J O K E R</h2>
                    <hr className="line" />
                    <p className="font-italic f5">
                        The story is set in 1981 and follows Arthur Fleck, a failed stand-up comedian who turns to a life of crime and chaos in Gotham City. Always feeling alone in a crowd, the joker looks for getting connected to others as he walks the streets. He lives a poor life with his mother.
                        </p>
                    <p>
                        <Button className="bShow f4 ph4 pv2" variant="outline-danger">Book Show</Button>
                        <Button className="trailer f4 ph4 pv2" variant="outline-success">Watch Trailer</Button>
                        <i className="fa fa-star first" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                    </p>
                </Jumbotron>
                <img
                    className="d-block w-100"
                    src={fourthImg}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <Jumbotron>
                    <h2 className="f3">11 MAY 2017</h2>
                    <h2 className="f2">PIRATES OF THE CARIBBEAN</h2>
                    <hr className="line" />
                    <p className="font-italic f5">
                        Pirates of the Caribbean (POTC) became a media franchise with the release of Pirates of the Caribbean: The Curse of the Black Pearl in 2003. As of October 2016, Pirates of the Caribbean attractions can be found at five Disney Parks, Experiences and Products.
                        </p>
                    <p>
                        <Button className="bShow f4 ph4 pv2" variant="outline-danger">Book Show</Button>
                        <Button className="trailer f4 ph4 pv2" variant="outline-success">Watch Trailer</Button>
                        <i className="fa fa-star first" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                    </p>
                </Jumbotron>
                <img
                    className="d-block w-100"
                    src={fifthImg}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <Jumbotron>
                    <h2 className="f3">9 APRIL 2020</h2>
                    <h2 className="f2">FAST & FURIOUS - 9</h2>
                    <hr className="line" />
                    <p>
                        F9 (alternatively known as Fast & Furious 9) is an upcoming American action film directed by Justin Lin and written by Daniel Casey. A sequel to 2017's The Fate of the Furious, it will be the ninth main installment in the Fast & Furious franchise and the tenth full-length film released overall.
                        </p>
                    <p>
                        <Button className="bShow f4 ph4 pv2" variant="outline-danger">Book Show</Button>
                        <Button className="trailer f4 ph4 pv2" variant="outline-success">Watch Trailer</Button>
                        <i className="fa fa-star first" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                    </p>
                </Jumbotron>
                <img
                    className="d-block w-100"
                    src={sixthImg}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>

    );

}

export default Slide;