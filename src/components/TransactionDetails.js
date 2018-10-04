import React, {Component} from "react";
import {StyleSheet, Text, View} from "react-native";
import axios from 'axios';

export default class TransactionDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.sendReq = this.sendReq.bind(this);
        this.handleResp = this.handleResp.bind(this)
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.sendReq(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    sendReq() {
        axios.get('https://api.github.com/users/maecapozzi')
            .then(response => this.handleResp(response))
    }

    handleResp(resp) {

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
