import React, {useState} from "react";
import "../Styles/App.css";
import Note from "./Note";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/cjs/Button";
import Card from "react-bootstrap/Card";

export default class ColorScheme extends React.Component {

    state = {
        colorList : []
    };

    onColorPut = () =>
    {
        const postIt = {...this.props.colors}; ///intoarce obiectul de tip post

        let colorScheme = postIt.colorScheme;
        colorScheme.push("#000000"); ///adaugam o noua culoare la solutie

        this.setState({colorList: colorScheme.map((elem,index) => {return {text: elem, id: index}})}); ///updateaza state-ul intern

        postIt.colorScheme = colorScheme; ///adaugam noua solutie la post

        this.props.onUpdate(postIt); ///actualizam postul
    };

    onColorUpdate = (colorObject) =>
    {
        ///update props
        const postIt = {...this.props.colors}; ///intoarce obiectul de tip post

        let colorScheme = postIt.colorScheme;
        colorScheme[colorObject.id] = colorObject.text; ///costruim noua solutie de culoare

        this.setState({colorList: colorScheme.map((elem,index) => {return {text: elem, id: index}})}); ///updateaza state-ul intern

        postIt.colorScheme = colorScheme; ///adaugam noua solutie la post

        this.props.onUpdate(postIt); ///actualizam postul
    };

    componentDidMount() {
        let colorList = this.props.colors.colorScheme.map((elem,index) => {return {text: elem, id: index}});
        this.setState({colorList});
    }

    render() {
        const colorList = this.state.colorList;

        return (
            <div className="d-flex flex-column">
                <Button className="float-left btn-sm mb-4" variant="primary" onClick={this.onColorPut}>Add color</Button>
                <div className="flex-column justify-content-between">
                    {
                        colorList.map(elem =>
                            <div className="d-inline-flex w-50" key={elem.id}>
                                <div  className="ml-0 mr-4" style={{width: '30px', height: '30px', backgroundColor:elem.text}}/>
                                <Note note={elem} onUpdate={this.onColorUpdate}/>
                            </div>
                        )
                    }
                </div>
            </div>
        );
    }
}


