import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import ToDoLinkPage from './ToDoLinkPage';

function MainNavbar() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="light">
                <Container className="text-light">
                    <Navbar.Brand className="text-light" as={Link} href="/home">
                        <Link to={'/home'} className="text-light">ToDo</Link>
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link className="text-light" as={Link} to="/home">
                            Home
                        </Nav.Link>
                        <Nav.Link className="text-light" as={Link} to="/todo/*">
                            ToDo
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/todo/*" element={<ToDoLinkPage />} />
            </Routes>
        </>
    );
}

export default MainNavbar;
