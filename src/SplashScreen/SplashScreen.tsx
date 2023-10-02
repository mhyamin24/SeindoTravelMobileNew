import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const SplashScreen = () => {
  const navigation = useNavigation();

  const goToLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.page}>
      <TouchableOpacity onPress={goToLogin}>
        <Image
          source={require("../../assets/SplashScreen.png")}
          style={{ width: 100, height: 100 }}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={goToLogin}>
        <Text style={styles.label}>Food Market</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  label: { fontSize: 40, paddingVertical: 20 },

  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFC700",
  },
});
