import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Navigation = () => {

    return (
            <Navbar fixed="top" collapseOnSelect expand="lg" variant="dark">
                <Navbar.Brand className="ml5 pr4 pl4 f2" href="#home"><span className="uSymbol">U</span>MOVIES</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto text-right">
                        <Nav.Link className="f5" href="#movies">MOVIES</Nav.Link>
                        <Nav.Link className="f5"href="#shows">SHOWS</Nav.Link>
                        <Nav.Link className="f5"href="#actors">ACTORS</Nav.Link>
                        <Nav.Link className="f5"href="#news">NEWS</Nav.Link>
                        <Nav.Link className="f5"href="#community">COMMUNITY</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link className="signIn mr2 f5" href="#signin">Sign In</Nav.Link>
                        <Nav.Link className="signUp" eventKey={2} href="#signup">Sign Up</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
    );
}
export default Navigation;