/**
 * Created by bisho on 04/10/2018.
 */

import React, {Component} from "react";
import {LineChart}  from 'react-native-chart-kit';
import Dimensions, {Button, Text} from "react-native";
import {View,StyleSheet} from "react-native";
import Header from "./Header";
import Wallpaper from "./Wallpaper";
import {Actions} from "react-native-router-flux";

export default class HomeScreen extends Component{

    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <Wallpaper>
                <Header headerText={'CITI Bank'}>
                    {}
                </Header>
                <Text style={styles.text}> Welcome, Inah AFEN</Text>
                <LineChart
                    data={data}
                    width={screenWidth}
                    height={220}
                    chartConfig={chartConfig}
                />
                <View style={{marginTop: 20, paddingRight: 30, paddingLeft: 30}}>
                    <Button onPress={()=>Actions.secondScreen()} title={"Accounts"} style={{ width: 300, height: 50, marginTop: 20 }}/>
                </View>
                <View style={{marginTop: 20, paddingRight: 30, paddingLeft: 30}}>
                    <Button onPress={()=>Actions.postingScreen()} title={"Postings"} style={{ width: 300, height: 50, marginTop: 20 }}/>
                </View>
            </Wallpaper>
        )
    }
}
const screenWidth = Dimensions.Dimensions.get('window').width
const data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    datasets: [{
        data: [ 20, 45, 28, 80, 70, 43 ]
    }]
};
const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientTo: '#08130D',
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
        alignItems: 'center'
    },
    text: {
        textAlign: 'center',
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10
    }
});