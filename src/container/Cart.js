import React from "react";
import { View, Text, ScrollView } from "react-native";
import NavBar from "../component/Navbar/Navbar";
import OrderItems from "../component/OrderItems";
import PayButton from "../component/PayButton";

const cartItems = [
  {
    name: "white sauce pasta",
    subname: "extra cheese",
    price: "$4"
  },
  {
    name: "veg sandwich",
    subname: "extra cheese",
    price: "$5"
  },
  {
    name: "momo",
    subname: "extra achar",
    price: "$2"
  }
];
export default class Home extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <NavBar />
        <View
          style={{
            marginTop: 10,
            borderTopWidth: 1,
            borderTopColor: "#fff",
            backgroundColor: "#eee",
            paddingVertical: 20
          }}
        >
          <View>
            <Text style={{ fontSize: 20, color: "#9E9E9E" }}>Your Orders!</Text>
            <Text
              style={{
                paddingLeft: 50,
                marginVertical: 20,
                fontWeight: "bold",
                fontSize: 25,
                color: "#424242"
              }}
            >
              Kilroy Kitchen
            </Text>
          </View>
          <View
            style={{
              alignItems: "center",
              backgroundColor: "#fff",
              marginHorizontal: 20,
              height: 350,
              borderRadius: 10,
              shadowOffset: { height: 3, width: 2 },
              shadowColor: "#6200EA",
              shadowOpacity: 0.3,
              marginBottom: 10
            }}
          >
            {cartItems.map((item, key) => (
              <OrderItems
                name={item.name}
                subname={item.subname}
                price={item.price}
                key={key}
              />
            ))}
            <View style={{ borderTopWidth: 2, borderColor: "#EEEEEE" }} />
            <Text style={{ fontWeight: "bold" }}>Total: $13</Text>
          </View>
          <PayButton />
        </View>
      </View>
    );
  }
}
