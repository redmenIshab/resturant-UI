import React from 'react';
import{
  View,
  Text,
} from 'react-native';

export default class DiscountCoupon extends React.Component{
  render(){
    const {label, subLabel, coupon,style} = this.props
    return(
      <View style={[{width:200,borderRadius:5, marginHorizontal:5, height:100,padding:15},style]} >
        <View >
        <Text style={{color:'#fff', fontSize:15,fontWeight:'bold'}}>
          {label}
        </Text >
        <Text style={{ color: '#fff', fontSize: 10}}>
          {subLabel}
        </Text >
        <Text style={{ color: '#fff', fontSize: 12, fontWeight: 'bold' }}>
          Coupon code: {coupon}
        </Text>
        </View>
      </View>
    );
  }
}