import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const SuccesOrder = () => {
  const navigation = useNavigation();

  const goToHomepage = () => {
    navigation.navigate("Homepage");
  };

  const goToPayment = () => {
    navigation.navigate("Payment");
  };
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/Succesorder.png")}
        style={{ height: 176, width: 200 }}
      />
      <View style={{ marginVertical: 10 }}>
        <Text style={{ fontSize: 20 }}>You've Made Order</Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <Text style={{ fontSize: 14, color: "#8D92A3" }}>
          {" "}
          Just stay at home while we are
        </Text>
        <Text style={{ fontSize: 14, color: "#8D92A3" }}>
          {" "}
          preparing your best foods
        </Text>
      </View>
      <TouchableOpacity onPress={goToHomepage}>
        <View
          style={{
            marginTop: 20,
            width: 200,
            height: 45,
            backgroundColor: "#FFC700",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 5,
            elevation: 3,
          }}
        >
          <Text style={{ color: "#020202" }}>Order Other Foods</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={goToPayment}>
        <View
          style={{
            marginTop: 20,
            width: 200,
            height: 45,
            backgroundColor: "#8D92A3",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 5,
            elevation: 3,
          }}
        >
          <Text style={{ color: "#F9FAFF" }}>View My Order</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SuccesOrder;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "white",
  },
});
