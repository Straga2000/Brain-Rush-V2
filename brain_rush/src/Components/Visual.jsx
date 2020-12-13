import React, {Component} from "react";

import Form from 'react-bootstrap/Form'
import Image from "react-bootstrap/cjs/Image";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";


export default class Visual extends Component {
    state = {
    };

    onUpdatePhoto = (e) => {
        let post = this.props.image;
        post.imageURL = e.target.value;
        console.log(e.target.value);
        this.props.onUpdate(post);
    };

    render() {
        const imgURL = this.props.image.imageURL;

        return (
            <React.Fragment>
                <InputGroup size="sm" className="mb-2">
                    <FormControl aria-label="Small"
                                 aria-describedby="inputGroup-sizing-sm"
                                 onChange={this.onUpdatePhoto}/>
                </InputGroup>
                {imgURL !== "" ? <Image className = "w-100 mb-3" src={imgURL} rounded /> : null}
                {/*<Form>*/}
                {/*    <Form.File*/}
                {/*        onChange={this.onUpdatePhoto}*/}
                {/*        id="custom-file"*/}
                {/*        label="Custom file input"*/}
                {/*        custom*/}
                {/*    />*/}
                {/*</Form>*/}

            </React.Fragment>
        );
    }
}