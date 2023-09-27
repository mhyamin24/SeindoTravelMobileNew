import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

const Exorder = () => {
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
          source={require("../../../assets/PageFood/orderpict.png")}
          style={{ width: 200, height: 221 }}
        ></Image>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            paddingTop: 30,
            paddingBottom: 6,
          }}
        >
          Ouch! Hungry
        </Text>
        <Text style={{ fontSize: 20, color: "#8D92A3" }}>
          Seems like you have not
        </Text>
        <Text style={{ fontSize: 20, color: "#8D92A3" }}>
          ordered any food yet
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

export default Exorder;

const styles = StyleSheet.create({});
