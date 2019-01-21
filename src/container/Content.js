import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image
} from 'react-native';
import InnerContent from '../component/InnerContent';
import NabBar from '../component/Navbar/Navbar';

const items=[
  {name:'caramel Doughnout', quantity:'1 pcs' , price: '$1'},
  { name: 'Doughnout', quantity: '1 pcs', price: '$12'},
  { name: 'caramel ', quantity: '1 pcs', price: '$1.5' }
]
export default class Content extends React.Component{

  render(){
    return(
      <View>
        <NabBar tab='ios-arrow-back' onPressMenuTab={()=>this.props.navigation.navigate('home') }/>
        <View>
          <Image source={require('../Images/fast-food.jpg')} style={{height:200}} resizeMethod='auto'/>
        </View>
      <ScrollView >
        <View style={{marginHorizontal:5}}>
          {
            items.map((item, key)=> <InnerContent key= {key} name={item.name} quantity={item.quantity} price={item.price} label='Add'/>)
          }
        </View>
      </ScrollView>
      </View>
    )
  }
}