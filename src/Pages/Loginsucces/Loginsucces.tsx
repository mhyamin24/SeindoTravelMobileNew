import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

const Loginsucces = () => {
  const navigation = useNavigation();

  const goToMainApp = () => {
    navigation.navigate("MainApp");
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <StatusBar style="auto" />
      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../../../assets/loginpict.png")}
          style={{ width: 280, height: 400 }}
        ></Image>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            paddingTop: 30,
            paddingBottom: 6,
          }}
        >
          Yeay! Completed
        </Text>
        <Text style={{ fontSize: 20, color: "#8D92A3" }}>
          Now you are able to order
        </Text>
        <Text style={{ fontSize: 20, color: "#8D92A3" }}>
          Some foods as a self-reward
        </Text>
      </View>
      <TouchableOpacity onPress={goToMainApp}>
        <View
          style={{
            marginTop: 30,
            backgroundColor: "#FFC700",
            paddingVertical: 15,
            paddingHorizontal: 100,
            borderRadius: 10,
            elevation: 3,
          }}
        >
          <Text style={{ fontWeight: "normal" }}>Find Foods</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Loginsucces;

const styles = StyleSheet.create({});
