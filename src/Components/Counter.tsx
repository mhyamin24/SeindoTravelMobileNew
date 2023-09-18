import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const Counter = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image source={require("../../assets/PageFood/btnMin.png")} />
      </TouchableOpacity>
      <Text style={styles.value}>13</Text>

      <TouchableOpacity>
        <Image source={require("../../assets/PageFood/btnPlus.png")} />
      </TouchableOpacity>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: { flexDirection: "row", alignItems: "center" },
  value: { fontSize: 16, marginHorizontal: 10, color: "#020202" },
});
