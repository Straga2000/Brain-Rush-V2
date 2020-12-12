import React, {useState} from "react";
import "../Styles/App.css";
import {Swatch} from "../common";
export default class ColorScheme extends React.Component {

    state = {
color:"#ff0000"
    };
setColor=(color)=>
{
    this.setState({color});
}
    render() {

        return (



                    <div  style="width: '22px',
        height: '22px',
        float: 'left',
        marginRight: '10px',
        marginBottom: '10px',
        borderRadius: '4px';">

                            color={this.state.color}
                            onChangeComplete={ (color) => {this.setColor(color.hex)}}
                       <div>

                       </div>
                    </div>


        );
    }
}


