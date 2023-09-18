import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Icon } from "@rneui/base";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();

  const goToLoginsuccesPage = () => {
    navigation.navigate("Loginsucces");
  };

  const goToCreateAccountPage = () => {
    navigation.navigate("Signup");
  };

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
        }}
      >
        <Text style={{ paddingVertical: 10, fontSize: 30, fontWeight: 200 }}>
          Login
        </Text>
        <Text style={{ paddingBottom: 30 }}>Find your best ever meal</Text>
      </View>
      <View style={{ backgroundColor: "gray" }}>
        <Text> </Text>
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
      <View style={{ marginVertical: 10, marginHorizontal: 40 }}>
        <Text style={{ fontSize: 18 }}>Password</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.input}>
          <TextInput
            secureTextEntry={!showPassword}
            textAlign="left"
            // style={styles.input}
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
          <Text>Login</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={goToCreateAccountPage}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            // marginVertical: 20,
            marginHorizontal: 40,
            // elevation: 10,
            height: 40,
            backgroundColor: "orange",
            borderRadius: 5,
          }}
        >
          <Text>Create New Account</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    // elevation: 3,
    paddingHorizontal: 40,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    width: 400,
    height: 45,
    elevation: 2,
    borderRadius: 5,
    backgroundColor: "white",
    borderWidth: 1,
    paddingLeft: 10,
    justifyContent: "space-between",
    paddingHorizontal: 10,
    alignItems: "center",
    flexDirection: "row",
  },
});
