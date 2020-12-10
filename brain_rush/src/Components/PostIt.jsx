import React, {Component} from "react";

import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/cjs/Button";
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl'

import Draggable from "react-draggable";


export default class PostIt extends Component {
    state = {
        postIt : this.props.postIt
    };

    render() {

        return (
            <Draggable>
                <Card style={{ width: this.state.postIt.width }} className="border-0">
                    {/*<Card.Img variant="top" src="https://picsum.photos/720/400"/>*/}
                    <Card.Header>Text</Card.Header>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        {/*<Card.Text className="text-left d-flex justify-content-between">*/}
                        {/*    Some quick example text to build on the card title and make up the bulk of*/}
                        {/*    the card's content.*/}
                        {/*</Card.Text>*/}
                        <InputGroup size="sm" className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroup-sizing-sm">Small</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                        </InputGroup>

                        <Button className="d-flex float-left" variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Draggable>
        );
    }
}