import React, {Component} from "react";
import Nav from "react-bootstrap/cjs/Nav";
import Navbar from "react-bootstrap/cjs/Navbar";
import Button from "react-bootstrap/cjs/Button";
import NavDropdown from "react-bootstrap/cjs/NavDropdown";

export default class NavBar extends Component {
    state = {
    };

    render() {

        return (
            <React.Fragment>
                <Navbar bg="light" variant="light">
                    <Navbar.Brand href="#home">Brain rush</Navbar.Brand>
                    <Nav>
                        <Button variant="primary" onClick={() => this.props.onPostCreate("postList", "text")} className="mr-1">Add note</Button>
                        <Button variant="primary" onClick={() => this.props.onPostCreate("postList", "image")} className="mr-1">Add visual</Button>
                        <Button variant="primary" onClick={() => this.props.onPostCreate("postList", "color")} className="mr-1">Add palette</Button>
                    </Nav>
                </Navbar>
            </React.Fragment>
        );
    }
}