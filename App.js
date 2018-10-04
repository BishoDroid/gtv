import React, { Component } from 'react';
import {TextInput, Keyboard} from 'react-native';
import {Constants, Notifications, Permissions} from 'expo';


import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

import Main from './src/components/Main';



export default class loginAnimation extends Component {

    sendBellowMinimumValueNotification() {
        Keyboard.dismiss();

        const localNotification = {
            title: 'Balance is bellow minimum value',
            body: 'The Balance is bellow the minimum value, please take necessary actions!'
        };

        const schedulingOptions = {
            time: new Date().getTime() + 1000
        }

        // Notifications show only when app is not active.
        // (ie. another app being used or device's screen is locked)
        Notifications.scheduleLocalNotificationAsync(
            localNotification, schedulingOptions
        );
    }

    handleNotification() {

}

    async componentDidMount() {
        // We need to ask for Notification permissions for ios devices
        let result = await Permissions.askAsync(Permissions.NOTIFICATIONS);

        if (Constants.isDevice && result.status === 'granted') {
            console.log('Notification permissions granted.')

        }

        // If we want to do something with the notification when the app
        // is active, we need to listen to notification events and
        // handle them in a callback
        Notifications.addListener(this.handleNotification);
}
    render() {

        return (
            <View style={styles.container}>
                <Main />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
});

AppRegistry.registerComponent('loginAnimation', () => loginAnimation);
