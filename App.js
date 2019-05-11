import React, {Component} from 'react';
import {View, StyleSheet,ScrollView, Alert } from 'react-native';

import Header from './components/Header'
import List from './components/List'
import Btn from './components/Btn'


export default class App extends Component{

  constructor(props){
    super(props);

    this.state = {
      todo: [
			{title:"", done: false}
      ]
    }
  }

  
  componentDidMount() {
    let dummyValues = [
		{title:"Get up", done: true},
		{title:"Pray", done: true},
		{title:"Go to school Go to school Go to school", done: false},
		{title:"Eat", done: false},
		{title:"Go to school Go to school Go to school Go to school", done: false},
		{title:"Bath", done: false},
		{title:"Eat", done: false},
		{title:"Go to school", done: false}
    ];

    this.setState({todo: dummyValues});
  }
  

  render() {
    return (
      <View style = {style.body}>
        
        <Header style = {style.top}/>
        
        <ScrollView style = {style.content} >
			{
				this.state.todo.map(( item, key ) =>
				(
					<List title={this.state.todo[key].title} status={this.state.todo[key].done}/>
				))
			}
        </ScrollView>
        
        <Btn style={style.bottom} func={this.handleClick.bind(this)}/>
      
      </View>
      
    );
  }

	handleClick( name ){
		Alert.alert(name);
 	}

  addToList(text){ // by default, done is set to false
	  //when + Add is pressed
  }

  deleteFromList(){
	  //when delete is pressed
  }

  updateList(){
	  //when done is pressed
  }

}

const style = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
  },
  top: {
    flex: 1,
    alignSelf: 'flex-start',
  },
  content: {
    flex: 5,
    backgroundColor: '#a34a28'
  },
  bottom: {
    flex: 1,
    alignSelf: 'flex-end',
  }
});
