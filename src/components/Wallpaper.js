import React, {Component} from "react";
import {ImageBackground, StyleSheet} from "react-native";

import bgSrc from "../images/wallpaper.png";

export default class Wallpaper extends Component {
    render() {
        return (
            <ImageBackground style={{width: '100%', height: '100%'}} source={bgSrc}>
                {this.props.children}
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    picture: {
        width: '100%',
        height: '100%'
    },
});
