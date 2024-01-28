import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {Nav} from "react-bootstrap";
import {Link, Route, Routes} from "react-router-dom";
import Home from "./Home";

function MainNavbar() {
    return (
        <>
            <Navbar bg="dark"  data-bs-theme="light">
                <Container >
                    <Navbar.Brand className="text-light" href="#home">ToDo</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="home">
                            <Link href="/home">Home</Link>

                        </Nav.Link>
                        <Nav.Link href="#features">
                            <Link href="/todo">ToDO</Link>
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <Routes>
                <Route  path="/home" element={<Home />}/>
            </Routes>
        </>
    );
}

export default MainNavbar;