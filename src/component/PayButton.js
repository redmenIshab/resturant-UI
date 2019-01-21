import React from 'react';
import {
  TouchableOpacity,
  View,
  Text
} from 'react-native';

export default class PayButton extends React.Component{
 render(){
   const {onPress} =this.props;
   return(
    <TouchableOpacity onPress={onPress}>
       <View style={{ width: 320, height: 50, backgroundColor:'#00C853',borderRadius:10,marginTop:5,marginHorizontal:30,alignItems:'center',justifyContent:'center'}}>
        <Text style={{fontWeight:'bold', color:'#fff'}}>
          Pay Now
        </Text>
      </View>
    </TouchableOpacity>
   );
 }
}