import React, {Component} from "react";
import Logo from "./Logo";
import Form from "./Form";
import Wallpaper from "./Wallpaper";
import ButtonSubmit from "./ButtonSubmit";
import SignupSection from "./SignupSection";
import {Alert, Button, StyleSheet, Text, View} from "react-native";
import {Actions} from "react-native-router-flux";
import Dialog from "react-native-simple-dialogs/src/Dialog";


export default class LoginScreen extends Component {

    constructor() {
        super();
        this.state = {
            dialogVisible: false
        }
    }

    componentDidMount() {
        this.checkDeviceForHardware();
    }

    checkDeviceForHardware = async () => {
        let compatible = await Expo.LocalAuthentication.hasHardwareAsync();
        this.setState({compatible});
        if (!compatible) {
            this.showIncompatibleAlert();
        }
    };
    showIncompatibleAlert = () => {
        this.dropdown.alertWithType(
            'error',
            'Incompatible Device',
            'Current device does not have the necessary hardware to use this API.'
        );
    };

    showAndroidAlert = () => {
        this.setState({dialogVisible: true});
        this.scanBiometrics();
    };
    scanBiometrics = async () => {
        let result = await Expo.LocalAuthentication.authenticateAsync('Biometric Scan.');
        if (result.success) {
            this.setState({dialogVisible: false});
            Actions.secondScreen();
        } else {
            Alert.Alert.alert('Uh oh!', 'Bio-Authentication failed or canceled.');
        }
    };

    render() {
        return (
            <Wallpaper>
                <Logo />
                <Form />
                <SignupSection />
                <ButtonSubmit />
                <Button style={styles.button} onPress={this.showAndroidAlert} title={"Use Fingerprint"}/>
                <Dialog
                    visible={this.state.dialogVisible}
                    title="Finger Print"
                    onTouchOutside={() => this.setState({dialogVisible: false})}>
                    <View>
                        <Text>Please provide your Fingerprint</Text>
                    </View>
                </Dialog>
            </Wallpaper>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F035E0',
        height: 40,
        borderRadius: 20,
        zIndex: 100,
    }
});
