import React, {Component} from "react";

import NavBar from "./NavBar";
import StickyNotes from "./StickyNotes";
import PostItTemplate from "./PostItTemplate";
import Note from "./Note";
import ColorScheme from "./StickyNotes";
import Visual from "./Visual";

function postItSettings(id, category) {

    let title = "Note";
    if(category === "text") title = "Text note";
    else if(category === "color") title = "Color scheme";
    else if(category === "image") title = "Visual reference";

    return({
        title : title,
        text : "",
        id : id.toString(),
        imgURL : "",
        colorScheme : [],
        type : category,
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

    handleObjectCreate = (name, type) =>
    {
        const ObjectList = this.state[name];
        ObjectList.push(postItSettings(ObjectList.length, type));
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
        this.handleObjectCreate("postList", "text");
    };

    handlePostUpdate = (postObject) =>
    {
        this.handleObjectUpdate(postObject, "postList");
    };

    handleColorSchemeCreate = () =>
    {
        this.handleObjectCreate("postList", "color");
    };

    renderCustomPart = (postObject) =>
    {
        if(postObject.type === "text")
            return (<Note note = {postObject} onUpdate = {this.handlePostUpdate}/>);
        else if(postObject.type === "color")
            return (<ColorScheme colors = {postObject} onUpdate = {this.handlePostUpdate}/>);
        else if(postObject.type === "image")
            return (<Visual image = {postObject} onUpdate = {this.handlePostUpdate}/>);

    };

    render() {
        return (
            <React.Fragment>
                <NavBar onPostCreate = {this.handleObjectCreate}/>
                {this.state.postList.map((post) =>
                <PostItTemplate
                    onDelete={this.handlePostDelete}
                    key={post.id}
                    postIt = {post}>
                    {this.renderCustomPart(post)}
                </PostItTemplate>)}
            </React.Fragment>
        );
    }
}
