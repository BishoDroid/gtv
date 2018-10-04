import React, {Component} from "react";
import {Animated, Easing, StyleSheet, Text, View} from "react-native";
import {Actions} from "react-native-router-flux";
import Accordion from "react-native-collapsible/Accordion";
import api from '../services/api';
import appConfig from '../config/AppConfig';
import Header from '../components/Header';
import Wallpaper from "./Wallpaper";

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
            activeSections: [],
            accounts: [],
            bics: ['BKENGB2L','MARKDEFF']
        };

        this._onPress = this._onPress.bind(this);
        this.growAnimated = new Animated.Value(0);
    }

    componentWillMount() {
        let { bics } = this.state;
        let details = [];
        for (let i = 0; i < bics.length; i++) {
            api.post("otapi/"+bics[i]+"/account/details", appConfig.requestJson)
                .then(response => {
                    details.push({ bic: bics[i], value: response.data })
                    this.setState({ accounts: details })
                });
        }

    }
    renderAccounts(){
        return this.state.accounts.map( account => <Text key={account.value.identification.iban}>{account.value.identification.iban}</Text>);
    }

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
                <Text style={styles.contentText}>{section.content}</Text>
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
        <Wallpaper>
            <Header headerText={'Accounts'}>
                {this.renderAccounts()}
            </Header>
            <Accordion
                sections={SECTIONS}
                activeSections={this.state.activeSections}
                renderHeader={this._renderHeader}
                renderContent={this._renderContent}
                onChange={this._updateSections}/>
        </Wallpaper>

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
        marginTop: 10,
        marginLeft: 15,
        marginRight: 15,
        backgroundColor: 'rgba(52, 52, 52, 0.6)',
        borderRadius: 5,
        borderColor: '#cecece',
        borderWidth: 1,
        padding: 10
    },
    contentText: {
        textAlign: 'center',
        fontSize: 12,
        color: '#fff'
    }
});
