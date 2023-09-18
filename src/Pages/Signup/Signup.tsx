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

const Signup = () => {
  const navigation = useNavigation();

  const goToBack = () => {
    navigation.navigate("Login");
  };

  const goToAddress = () => {
    navigation.navigate("Address");
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
            Sign Up
          </Text>

          <Text style={{ paddingBottom: 30 }}>Register and Eat</Text>
        </View>
      </View>
      <View style={{ backgroundColor: "gray" }}>
        <Text> </Text>
      </View>
      <View
        style={{
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <View
          style={{
            alignItems: "center",
            marginVertical: 20,
            borderWidth: 1,
            width: 110,
            height: 110,
            borderRadius: 110,
            borderStyle: "dashed",
            justifyContent: "center",
          }}
        >
          <View style={{}}>
            <TextInput
              textAlign="center"
              style={{
                width: 90,
                height: 90,
                borderRadius: 50,
                // borderWidth: 1,
                backgroundColor: "white",
                padding: 15,
              }}
              placeholder="Add Photo "
            />
          </View>
        </View>
      </View>

      <View style={styles.container}></View>
      <View style={{ marginVertical: 15, marginHorizontal: 40 }}>
        <Text style={{ fontSize: 18 }}>Full Name</Text>
      </View>
      <View style={styles.container}>
        <TextInput
          textAlign="left"
          style={styles.input}
          placeholder="Type your full name "
        />
      </View>
      <View style={{ marginVertical: 15, marginHorizontal: 40 }}>
        <Text style={{ fontSize: 18 }}>Email Address</Text>
      </View>
      <View style={styles.container}>
        <TextInput
          textAlign="left"
          style={styles.input}
          placeholder="Enter your email"
        />
      </View>
      <View style={{ marginVertical: 15, marginHorizontal: 40 }}>
        <Text style={{ fontSize: 18 }}>Password</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.input}>
          <TextInput
            secureTextEntry={!showPassword}
            textAlign="left"
            placeholder="Password"
          />
          <TouchableOpacity onPress={togglePasswordVisibility}>
            <Icon
              name={showPassword ? "eye" : "eye-with-line"}
              type="entypo"
              size={20}
              color={"gray"}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ marginVertical: 10, marginHorizontal: 40 }}>
        <Text style={{ fontSize: 18 }}>Current Password</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.input}>
          <TextInput
            secureTextEntry={!showCurrentPassword}
            textAlign="left"
            placeholder="Password"
          />
          <TouchableOpacity onPress={toggleCurrentPasswordVisibility}>
            <Icon
              name={showCurrentPassword ? "eye" : "eye-with-line"}
              type="entypo"
              size={20}
              color={"gray"}
            />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity onPress={goToAddress}>
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
          <Text>Continue</Text>
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
