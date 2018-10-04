import React, {Component} from 'react';
import PropTypes from 'prop-types';
import api from '../services/api';
import appConfig from '../config/AppConfig';
import Header from '../components/Header';

import {
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    Animated,
    Easing, Text,
} from 'react-native';
import {Actions, ActionConst} from 'react-native-router-flux';

import arrowImg from '../images/left-arrow.png';

const SIZE = 40;

export default class SecondScreen extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: false,
      accounts: [],
    };

    this.bics = ['BKENGB2L','MARKDEFF'];
    this._onPress = this._onPress.bind(this);
    this.growAnimated = new Animated.Value(0);

    this.sendReq = this.sendReq.bind(this);
    this.renderAccounts = this.renderAccounts.bind(this);
  }

  _onPress() {
    if (this.state.isLoading) return;

    this.setState({isLoading: true});

    Animated.timing(this.growAnimated, {
      toValue: 1,
      duration: 300,
      easing: Easing.linear,
    }).start();

    setTimeout(() => {
      Actions.pop();
    }, 500);
  }

  componentWillMount() {
    this.sendReq();

    this.timerID = setInterval(
        () => this.sendReq(),
        1000
    );
  }

  componentWillUnmount() {
      clearInterval(this.timerID);
  }

  sendReq() {
    /* Mock data. */
    let d = new Date().toISOString();

    let data = [
        {   bic : 'BKENGB2L',
            iban : 'DE89370400440532013000',
            memberId : 'Member A',
            currency : 'USD',
            balance : (Math.random() * (20000 - 10000) + 10000).toFixed(2),
            dateTime: d
        },
        {   bic : 'BKENGB2L',
            iban : 'AE89370400440232013000',
            memberId : 'Member B',
            currency : 'EUR',
            balance :(Math.random() * (50000 - 20000) + 20000).toFixed(2),
            dateTime : d
        },
        {   bic : 'BKENGB2L',
            iban : 'RE89370400440432013000',
            memberId : 'Member C',
            currency : 'MYR',
            balance : (Math.random() * (10000 - 5000) + 5000).toFixed(2),
            dateTime : d
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
    this.setState({ accounts: data });
  }

  renderAccounts(){
    //return //this.state.accounts.map( account => <Text key={account.value.identification.iban}>{account.value.identification.iban}</Text>);
      return this.state.accounts.map( account => <Text key={account.iban}>{account.currency + ' ' + account.balance}</Text>);
  }


  render() {
    console.log(this.state.accounts);


    return (
      <View style={styles.container}>
      <Header headerText={'Accounts'}></Header>
        {this.renderAccounts()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
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
});
