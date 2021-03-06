import React, {Component} from "react";
import {Router, Scene} from "react-native-router-flux";

import LoginScreen from "./LoginScreen";
import SecondScreen from "./SecondScreen";
import PostingScreen from "./PostingScreen";
import HomeScreen from "./HomeScreen";

export default class Main extends Component {
    render() {
        return (

            <Router>
                <Scene key="root">
                    <Scene key="loginScreen"
                           component={LoginScreen}
                           animation='fade'
                           hideNavBar={true}
                           initial={true}
                    />
                    <Scene key="homeScreen"
                           component={HomeScreen}
                           animation='fade'
                           hideNavBar={true}
                    />
                    <Scene key="secondScreen"
                           component={SecondScreen}
                           animation='fade'
                           hideNavBar={true}
                    />
                    <Scene key="postingScreen"
                           component={PostingScreen}
                           animation='fade'
                           hideNavBar={true}
                    />
                </Scene>
            </Router>
        );
    }
}