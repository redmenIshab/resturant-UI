import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import Button from '../component/Button';
import Favourite from '../container/Favourite';

export default class InnerContent extends React.Component {
  render() {
    const { name, quantity, price, label } = this.props;
    return (
      <View 
        style={{ 
          flexDirection: 'row', 
          flex: 1, 
          paddingTop: 10,
          paddingHorizontal:10, 
          borderRadius:10,
          shadowOffset:{height:3},
          shadowColor:'#6200EA',
          shadowOpacity:.3,
          marginHorizontal:5,
          marginTop:5,
          backgroundColor:'#fff'
          }}>
        <View style={{ flex: 6, flexDirection: 'column',paddingVertical:10 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 15, color: '#424242' }}>
            {name}
          </Text>
          <Text style={{ fontSize: 15, color: '#9E9E9E' }}>
            {quantity}
          </Text>
          <Text style={{ fontWeight: 'bold' }}>
            {price}
          </Text>
        </View>
        <View style={{flex:2.5,paddingVertical:10}} >
          <Button label={label} />
        </View>
      </View>

    )
  }
}