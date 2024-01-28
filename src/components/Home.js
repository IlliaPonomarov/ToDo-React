import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Home() {
    return (
        <Container>
            <Row>
                <Col>
                    <h1 className="text-center">Welcome to your ToDo List</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className="text-center">This is the home page</p>
                </Col>
            </Row>
        </Container>
    );
}
