import React, {Component} from "react";
import PostIt from "./PostIt";
import NavBar from "./NavBar";
import StickyNotes from "./StickyNotes";

function postItSettings(id) {
    return({
        title : "Note ",
        text : "",
        id : id.toString()
        });
}

export default class MoodBoard extends Component {
    state = {
        postList : []
    };

    componentDidMount() {
        const postList = [];
        for(let i = 0; i < 0; i++)
            postList.push(postItSettings(i));
        //console.log(postList);
        this.setState({postList});
    };

    handlePostDelete = (id) =>
    {
        const postList = this.state.postList.filter(elem => elem.id !== id);
        this.setState({postList});
    };

    handlePostCreate = () =>
    {
        const postList = this.state.postList;
        postList.push(postItSettings(postList.length));
        this.setState({postList});
        console.log(postList.length)
    };

    new_note = () => {
        return (<StickyNotes/>);
    };

    render() {
        return (
            <React.Fragment>
                <NavBar onPostCreate = {this.handlePostCreate}/>
                {this.state.postList.map((post) => <PostIt onDelete={() => {this.handlePostDelete(post.id)}} key={post.id} postIt = {post}/>)}
                <StickyNotes/>
            </React.Fragment>
        );
    }
}
