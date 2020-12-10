import React, {Component} from "react";

import '../Styles/index.css'
//import  '../Styles/Gallery.css'

export default class Gallery extends Component {
    state = {
        info : this.props.info
    };

    getPhotoStyle = (link) =>
    {
        const img = new Image();
        img.src = link;
        return {
                "width" : img.width,
                "height" : img.height}
    };

    render() {
        const links = this.state.info.links;
        const height = this.state.info.photoHeight;

        return (
            <ul className={"red list-inline col-lg-12"}>
                {links.map(link =>
                    {
                        let dim = this.getPhotoStyle(link);
                        return (<li className="list-inline-item mt-3"><img className={"ml-10"} key={link} src={link} height={height} alt = "nu"/></li>)
                    })
                }
            </ul>
        );
    }
}
