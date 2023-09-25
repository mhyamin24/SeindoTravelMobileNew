import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "@rneui/base";

const Login = () => {
  const navigation = useNavigation();

  const goToLoginSucces = () => {
    navigation.navigate("Loginsucces");
  };

  const goToCreateAccount = () => {
    navigation.navigate("Signup");
  };

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.page}>
      <View style={styles.container1}>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.subtitle}>Find your beat meal</Text>
      </View>

      <View style={styles.container2}>
        <View style={{ paddingBottom: 16 }}>
          <Text style={styles.label}>Email Address</Text>
          <TextInput style={styles.input1} placeholder="Enter your email" />
        </View>

        <View style={{ paddingBottom: 24 }}>
          <Text style={styles.label}>Password</Text>
          <View style={styles.passwordinput}>
            <TextInput
              placeholder="Password"
              secureTextEntry={!showPassword}
              textAlign="left"
            />

            <TouchableOpacity
              onPress={togglePasswordVisibility}
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <Icon
                name={showPassword ? "eye" : "eye-off"}
                type="feather"
                size={20}
                color={"gray"}
              />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity onPress={goToLoginSucces}>
          <View style={styles.button1}>
            <Text>Login</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={goToCreateAccount}>
          <View style={styles.button2}>
            <Text>Create New Account</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  button1: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFC700",
    padding: 12,
    marginVertical: 10,
    borderRadius: 8,
  },
  button2: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8D92A3",
    padding: 12,
    marginVertical: 10,
    borderRadius: 8,
  },

  container1: {
    backgroundColor: "white",
    paddingHorizontal: 24,
    paddingTop: 30,
    paddingBottom: 24,
  },
  container2: {
    backgroundColor: "white",
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
    flex: 1,
  },

  input1: {
    width: 430,
    borderWidth: 1,
    borderColor: "#020202",
    borderRadius: 8,
    padding: 10,
  },
  input2: {
    width: 430,
    borderWidth: 1,
    borderColor: "#020202",
    borderRadius: 8,
    padding: 10,
  },

  label: {
    fontSize: 14,
    paddingBottom: 10,
    color: "#020202",
  },

  page: {
    flex: 1,
  },

  passwordinput: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#020202",
    borderRadius: 8,
    padding: 10,
  },
  title: {
    fontSize: 22,
    color: "#020202",
  },
  subtitle: {
    fontSize: 14,
    color: "#8D92A3",
  },
});
