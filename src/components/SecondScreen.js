import React, {Component} from "react";
import {Animated, Easing, StyleSheet, Text, View} from "react-native";
import {Actions} from "react-native-router-flux";
import Accordion from "react-native-collapsible/Accordion";
import Header from "../components/Header";
import Wallpaper from "./Wallpaper";
import AccountDetails from "../components/AccountDetails";

const SIZE = 40;
const SECTIONS = [
    {
        title: 'MARKDEFF',
        content: 'Lorem hola...',
        idx: 0
    },
    {
        title: 'BKENGB2L',
        content: 'Lorem bana...',
        idx: 1
    },
    {
        title: 'EEANGBYL',
        content: 'Lorem bananana...',
        idx: 2
    }
];

export default class SecondScreen extends Component {
    static navigationOptions = {
        drawerLabel: 'Home',
        drawerIcon: ({tintColor}) => (
            <Image
                source={require('../images/logo.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    };

    constructor() {
        super();
        this.state = {
            isLoading: false,
            activeSections: [],
            accounts: [],
        };

        this._onPress = this._onPress.bind(this);
        this.growAnimated = new Animated.Value(0);
        this.sendReq = this.sendReq.bind(this);
        this.renderAccounts = this.renderAccounts.bind(this);
    }

    componentWillMount() {
        /*let { bics } = this.state;
         let details = [];
         for (let i = 0; i < bics.length; i++) {
         api.post("otapi/"+bics[i]+"/account/details", appConfig.requestJson)
         .then(response => {
         details.push({ bic: bics[i], value: response.data })
         this.setState({ accounts: details })
         });
         }*/
        this.sendReq();

        this.timerID = setInterval(
            () => this.sendReq(),
            Math.ceil(Math.random() * (3000 - 1000) + 1000)
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    sendReq() {
        /* Mock data. */
        let d = new Date().toISOString();

        this.data = [
            {
                bic: 'MARKDEFF',
                iban: 'DE89370400440532013000',
                memberId: 'Member A',
                currency: 'USD',
                credDeb: 'Credit',
                balance: (Math.random() * (20000 - 10000) + 10000).toFixed(2),
                dateTime: d
            },
            {
                bic: 'BKENGB2L',
                iban: 'AE89370400440232013000',
                memberId: 'Member B1',
                currency: 'EUR',
                credDeb: 'Credit',
                balance: (Math.random() * (50000 - 20000) + 20000).toFixed(2),
                dateTime: d
            },
            {
                bic: 'EEANGBYL',
                iban: 'RE89370400440432013000',
                memberId: 'Member C',
                credDeb: 'Debit',
                currency: 'MYR',
                balance: (Math.random() * (10000 - 5000) + 5000).toFixed(2),
                dateTime: d
            }
        ];

        //let { bics } = this.bics;
        //let details = [];
        /*for (let i = 0; i < bics.length; i++) {
         api.post("otapi/" + bics[i] + "/account/details", appConfig.requestJson)
         .then(response => {
         details.push({ bic: bics[i], value: response.data })
         this.setState({ accounts: details })
         });
         }*/
        this.setState({accounts: this.data});
    }


    renderAccounts() {
        return this.state.accounts.map(acc => <AccountDetails key={acc.iban} memberId={acc.memberId}
                                                              currency={acc.currency} balance={acc.balance}
                                                              credDeb={acc.credDeb}/>);
    }

    _renderHeader = section => {
        return (
            <View style={styles.header}>
                <Text style={styles.headerText}>{section.title}</Text>
            </View>
        );
    };

    _renderContent = section => {
        let idx = section.idx;
        let data = this.data[idx];
        return (
            /*<View style={styles.content}>
             <Text style={styles.contentText}>{section.content}</Text>
             </View>*/
            <AccountDetails bic={data.bic} memberId={data.memberId} currency={data.currency} balance={data.balance}
                            credDeb={data.credDeb}/>
        );
    };

    _updateSections = activeSections => {
        this.setState(
            {isLoading: false, activeSections: activeSections}
        );
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
        //const changeScale = this.growAnimated.interpolate({
        //    inputRange: [0, 1],
        //     outputRange: [1, SIZE],
        //});
        return (
            <Wallpaper>
                <Header headerText={'Accounts of CITI Bank'}>
                    {}
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
    header: {
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
