import React, {Component} from "react";
import {Animated, Easing, StyleSheet, Text, View} from "react-native";
import {Actions} from "react-native-router-flux";
import Accordion from "react-native-collapsible/Accordion";

const SIZE = 40;
const SECTIONS = [
    {
        title: 'First',
        content: 'Lorem hola...'
    },
    {
        title: 'Second',
        content: 'Lorem bana...'
    }
];

export default class SecondScreen extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: false,
            activeSections: []
        };

        this._onPress = this._onPress.bind(this);
        this.growAnimated = new Animated.Value(0);
    }

    _renderSectionTitle = section => {
        return (
            <View style={styles.content}>
                <Text>{section.content}</Text>
            </View>
        );
    };

    _renderHeader = section => {
        return (
            <View style={styles.header}>
                <Text style={styles.headerText}>{section.title}</Text>
            </View>
        );
    };

    _renderContent = section => {
        return (
            <View style={styles.content}>
                <Text>{section.content}</Text>
            </View>
        );
    };

    _updateSections = activeSections => {
        this.setState({isLoading: false, activeSections: activeSections});
    };

    _onPress() {
        if (this.state.isLoading) return;

        this.setState({isLoading: true, activeSections: null});

        Animated.timing(this.growAnimated, {
            toValue: 1,
            duration: 300,
            easing: Easing.linear,
        }).start();

        setTimeout(() => {
            Actions.pop();
        }, 500);
    }

    render() {
        const changeScale = this.growAnimated.interpolate({
            inputRange: [0, 1],
            outputRange: [1, SIZE],
        });
        return (
            <Accordion
                sections={SECTIONS}
                activeSections={this.state.activeSections}
                renderHeader={this._renderHeader}
                renderContent={this._renderContent}
                onChange={this._updateSections}/>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
        alignItems: 'center'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: SIZE,
        height: SIZE,
        borderRadius: 100,
        zIndex: 99,
        backgroundColor: '#F035E0',
    },
    circle: {
        height: SIZE,
        width: SIZE,
        marginTop: -SIZE,
        borderRadius: 100,
        backgroundColor: '#F035E0',
    },
    image: {
        width: 24,
        height: 24,
    },
    text: {
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold',
        backgroundColor: 'transparent',
        marginTop: 20
    },
    header:{
        padding: 10,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        borderRadius: 10,
        backgroundColor: '#2b3c6a',
    },
    headerText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 14,
        color: '#fff'
    },
    content: {
        margin: 30
    }
});
