import React, {Component} from 'react';

import { SketchPicker } from 'react-color';
import Draggable from "react-draggable";

export default class StickyNotes extends Component{
    state = {
        background: '#fff',
    };

    handleChangeComplete = (color) => {
        this.setState({ background: color.hex });
    };

    render() {
        return (
            <Draggable>
                <SketchPicker
                    color={this.state.background }
                    onChangeComplete={ this.handleChangeComplete }
                />
            </Draggable>
        );
    }
}