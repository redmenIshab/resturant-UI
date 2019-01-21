import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions
} from 'react-native';
const { height, width } = Dimensions.get('window')

export default class Card extends React.Component {
  render() {
    const { image, label, subLabel, onPress } = this.props;
    return (
      <TouchableOpacity onPress={onPress}>
      <View style={{ flexDirection: 'row'}}>
        <View
          style={{
            height: 150,
            width: (width/2)-20,
            backgroundColor: '#fff',
            alignItems: 'center',
            borderRadius: 10,
            shadowOffset: { height: 3, width: 2 },
            shadowColor: '#6200EA',
            shadowOpacity: .3,
            marginHorizontal:7,
            marginTop:10,
            marginVertical: 20,
          }}>
          <View >
            <Image source={image} style={{ height: 50, width: 50, marginTop: 5 }} />
          </View>
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginVertical: 6 }}>
            {label}
          </Text>
          <Text style={{ fontSize: 10, color: '#9E9E9E' }}>
            {subLabel}
          </Text>
        </View>
      </View>
      </TouchableOpacity>
      );
  }
}