import React, {Component} from "react";
import {StyleSheet, Text, View} from "react-native";

export default class AccountDetails extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.content}>
                <Text style={{color: 'white'}}>{this.props.memberId}</Text>
                <Text style={{color: 'white'}}>{this.props.currency + " " + this.props.balance}</Text>
                <Text style={{color: 'white'}}>{this.props.credDeb}</Text>
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
    }
});
