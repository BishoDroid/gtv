import React, { Component } from 'react'
import {StyleSheet, Text, View, Image, Button} from "react-native";
import Card from './Card';
import CardSection from './CardSection';

const thumbnail_image = "https://image.flaticon.com/icons/png/128/8/8817.png";

export default class PostDetails extends Component {

    constructor(props) {
        super(props);
       // const {status, amount}  = props.postData;
    }

    
    render(){
        return (
            <Card>
        <CardSection>
            <View style={styles.thumbnailContainerStyle}>
                <Image
                style={styles.thumbnailStyle}
                source={{ uri: thumbnail_image }}/>
            </View>
            <View style={styles.headerContentStyle}>
                <Text style={styles.headerTextStyle}>BIC: {this.props.postData.bic}</Text>
                <Text style={styles.headerTextStyle}>Amount: {this.props.postData.amount.Amount}</Text>
                <Text style={styles.lowerTextStyle}>STATUS: {this.props.postData.status}</Text>
            </View>
        </CardSection>   
    </Card>
        );
    }


}
const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    },
    lowerTextStyle: {
        fontSize: 12,
        color: 'black',
        fontWeight: 'bold'
    }
};
