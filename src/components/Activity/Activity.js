import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Activity = (props) => {
    const history = useHistory();
    const { title, img, _id } = props.activity;
    const hex = "#" + Math.floor(Math.random() * 16777215).toString(16);

    const handleOnClick = (e) => {
        history.push(`/registerForm/${_id}`)
    }
    return (
        <div>
            <Col onClick={handleOnClick}>
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