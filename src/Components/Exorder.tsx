import { StyleSheet, Text, View } from "react-native";
import React from "react";
import OrderTab from "./OrderTab";

const ExOrder = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container1}>
        <View style={styles.title}>
          <Text style={{ paddingVertical: 5, fontSize: 30, fontWeight: 200 }}>
            Your Orders
          </Text>
        </View>
        <Text style={styles.subtitle}>Wait for the best meal</Text>
      </View>
      <View style={{ flex: 1, paddingTop: 20 }}>
        <OrderTab />
      </View>
    </View>
  );
};

export default ExOrder;

const styles = StyleSheet.create({
  container1: {
    backgroundColor: "white",
    paddingHorizontal: 24,
    paddingTop: 30,
    paddingBottom: 24,
  },

  title: {
    fontSize: 22,
    color: "#020202",
    flexDirection: "row",
  },
  subtitle: {
    fontSize: 14,
    color: "#8D92A3",
    // paddingHorizontal: 50,
  },
});
