import React, {Component} from "react";
import {ScrollView, StyleSheet, Text, View} from "react-native";
import { Button } from 'react-native';
import Dialog from "react-native-simple-dialogs/src/Dialog";

export default class AccountDetails extends Component {
    constructor(props) {
        super(props);
        this._onPress = this._onPress.bind(this);
        this.state = { dialogVisible : false };
    }

    _onPress() {
        this.setState({dialogVisible : true});
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
                    title="Show posting"
                    color="orange"
                />
                <Dialog
                    visible={this.state.dialogVisible}
                    title={this.props.bic + ' postings'}
                    onTouchOutside={() => this.setState({dialogVisible: false})}
                    animationType="fade">
                    <View>
                        <ScrollView style={{height:450}}>
                            <Text>BFIIFI to NFFMFM</Text>
                            <Text>BFIIFI to NFFMFM</Text>
                            <Text>BFIIFI to NFFMFM</Text>
                            <Text>BFIIFI to NFFMFM</Text>
                            <Text>BFIIFI to NFFMFM</Text>
                            <Text>BFIIFI to NFFMFM</Text>
                            <Text>BFIIFI to NFFMFM</Text>
                            <Text>BFIIFI to NFFMFM</Text>
                            <Text>BFIIFI to NFFMFM</Text>
                            <Text>BFIIFI to NFFMFM</Text>
                            <Text>BFIIFI to NFFMFM</Text>
                            <Text>BFIIFI to NFFMFM</Text>
                            <Text>BFIIFI to NFFMFM</Text>
                            <Text>BFIIFI to NFFMFM</Text>
                        </ScrollView>
                        <Button
                            onPress={()=>{this.setState({dialogVisible: false})}}
                            title="Close"
                            color="blue"
                        />
                    </View>
                </Dialog>

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
    },
    dialog: {

    }
});
