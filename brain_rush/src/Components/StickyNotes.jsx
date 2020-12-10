import React, { Component } from "react";
import MDBColorPicker from "mdb-react-color-picker";
import { MDBCard, MDBCardBody, MDBBtn } from "mdbreact";

class App extends Component {
    state = {
        colorPicker7: false,
    };

    close = () => {
        this.setState({ colorPicker7: false });
    };

    toggle = () => {
        this.setState({ colorPicker7: !this.state.colorPicker7 });
    };

    changeWebsiteBackgroundColor = value => {
        document.body.style.background = `${value.rgba}`;
    };

    render() {
        return (
            <MDBCard>
                <MDBCardBody className="text-center d-flex justify-content-center align-items-center flex-column">
                    <p>
                        Change the background color if this site dynamically by changing the
                        color in Color Picker
                    </p>

                    <MDBColorPicker
                        isOpen={this.state.colorPicker7}
                        close={this.close}
                        rgbaColor="rgba(255, 255, 255, 1.0)"
                        getValue={this.changeWebsiteBackgroundColor}
                    >
                        <MDBBtn color="primary" size="sm" onClick={this.toggle}>
                            Open picker
                        </MDBBtn>
                    </MDBColorPicker>
                </MDBCardBody>
            </MDBCard>
        );
    }
}

export default App;