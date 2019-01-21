import React from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import SearchBar from '../SearchBar';

export default class NavBar extends React.Component{
  state={
    defaultTab:'md-list'
  }
  componentWillMount(){
    if(this.props.tab != undefined){
      this.setState({
        defaultTab: this.props.tab
      })
    }
  }
  render(){
    const { onPressMenuTab}= this.props;
    return(
      <View style={{height:64,}}>
        <View style={{flexDirection: 'row', flex:1, marginTop:10}}>
          <TouchableOpacity style={{ flex: 1, justifyContent: 'center', marginLeft: 15 }} onPress={onPressMenuTab}>
          <IonIcons name={this.state.defaultTab} size={25} color={'#6734b9'} />
        </TouchableOpacity>
          <View style={{ flex: 7, justifyContent: 'center'}}>
          <SearchBar placeholder='search for food' />
        </View>
          <TouchableOpacity style={{ flex: 1, justifyContent: 'center',alignItems: 'flex-end', marginRight:15}} >
          <IonIcons name='md-search' size={25} color={'#6734b9'} />
        </TouchableOpacity>
      </View>
      </View>
    );
  }
}