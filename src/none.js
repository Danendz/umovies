import React from 'react';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';
import CardRM from './CardRM';

const RecommendedMovies = ({ name, description, trailerLink }) => {
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
                <CardRM />
                {/*  <Card className="bg-transparent">
                    <Card.Body>
                        <div class="embed-responsive embed-responsive-16by9 video">
                            <iframe title="youtube" class="embed-responsive-item" src={movies[1].trailerLink} allowfullscreen></iframe>
                        </div>
                        <h2 className="f4 mt1 mb2 title">{movies[1].name}</h2>
                        <Card.Text className="mb1">
                            {movies[1].description}
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
                            <iframe title="youtube" class="embed-responsive-item" src={movies[2].trailerLink} allowfullscreen></iframe>
                        </div>
                        <h2 className="f4 mt1 mb2 title">{movies[2].name}</h2>
                        <Card.Text className="mb1">
                            {movies[2].description}
                        </Card.Text>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star mb2" aria-hidden="true"></i>
                    </Card.Body>
                    <Button className="f4 ph4 pv2 dwn" variant="outline-danger">Download</Button>
                </Card> */}

            </CardGroup>
        </article>
    );
}
export default RecommendedMovies;