import React, {Component} from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

export default class Note extends Component {
    state = {
        isSelected : false
    };

    onTextChange = (e) =>
    {
        ///trebuie sa suprascriem postIt
        const note = {...this.props.note};
        note.text = e.target.value;
        this.props.onUpdate(note);

        this.setState({isSelected : false});
        console.log(this.state.isSelected)
    };

    onInputChange = (e) =>
    {
        this.setState({isSelected : true});
        //console.log(this.state.isSelected)
    };

    onInputInit = (e) =>
    {
        e.target.value = this.props.note.text;
    };

    render() {
        const {isSelected} = this.state;
        const {text} = this.props.note;
        return (
            <React.Fragment>
                {isSelected === false ?
                    <p className="text-left" onClick={this.onInputChange}>{text !== "" ? text : "Write something..."}</p> :
                    <InputGroup size="sm" className="mb-3">
                        <FormControl aria-label="Small"
                                     aria-describedby="inputGroup-sizing-sm"
                                     onBlur={this.onTextChange}
                                     onFocus={this.onInputInit}/>
                    </InputGroup>
                }
            </React.Fragment>
        );
    }
}