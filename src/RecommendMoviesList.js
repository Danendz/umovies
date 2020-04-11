import React from 'react';
import CardRM from './CardRM';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';

const RecommendMoviesList = ({ moviesFirstPage, classes, clickedR, clickedL }) => {
    return (
        <article>
            <h2 className="f4 ml5 mt4 mb0 topA">TOP ACTIONS</h2>
            <h2 className="f2 ml5 recom">RECOMMENDED MOVIES</h2>
            <hr className="mt0 ml5 mb0 lineR" />
            <div className="d-flex flex-row-reverse mb2 arrows">
                <Button variant="danger" className="leftArrow mr5 pr3 pl3"> <i className="fa fa-angle-right" aria-hidden="true"></i> </Button>
                <Button variant="light" className="rightArrow mr2 pr3 pl3"> <i className="fa fa-angle-left" aria-hidden="true"></i> </Button>
            </div>
            <CardGroup>
                {moviesFirstPage.map((movie, i) => {
                    return (
                        <CardRM
                            key={i}
                            id={moviesFirstPage[i].id}
                            name={moviesFirstPage[i].name}
                            description={moviesFirstPage[i].description}
                            trailerLink={moviesFirstPage[i].trailerLink}
                        />
                    )
                })}

            </CardGroup>
        </article>
    );
}
export default RecommendMoviesList;