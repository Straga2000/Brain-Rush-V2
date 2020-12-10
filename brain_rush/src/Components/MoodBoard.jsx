import React, {Component} from "react";
import PostIt from "./PostIt";

export default class MoodBoard extends Component {
    state = {
    };

    render() {
        const postItSettings = {
          width : "50%"
        };
        return (
            <React.Fragment>
                <PostIt postIt = {postItSettings}/>
            </React.Fragment>
        );
    }
}
