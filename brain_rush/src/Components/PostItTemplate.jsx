import React, {Component} from "react";

import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/cjs/Button";
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Dropdown from "react-bootstrap/cjs/Dropdown";

import Draggable from "react-draggable";

export default class PostItTemplate extends Component {
    state = {
        postIt : this.props.postIt,
        width : "25"
    };

    setWidth = (e) =>
    {
        //console.log();
        this.setState({width : e.target.innerText})
    };

    render() {

        const {postIt, width} = this.state;
        return (
            <Draggable>
                <Card className={"border-0 w-" + width.replace(/%/, '')}>
                    {/*<Card.Img variant="top" src="https://picsum.photos/720/400"/>*/}
                    <Card.Header className="d-flex align-items-center justify-content-between">
                        <h2 className="font-weight-light">{postIt.title}</h2>
                        <Dropdown variant={"sm"}>
                            <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                Width
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                {["25%", "50%", "75%", "100%"].map((elem) =>
                                    <Dropdown.Item key={elem} as="button" onClick = {this.setWidth}>{elem}</Dropdown.Item>
                                )}
                            </Dropdown.Menu>
                        </Dropdown>
                    </Card.Header>
                    <Card.Body className = "d-flex flex-column">
                        {this.props.children}
                        <Button className="float-left btn-sm mt-3" variant="danger" onClick={() => this.props.onDelete(this.state.postIt.id)}>Delete note</Button>
                    </Card.Body>
                </Card>
            </Draggable>
        );
    }
}