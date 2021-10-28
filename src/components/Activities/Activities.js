import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Form, FormControl, Button, Row } from 'react-bootstrap';
import Activity from '../Activity/Activity';

const Activities = () => {
    const [activities, setActivities] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/events")
            .then(res => res.json())
            .then(data => {
                setActivities(data);
            })
    }, [])
    return (
        <div style={{ marginTop: "100px" }}>
            <h1 className="text-uppercase mt-5">I grow by helping people in need.</h1>
            <div className="container w-75 px-5 mt-4">
                <Form className="d-flex w-50 mx-auto">
                    <FormControl
                        type="search"
                        placeholder="Search..."
                        className="me-1"
                        aria-label="Search"
                    />
                    <Button variant="primary" className="px-4">Search</Button>
                </Form>
            </div>
            <div className="container-fluid">
                <Row xs={1} md={4} className="g-5 mt-5">
                    {
                        activities.map(activity => <Activity key={activity.id} activity={activity}></Activity>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Activities;