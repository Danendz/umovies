import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';



const Slide = ({ onEntered, onLeave, classes, onEntered2, slides }) => {

    return (

        <Carousel controls={false} id="carousel" interval={6000} pause={false}>

            <Carousel.Item onMouseEnter={onEntered} onMouseLeave={onLeave}>

                <Jumbotron className={`jm1 ${classes[0]}`}>
                    <h2 className="f2">{slides[0].date}</h2>
                    <h2 className="f2">{slides[0].name}</h2>
                    <hr className="line" />
                    <p className="font-italic f5">
                        {slides[0].description}
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
                    src={slides[0].img}
                    alt="First slide"
                />

            </Carousel.Item>

            <Carousel.Item onMouseEnter={onEntered2} onMouseLeave={onLeave}>
                <Jumbotron className={`jm2 ${classes[1]}`}>
                    <h2 className="f3">{slides[1].date}</h2>
                    <h2 className="f2">{slides[1].name}</h2>
                    <hr className="line" />
                    <p className="font-italic f5">
                        {slides[1].description}
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
                    src={slides[1].img}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item onMouseEnter={onEntered} onMouseLeave={onLeave}>
                <Jumbotron className={`jm3 ${classes[2]}`}>
                    <h2 className="f3">{slides[2].date}</h2>
                    <h2 className="f2">{slides[2].name}</h2>
                    <hr className="line" />
                    <p>
                        {slides[2].description}
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
                    src={slides[2].img}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item onMouseEnter={onEntered2} onMouseLeave={onLeave}>
                <Jumbotron className={`jm4 ${classes[3]}`}>
                    <h2 className="f3">{slides[3].date}</h2>
                    <h2 className="f2">{slides[3].name}</h2>
                    <hr className="line" />
                    <p className="font-italic f5">
                        {slides[3].description}
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
                    src={slides[3].img}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item onMouseEnter={onEntered} onMouseLeave={onLeave}>
                <Jumbotron className={`jm5 ${classes[4]}`}>
                    <h2 className="f3">{slides[4].date}</h2>
                    <h2 className="f2">{slides[4].name}</h2>
                    <hr className="line" />
                    <p className="font-italic f5">
                        {slides[4].description}
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
                    src={slides[4].img}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item onMouseEnter={onEntered2} onMouseLeave={onLeave}>
                <Jumbotron className={`jm6 ${classes[5]}`}>
                    <h2 className="f3">{slides[5].date}</h2>
                    <h2 className="f2">{slides[5].name}</h2>
                    <hr className="line" />
                    <p>
                        {slides[5].description}
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
                    src={slides[5].img}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );

}

export default Slide;