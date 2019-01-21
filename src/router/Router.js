import React from "react";
import { View, Text } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from "react-navigation";
import Home from "../container/Home";
import Favourite from "../container/Favourite";
import Profile from "../container/Profile";
import Cart from "../container/Cart";
import Icon from "react-native-vector-icons/Ionicons";
import Content from "../container/Content";

const home = createStackNavigator(
  {
    home: { screen: Home },
    content: { screen: Content }
  },
  {
    headerMode: "none"
  }
);

const Router = createBottomTabNavigator(
  {
    Home: {
      screen: home,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: ({ tintColor }) => (
          <Icon name={"md-home"} size={25} color={tintColor} />
        )
      }
    },
    Favourite: {
      screen: Favourite,
      navigationOptions: {
        tabBarLabel: "Favourites",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="md-heart" size={25} color={tintColor} />
        )
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: "Profile",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="md-person" size={25} color={tintColor} />
        )
      }
    },
    Cart: {
      screen: Cart,
      navigationOptions: {
        tabBarLabel: "Cart",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="md-cart" size={25} color={tintColor} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: "#6734b9",
      inactiveTintColor: "#eee",
      labelStyle: { fontWeight: "bold" }
    }
  }
);

export default createAppContainer(Router);
