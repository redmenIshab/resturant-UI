import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import Navbar from "../component/Navbar/Navbar";
import Icon from "react-native-vector-icons/Ionicons";
import DiscountCoupon from "../component/DiscountCoupon";
import InnerContent from "../component/InnerContent";

const discount = [
  {
    label: "Get 20% off on order above Rs.400",
    subLabel: "valid Till 31st Aug2017",
    coupon: "NEW 20",
    style: { backgroundColor: "#1976D2" }
  },
  {
    label: "Get 30% off on order above Rs.400",
    subLabel: "valid Till 31st sept2017",
    coupon: "NEW 20",
    style: { backgroundColor: "#F44336" }
  }
];
const items = [
  { name: "caramel Doughnout", quantity: "1 pcs", price: "$1" },
  { name: "Doughnout", quantity: "1 pcs", price: "$12" },
  { name: "caramel ", quantity: "1 pcs", price: "$1.5" }
];

export default class Home extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Navbar />
        <View
          style={{
            marginTop: 10,
            marginHorizontal: 5,
            flex: 1,
            borderTopWidth: 2,
            borderColor: "#EEEEEE"
          }}
        >
          <View style={{ flex: 1, flexDirection: "row", paddingTop: 10 }}>
            <View style={{ flex: 2 }}>
              <Image
                source={require("../Images/ishab.jpg")}
                style={{ height: 70, width: 70, borderRadius: 35 }}
                resizeMode="center"
              />
            </View>
            <View style={{ flex: 6 }}>
              <Text
                style={{ fontWeight: "bold", fontSize: 20, color: "#424242" }}
              >
                Ishab Redmen
              </Text>
              <View>
                <Icon name="ios-heart" color={"red"} size={20} />
                <Text style={{ color: "#757575" }}>53 Resturants</Text>
              </View>
            </View>
          </View>

          <View
            style={{
              flex: 2,
              backgroundColor: "#eee",
              borderRadius: 5,
              paddingHorizontal: 10
            }}
          >
            <Text style={{ color: "#757575" }}>Your Coupons</Text>
            <ScrollView horizontal style={{ paddingTop: 20 }}>
              {discount.map((dis, key) => (
                <DiscountCoupon
                  label={dis.label}
                  subLabel={dis.subLabel}
                  coupon={dis.coupon}
                  style={dis.style}
                  key={key}
                />
              ))}
            </ScrollView>
          </View>
          <View
            style={{
              flex: 3,
              backgroundColor: "#F5F5F5",
              borderTopWidth: 2,
              borderTopColor: "#fff"
            }}
          >
            <Text
              style={{
                color: "#757575",
                backgroundColor: "#eee",
                paddingHorizontal: 10
              }}
            >
              Your Orders!
            </Text>
            <ScrollView style={{ paddingTop: 10, backgroundColor: "#eee" }}>
              <View>
                {items.map((item, key) => (
                  <InnerContent
                    name={item.name}
                    quantity={item.quantity}
                    price={item.price}
                    label="Order Again"
                    key={key}
                  />
                ))}
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }
}
