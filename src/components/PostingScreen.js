import React, {Component} from "react";
import appConfig from "../config/AppConfig";
import Dimensions from "Dimensions";
import Header from "../components/Header";
import PostDetails from "../components/PostDetails";
import Wallpaper from "./Wallpaper";
import {ListView, ScrollView, StyleSheet} from "react-native";


export default class PostingScreen extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.state = {
            isLoading: false,
            dataSource: ds.cloneWithRows(appConfig.posting),
            posting: [],
            bics: ['BKENGB2L', 'MARKDEFF']
        };

    }

    //load posts data
    sendReq() {
        /* Mock data. */
        let d = new Date().toISOString();

        //let { bics } = this.bics;
        //let details = [];
        /*for (let i = 0; i < bics.length; i++) {
         api.post("otapi/" + bics[i] + "/account/details", appConfig.requestJson)
         .then(response => {
         details.push({ bic: bics[i], value: response.data })
         this.setState({ accounts: details })
         });
         }*/
        this.setState({accounts: this.data});
    }

    componentWillMount() {
        this.setState({accounts: this.data});
    }


    renderRows() {
        let i=1;
        return appConfig.posting[1].account_postings.map(post =>
            <PostDetails key={i++} postData={post}/>
        );
    }


    render() {
        console.log(appConfig.posting[1].account_postings);

        return (
            <Wallpaper>

                <Header headerText={'Account Posting'}>{}</Header>

                <ScrollView>
                    {this.renderRows()}
                </ScrollView>
            </Wallpaper>
        );
    }

}

const DEVICE_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

});