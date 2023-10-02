import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const ListFood4 = () => {
  const navigation = useNavigation();

  const FoodDetails = () => {
    navigation.navigate("FoodDetails");
  };

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
        paddingVertical: 8,
      }}
    >
      <TouchableOpacity onPress={FoodDetails}>
        <Image
          source={require("../../../assets/PageFood/food1.png")}
          style={{
            width: 70,
            height: 70,
            marginHorizontal: 20,
            borderRadius: 10,
          }}
        />
      </TouchableOpacity>
      <View style={{ flex: 1 }}>
        <TouchableOpacity onPress={FoodDetails}>
          <Text style={{ fontSize: 20 }}>Cherry Healthy</Text>
          <Text style={{ fontSize: 15, color: "#8D92A3" }}>IDR 289.000</Text>
        </TouchableOpacity>
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
        <Image source={require("../../../assets/PageFood/StarOff.png")} />
        <Text style={{ color: "#8D92A3", paddingHorizontal: 10 }}>4.5</Text>
      </View>
    </View>
  );
};

export default ListFood4;

const styles = StyleSheet.create({});
