import React from "react";
import {StyleSheet, Button, View, TextInput} from 'react-native';

export default class Btn extends React.Component{
    constructor(){
        super();

        this.state = {
            text: ""
        }
    };
    
    render(){
        let { func } = this.props;
        return(
            <View style = {Style.whole}>
                <TextInput style = {Style.input} placeholder = "Enter what to do here ..."></TextInput>
                <Button    style = {Style.submit} title = ' + Add' color="#211717" onPress={func('VARIABLE')}></Button>
            </View>
        );
    }
}

const Style = StyleSheet.create({
    whole:{
        flexDirection: 'row',
    },
    input: {
        alignSelf: 'flex-start',
        flex: 3
    },
    submit: {
        alignSelf: 'flex-end',
        flex: 2,
        padding: 20,
        justifyContent: 'center',
    }
});