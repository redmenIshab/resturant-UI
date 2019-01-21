import React from 'react';
import{
  View,
  Text,
} from 'react-native';

export default class OrderItems extends React.Component{
  render(){
    const {name,subname, price}= this.props;
    return(
      <View style={{flex:1, flexDirection:'row',paddingVertical:20,paddingHorizontal:40,}}>
        <View style={{flex:7, flexDirection: 'column',alignItems:'center'}}>
          <Text style={{ color: '#424242', fontSize:20, fontWeight:'bold'}}>
          {name}
          </Text>
          <Text style={{ color:'#9E9E9E', fontSize:10}}>
          {subname}
          </Text>
        </View>
        <View style={{flex:1}}>
          <Text>
          {price}
          </Text>
        </View>
      </View>
    );
  }
}