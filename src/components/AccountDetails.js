import React, {Component} from "react";
import {StyleSheet, Text, View} from "react-native";
import { Button } from 'react-native';

export default class AccountDetails extends Component {
    constructor(props) {
        super(props);
        this._onPress = this._onPress.bind(this);
    }

    _onPress() {

    }

    render() {
        let tmp = () => {
            if (this.props.balance < 23000.00) {
                return <Text style={{color: 'orange'}}>{this.props.currency + " " + this.props.balance}</Text>
            }
            else {
                return <Text style={{color: 'lightgreen'}}>{this.props.currency + " " + this.props.balance}</Text>
            }
        };

        return (
            <View style={styles.content}>
                <Text style={{color: 'white'}}>{this.props.memberId}</Text>
                {tmp()}
                <Text style={{color: 'white'}}>{this.props.credDeb}</Text>
                <Button
                    onPress={this._onPress}
                    title="Show postings"
                    color="orange"
                    accessibilityLabel="Learn more about this purple button"
                />
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
