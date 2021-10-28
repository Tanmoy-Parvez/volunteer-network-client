import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const Events = () => {
    const [events, setEvents] = useState([]);
    const { user } = useAuth()
    const email = user?.email;

    useEffect(() => {
        fetch(`http://localhost:5000/registerEvents/${email}`)
            .then(res => res.json())
            .then(data => {
                setEvents(data);
            })
    }, [])
    return (
        <div className="container mt-5">
            <h1 className="marginTop">Your registered events: {events.length}</h1>
            {
                <Row xs={1} md={2} className="g-5 mt-5">
                    {
                        events.map(event => <Col key={event._id}>
                            <Card>
                                <Card.Img variant="top" src="" />
                                <Card.Body className="rounded-3">
                                    <Card.Title>{event?.activity}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>)
                    }
                </Row>
            }
        </div>
    );
};

export default Events;