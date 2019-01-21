import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default class DiscountCoupon extends React.Component {
  render() {
    const { label, subLabel, onPress, backgroundColor } = this.props;
    return (
      <TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            flex: 1,
            backgroundColor: "#fff",
            marginTop: 20,
            borderRadius: 10,
            shadowOffset: { height: 3, width: 2 },
            shadowColor: "#6734b9",
            shadowOpacity: 0.3,
            width: 350,
            alignItems: "center",
            marginHorizontal: 7
          }}
        >
          <View style={{ flex: 1, paddingLeft: 15, paddingVertical: 15 }}>
            <Icon name="md-basket" size={30} color={"#6734b9"} />
          </View>
          <View style={{ flex: 3 }}>
            <Text
              style={{ color: "#6734b9", fontSize: 15, fontWeight: "bold" }}
            >
              {label}
            </Text>
            <Text style={{ color: "#616161" }}>{subLabel}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
