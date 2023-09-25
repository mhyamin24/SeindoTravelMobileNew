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
    <View style={styles.page}>
      <View style={styles.container1}>
        <View style={styles.title}>
          <TouchableOpacity
            onPress={goToBack}
            style={{ justifyContent: "center" }}
          >
            <Icon
              name="left"
              type="antdesign"
              size={25}
              style={{ paddingHorizontal: 10 }}
            ></Icon>
          </TouchableOpacity>
          <Text style={{ paddingVertical: 5, fontSize: 30, fontWeight: 200 }}>
            Sign Up
          </Text>
        </View>
        <Text style={styles.subtitle}>Register and Eat</Text>
      </View>
      <View style={styles.container2}>
        <View style={styles.border}>
          <TextInput
            textAlign="center"
            style={styles.borderinput}
            placeholder="Add Photo "
          />
        </View>
        <View>
          <Text style={styles.label}>Full Name</Text>
          <TextInput
            textAlign="left"
            style={styles.input}
            placeholder="Type your full name "
          />
          <Text style={styles.label}>Email Address</Text>
          <TextInput
            textAlign="left"
            style={styles.input}
            placeholder="Enter your email"
          />
          <Text style={styles.label}>Password</Text>
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
          <Text style={styles.label}>Current Password</Text>
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

          <TouchableOpacity onPress={goToAddress}>
            <View style={styles.button}>
              <Text>Continue</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  border: {
    alignItems: "center",
    marginVertical: 20,
    borderWidth: 1,
    width: 110,
    height: 110,
    borderRadius: 110,
    borderStyle: "dashed",
    justifyContent: "center",
  },

  borderinput: {
    width: 90,
    height: 90,
    borderRadius: 50,
    backgroundColor: "white",
    padding: 20,
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFC700",
    padding: 12,
    marginVertical: 20,
    borderRadius: 8,
  },

  container1: {
    backgroundColor: "white",
    paddingHorizontal: 24,
    paddingTop: 30,
    paddingBottom: 24,
  },
  container2: {
    marginTop: 20,
    alignItems: "center",
    flex: 1,
    backgroundColor: "white",
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

  label: {
    fontSize: 14,
    paddingVertical: 10,
    color: "#020202",
  },

  page: { flex: 1 },

  title: {
    fontSize: 22,
    color: "#020202",
    flexDirection: "row",
  },

  subtitle: {
    fontSize: 14,
    color: "#8D92A3",
    paddingHorizontal: 50,
  },
});
