import React, {Component} from "react";
import PostIt from "./PostIt";

import StickyNotes from "./StickyNotes";
export default class MoodBoard extends Component {
    state = {
    };
    new_note = () => {
        return (<StickyNotes/>);
    }
    render() {
        const postItSettings = {
          width : "50%"
        };
        return (
            <React.Fragment>
                <PostIt postIt = {postItSettings}/>
                <StickyNotes/>
            </React.Fragment>
        );
    }
}
