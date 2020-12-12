import React, {useState} from "react";
import "../Styles/App.css";
import Note from "./Note";

export default class ColorScheme extends React.Component {

    state = {
      postIt:this.props.postIt
    };

setColor=(color)=>
{
    this.setState({color});
}

    render() {
const {colorScheme}=this.state.postIt;
        return (
            {colorScheme.map(elem=>
                    <div>
                        <div  className="mb-1" style={{width: '22px', height: '22px', backgroundColor:this.state.color}}></div>
                        < Note
                    </div>
                )}


        );
    }
}


