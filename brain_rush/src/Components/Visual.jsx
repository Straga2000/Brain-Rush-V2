import React, {Component} from "react";

import Form from 'react-bootstrap/Form'
import Image from "react-bootstrap/cjs/Image";


export default class Visual extends Component {
    state = {
    };

    onUpdatePhoto = (e) => {
        let post = this.props.image;
        post.imageURL = e.target.files[0];
        console.log(e.target.files[0]);
        this.props.onUpdate(post);
    }


    render() {
        const imgURL = this.props.image.imageURL;

        return (
            <React.Fragment>
                {imgURL !== "" ? <Image className = "w-100 mb-3" src={URL.createObjectURL(imgURL)} rounded /> : null}
                <Form>
                    <Form.File
                        onChange={this.onUpdatePhoto}
                        id="custom-file"
                        label="Custom file input"
                        custom
                    />
                </Form>

            </React.Fragment>
        );
    }
}