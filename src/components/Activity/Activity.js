import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Activity = (props) => {
    const { title, img } = props.activity;
    const hex = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return (
        <div>
            <Col>
                <Card className="border-0">
                    <Card.Img variant="top" src={img} />
                    <Card.Body className="rounded-3 text-white" style={{ backgroundColor: `${hex}` }}>
                        <Card.Title>{title}</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Activity;