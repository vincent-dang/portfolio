import React from 'react';
import { Nav, Navbar,Button} from 'react-bootstrap';
import './Navigation.css';
export default class NavBar extends React.Component {
    render() {
        return (
            <Navbar bg = "dark" variant = "dark" fixed = "top"> 
                <Navbar.Brand href = "#Home">Vincent Dang</Navbar.Brand>
                <Nav>
                    <Nav.Link href = "#About">ABOUT</Nav.Link>
                    <Nav.Link href = "#Experiences">EXPERIENCES</Nav.Link>
                    <Nav.Link href = "#Projects">PROJECTS</Nav.Link>
                    <Nav.Link href = "#Contact">CONTACT</Nav.Link>
                </Nav>
                <div className = "ml-auto">
                    <Button variant = "outline-success">RESUME</Button>
                </div>
            </Navbar>
        );
    }

}
