import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';
/* import Badge from 'react-bootstrap/Badge'; */

const RecommendedMovies = () => {
    return (
        <article>
            <h2 className="f4 ml5 mt4 mb0 topA">TOP ACTIONS</h2>
            <h2 className="f2 ml5 recom">RECOMMENDED MOVIES</h2>
            <hr className="mt0 ml5 mb0 lineR" />
            <div className="d-flex flex-row-reverse mb2 arrows">
                <Button variant="danger" className="leftArrow mr5 pr3 pl3"> <i class="fa fa-angle-right" aria-hidden="true"></i> </Button>
                <Button variant="light" className="rightArrow mr2 pr3 pl3"> <i class="fa fa-angle-left" aria-hidden="true"></i> </Button>
            </div>
            <CardGroup>
                <Card className="bg-transparent">
                    <Card.Body>
                        <div class="embed-responsive embed-responsive-16by9 video">
                            <iframe title="youtube" class="embed-responsive-item" src="https://www.youtube.com/embed/IeU_Q1law-0" allowfullscreen></iframe>
                        </div>
                        <h2 className="f4 mt1 mb2 title">LIS BEFORE THE SHTORM</h2>
                        <Card.Text className="mb1">
                            Life is Strange: Before the Storm is a new three part standalone story adventure set three years before the events of the first game. This time play as Chloe Price, a rebel who forms an unlikely friendship with Rachel Amber in a dramatic new story in the BAFTA award winning franchise.
                </Card.Text>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star mb2" aria-hidden="true"></i>
                    </Card.Body>
                    <Button className="f4 ph4 pv2 dwn" variant="outline-danger">Download</Button>
                </Card>
                <Card className="bg-transparent">
                    <Card.Body>
                        <div class="embed-responsive embed-responsive-16by9 video">
                            <iframe title="youtube" class="embed-responsive-item" src="https://www.youtube.com/embed/zAGVQLHvwOY" allowfullscreen></iframe>
                        </div>
                        <h2 className="f4 mt1 mb2 title">JOKER 2019</h2>
                        <Card.Text className="mb1">
                            The story is set in 1981 and follows Arthur Fleck, a failed stand-up comedian who turns to a life of crime and chaos in Gotham City. Always feeling alone in a crowd, the joker looks for getting connected to others as he walks the streets. He lives a poor life with his mother.
        </Card.Text>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star mb2" aria-hidden="true"></i>
                    </Card.Body>
                    <Button className="f4 ph4 pv2 dwn" variant="outline-danger">Download</Button>
                </Card>
                <Card className="bg-transparent">
                    <Card.Body>
                        <div class="embed-responsive embed-responsive-16by9 video">
                            <iframe title="youtube" class="embed-responsive-item" src="https://www.youtube.com/embed/QwievZ1Tx-8" allowfullscreen></iframe>
                        </div>
                        <h2 className="f4 mt1 mb2 title">AVENGERS INFINITY WAR</h2>
                        <Card.Text className="mb1">
                            An unprecedented cinematic journey ten years in the making and spanning the entire Marvel Cinematic Universe, Marvel Studios' "Avengers: Infinity War" brings to the screen the ultimate, deadliest showdown of all time.
            </Card.Text>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star mb2" aria-hidden="true"></i>
                    </Card.Body>
                    <Button className="f4 ph4 pv2 dwn" variant="outline-danger">Download</Button>
                </Card>

            </CardGroup>
        </article>
    );
}
export default RecommendedMovies;