import React, {Component} from 'react';

import { SketchPicker } from 'react-color';

export default class StickyNotes extends Component{
    state = {
        background: '#fff',
    };

    handleChangeComplete = (color) => {
        this.setState({ background: color.hex });
    };

    render() {
        return (
            <SketchPicker
                color={ this.state.background }
                onChangeComplete={ this.handleChangeComplete }
            />
        );
    }
}