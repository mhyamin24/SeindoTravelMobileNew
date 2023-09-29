import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const ListFood2 = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
        paddingVertical: 8,
      }}
    >
      <Image
        source={require("../../../assets/PageFood/food3.png")}
        style={{
          width: 70,
          height: 70,
          marginHorizontal: 20,
          borderRadius: 10,
        }}
      />
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 20 }}>Chiken</Text>
        <Text style={{ fontSize: 15, color: "#8D92A3" }}>IDR 4.509.000</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Image source={require("../../../assets/PageFood/StarOn.png")} />
        <Image source={require("../../../assets/PageFood/StarOn.png")} />
        <Image source={require("../../../assets/PageFood/StarOn.png")} />
        <Image source={require("../../../assets/PageFood/StarOn.png")} />
        <Image source={require("../../../assets/PageFood/StarOn.png")} />
        <Text style={{ color: "#8D92A3", paddingHorizontal: 10 }}>4.7</Text>
      </View>
    </View>
  );
};

export default ListFood2;

const styles = StyleSheet.create({});
