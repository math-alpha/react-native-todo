import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';


export default class Header extends Component{
  render() {
    return (
        <View style = {Style.head}>
            <Text style={Style.text}>Welcome to My todo List</Text>
        </View>
    );
  }
}

const Style = StyleSheet.create({
    head:{
        alignContent: 'center',
        backgroundColor: '#211717',
    },
    text: {
        fontWeight: '900',
        alignSelf: 'center',
        padding: 20,
        fontSize: 28
    }
});