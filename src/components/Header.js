import React from 'react';
import { Text, View } from 'react-native';


//make component
const Header = (props) => {
    const { textStyle, viewStyle } = styles;

return (
    <View style={viewStyle}>
        <Text style={textStyle}>{props.headerText}</Text>
    </View>
    );
};

const styles = {
    viewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
        paddingTop: 15,
        backgroundColor: '#344FD6',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20,
        color: '#fff'
    }
};

export default Header;
