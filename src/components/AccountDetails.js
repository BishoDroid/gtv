import React, {Component} from "react";
import {StyleSheet, Text, View} from "react-native";

export default class AccountDetails extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>{this.props.memberId}</Text>
                <Text>{this.props.currency + " " + this.props.balance}</Text>
                <Text>{this.props.credDeb}</Text>
                <Text>{this.props.dateTime}</Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    }});
