import React, {Component} from "react";
import PostIt from "./PostIt";
import NavBar from "./NavBar";
import StickyNotes from "./StickyNotes";
import PostItTemplate from "./PostItTemplate";
import Note from "./Note";
import ColorScheme from "./StickyNotes";
function postItSettings(id) {
    return({
        title : "Note ",
        text : "",
        id : id.toString(),
        imgURL : "",
        colorScheme : []
        });
}

export default class MoodBoard extends Component {
    state = {
        postList : [],
    };

    /*componentDidMount() {
        const postList = [];
        for(let i = 0; i < 0; i++)
            postList.push(postItSettings(i));
        //console.log(postList);
        this.setState({postList});
    };*/

    handleObjectDelete = (id, name) =>
    {
        const ObjectList = this.state[name].filter(elem => elem.id !== id);
        let newObj = {};
        newObj[name] = ObjectList;
        this.setState(newObj)
    };

    handleObjectCreate = (name) =>
    {
        const ObjectList = this.state[name];
        ObjectList.push(postItSettings(ObjectList.length));
        let newObj = {};
        newObj[name] = ObjectList;

        this.setState({newObj});
    };

    handleObjectUpdate = (parameterObject, name) =>
    {
        let ObjectList = this.state[name];
        ObjectList = ObjectList.map((elem) => elem.id === parameterObject.id ? parameterObject : elem);

        let newObj = {};
        newObj[name] = ObjectList;

        this.setState(newObj);
    };

    handlePostDelete = (id) =>
    {
        this.handleObjectDelete(id, "postList");
    };

    handlePostCreate = () =>
    {
        this.handleObjectCreate("postList");
    };

    handlePostUpdate = (postObject) =>
    {
        this.handleObjectUpdate(postObject, "postList");
    };


    render() {
        return (
            <React.Fragment>
                <NavBar onPostCreate = {this.handlePostCreate}/>
                {this.state.postList.map((post) =>
                <PostItTemplate
                    onDelete={this.handlePostDelete}
                    key={post.id}
                    postIt = {post}>
                    {/*<Note note = {post} onUpdate = {this.handlePostUpdate}/>*/}
                        <ColorScheme colors = {post} onUpdate = {this.handlePostUpdate}/>
                </PostItTemplate>)}

                {/*<StickyNotes/>*/}
            </React.Fragment>
        );
    }
}
