import React from 'react';
import {
  View,
  Text,
  TextInput,
}from 'react-native';

export default class SearchBar extends React.Component{
  render(){
    const {label, placeholder, onPress, onTextEdit, } = this.props
    return(
      <View>
        <TextInput 
        placeholder={placeholder} 
        onTextEdit= {onTextEdit}
        style={{
          height: 25,
          marginHorizontal:20,
          }}
        
        />
      </View>
    );
  }
}