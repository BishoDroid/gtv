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
      bics: ['BKENGB2L','MARKDEFF']
    };

    this._onPress = this._onPress.bind(this);
    this.growAnimated = new Animated.Value(0);
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
