import React from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';

export default class Button extends React.Component{
  render(){
  const {onPress, label,style} = this.props;
  return(
    <TouchableOpacity onPress={onPress}>
      <View style={[{ borderWidth: 2, borderColor: '#6200EA',alignItems: 'center', borderRadius:5,height:25},style]}>
        <Text style={{ fontWeight: 'bold', fontSize: 12, color:'#6200EA'}}>
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  )
  }
}