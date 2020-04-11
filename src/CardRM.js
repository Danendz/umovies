import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const CardRM = ({ trailerLink, name, description }) => {
    return (
        <Card className="bg-transparent">
            <Card.Body>
                <div className="embed-responsive embed-responsive-16by9 video">
                    <iframe title="youtube" className="embed-responsive-item" src={trailerLink} allowFullScreen></iframe>
                </div>
                <h2 className="f4 mt1 mb2 title">{name}</h2>
                <Card.Text className="mb1">
                    {description}
                </Card.Text>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star mb2" aria-hidden="true"></i>
            </Card.Body>
            <Button className="f4 ph4 pv2 dwn" variant="outline-danger">Download</Button>
        </Card>
    );
}
export default CardRM;