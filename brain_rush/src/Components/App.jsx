import React, { Component } from 'react';
import  {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import MoodBoard from "./MoodBoard";


///IMPORT CUSTOM STYLING
import '../Styles/App.css';
import Gallery from "./Gallery";
import Profile from "./Profile";

// import fs from 'fs';
//const files = require.context('./', true, /\.(svg|png)$/igm);

///IMPORT PAGES TO LINK THEM
/*import LoginPage from './LoginPage';
import HomePage from './HomePage';
import SignupPage from './SignupPage';
import ForgotPass from './ForgotPassPage';
import ProfileConsumerPage from './ProfileConsumerPage';
import ProfileSellerPage from './ProfileSellerPage';*/

// function listAll() {
//     const testFolder = '../Components';
//     fs.readdir(testFolder, (err, files) => {
//         files.forEach(file => {
//             console.log(file);
//         });
//     });
// }

export default class App extends Component {
    state = {
    };

    render() {
        return (
                <div className={"App no-mg-pd"}>
                    <MoodBoard/>
                </div>
            // <Router>
            //     <Switch>
            //
            //         {/*use this first route as index page*/}
            //         {/*<Route exact path={"/"} component={HomePage}/>*/}
            //
            //         {/*use this routes for other pages*/}
            //         {/*<Route path={"/login"} component={LoginPage}/>*/}
            //         {/*<Route path={"/home"} component={HomePage}/>*/}
            //         {/*<Route path={"/signup"} component={SignupPage}/>*/}
            //         {/*<Route path={"/forgot"} component={ForgotPass}/>*/}
            //         {/*<Route path={"/profileconsumer"} component={ProfileConsumerPage}/>*/}
            //         {/*<Route path={"/profileseller"} component={ProfileSellerPage}/>*/}
            //     </Switch>
            // </Router>
        );
    }
}