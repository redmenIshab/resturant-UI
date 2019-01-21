import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import SearchBar from '../component/SearchBar';
import NavBar from '../component/Navbar/Navbar';
import Card from '../component/FoodCard';
import DiscountCoupon from '../component/FirstDiscount';

const FoodItems=[
  {
    label: 'Fast Food', image: require('../Images/fastfood.jpeg'), subLabel: '64 resturants listed'
  },
  {
    label: 'sea Food', image: require('../Images/seafood.jpeg'), subLabel: '24 resturants listed'
  },
  {
    label: 'Italian', image: require('../Images/pizza.png'), subLabel: '68 resturants listed'
  },
  {
    label: 'Sweet', image: require('../Images/doughnut.jpg'), subLabel: '94 resturants listed'
  }
]

export default class Home extends React.Component {

  render() {
    return (
      <View style={{flex: 1 }}>
        <NavBar />
        
        <View style={{ backgroundColor: '#F5F5F5',flex: 1,marginHorizontal:5}}>
          <ScrollView>
            <DiscountCoupon 
            label='Get 20% cash back'
            subLabel='on First order'
            />
            <Text style={{ color:'#9E9E9E', marginVertical: 25,marginLeft:7}}>
              select from these!
            </Text>
            <View style={{flex:1 , flexDirection: 'row',flexWrap: 'wrap'}}>
              {
                FoodItems.map((fooditem, key)=> <Card  key={key} label={fooditem.label} subLabel={fooditem.subLabel} image={fooditem.image} onPress={()=>this.props.navigation.navigate('content')}/> ) 
              }
             </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}