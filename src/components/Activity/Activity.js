import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Activity = (props) => {
    const { title, img } = props.activity;
    return (
        <div>
            <Col>
                <Card className="border-0">
                    <Card.Img variant="top" src={img} />
                    <Card.Body className="bg-primary rounded-3 text-white">
                        <Card.Title>{title}</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Activity;