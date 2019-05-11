import React from "react";
import {StyleSheet, Text, View, Button, Alert} from 'react-native';

export default class List extends React.Component{

    constructor(){
        super();

        this.state = {
            doneText: "Done",
            status: false
        }
    }

    render(){
        const {title, status} = this.props;
        return(
            <View style = {style.card}>
                <View style = {style.text}>
                    <View>
                        <Text style = {style.title}> {title} </Text>
                    </View>
                    <View>
                        {this.printStatus()}
                    </View>
                </View>
                <View style = {style.btn}>
                    <View style = {style.done}>
                        <Button
                            style = {style.done}
                            title = {this.state.doneText}
                            color = '#353b48'
                            onPress = { () => {
                                Alert.alert("Updated Successfully");
                                if(this.state.doneText === "Done"){
                                    this.title = this.setState({doneText : "Continue"});
                                    this.setState({
                                        status: true
                                    })
                                } else {
                                    this.title = this.setState({doneText : "Done"});
                                    this.setState({
                                        status: false
                                    })
                                }
                                }
                            }
                        >
                        </Button>
                    </View>
                    <View style = {style.del}>
                        <Button
                            style = {style.del}
                            color = 'red'
                            title =  'Delete'
                            onPress={()=>{Alert.alert("Deleted Successfully")}}></Button>
                            
                    </View>
                </View>
            </View>
        );
    }

    printStatus(){
        const {title, status} = this.props;
        if (status) {
            return(
                <Text style = {{color: "blue", fontSize: 20}}>Completed </Text>
            )
        } else {
            return(
                <Text style = {{color: "red", fontSize: 20}}>In progress ... </Text>
            )
        }
    }

    toggleStatus(){
        const {title, status} = this.props;
        (status === true) ? status = false : status = true;
    }

    clearInput(){}

}

const style = StyleSheet.create({
    card:{
        padding: 10,
        margin: 10,
        flexDirection: 'row',
        borderRadius: 2,
        borderColor: '#000',
        backgroundColor: '#f58b54',
        alignItems: 'stretch'
    },
    text: {
        flex : 3,
        alignSelf: 'flex-start'
    },
    title: {
        fontSize: 24,
        fontWeight: '300',
    },
    status:{
        color: 'blue'
    }
    ,
    btn: {
        flex: 1,
        flexDirection: 'column',
        paddingRight: 0,
    },
    del: {
        alignSelf: 'flex-start',
        marginTop: 3,
        flex: 1,
        width: '100%'
    },
    done: {
        alignSelf: 'flex-end',
        marginBottom: 3,
        flex: 1,
        width: '100%'
    }
});