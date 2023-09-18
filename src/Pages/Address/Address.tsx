import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Icon } from "@rneui/base";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Select from "../../Components/Select";

const Signup = () => {
  const navigation = useNavigation();

  const goToBack = () => {
    navigation.navigate("Login");
  };

  const goToLoginsuccesPage = () => {
    navigation.navigate("Loginsucces");
  };

  const [showPassword, setShowPassword] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleCurrentPasswordVisibility = () => {
    setShowCurrentPassword(!showCurrentPassword);
  };
  return (
    <View style={{ flex: 1, backgroundColor: "#FFFD8C" }}>
      <View
        style={{
          // flex: 1,
          justifyContent: "flex-start",
          marginTop: 30,
          paddingHorizontal: 40,
          backgroundColor: "white",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={goToBack}>
          <Icon name="left" type="antdesign" size={30}></Icon>
        </TouchableOpacity>
        <View
          style={{
            marginTop: 20,
            paddingLeft: 20,
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Text style={{ paddingVertical: 5, fontSize: 30, fontWeight: 200 }}>
            Address
          </Text>

          <Text style={{ paddingBottom: 30 }}>Make sure it's Valid</Text>
        </View>
      </View>
      <View style={{ backgroundColor: "gray" }}>
        <Text> </Text>
      </View>

      <View style={styles.container}></View>
      <View style={{ marginVertical: 15, marginHorizontal: 40 }}>
        <Text style={{ fontSize: 18 }}>Phone Number </Text>
      </View>
      <View style={styles.container}>
        <TextInput textAlign="left" style={styles.input} placeholder="+62 " />
      </View>
      <View style={{ marginVertical: 15, marginHorizontal: 40 }}>
        <Text style={{ fontSize: 18 }}> Address</Text>
      </View>
      <View style={styles.container}>
        <TextInput
          textAlign="left"
          style={styles.input}
          placeholder="Your address"
        />
      </View>
      <View style={{ marginVertical: 15, marginHorizontal: 40 }}>
        <Text style={{ fontSize: 18 }}>House No</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.input}>
          <TextInput textAlign="left" placeholder=" House number" />
        </View>
      </View>
      <Select />

      <TouchableOpacity onPress={goToLoginsuccesPage}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 20,
            marginHorizontal: 40,
            height: 40,
            backgroundColor: "orange",
            borderRadius: 5,
          }}
        >
          <Text>Sign Up Now</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 40,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    width: 400,
    alignItems: "center",
    flexDirection: "row",
    height: 45,
    elevation: 2,
    borderRadius: 5,
    backgroundColor: "white",
    borderWidth: 1,
    paddingLeft: 10,
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
});
