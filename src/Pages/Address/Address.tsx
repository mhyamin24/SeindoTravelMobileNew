import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Icon } from "@rneui/base";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Select from "../../Components/Select";

const Address = () => {
  const navigation = useNavigation();

  const goToBack = () => {
    navigation.navigate("Login");
  };

  const goToAddress = () => {
    navigation.navigate("Address");
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
            Address
          </Text>
        </View>
        <Text style={styles.subtitle}>Make sure it's valid</Text>
      </View>
      <View style={styles.container2}>
        <View style={{ marginTop: 30 }}>
          <Text style={styles.label}>Phone No</Text>
          <TextInput
            textAlign="left"
            style={styles.input}
            placeholder="Type your phone number "
          />
          <Text style={styles.label}>Address</Text>
          <TextInput
            textAlign="left"
            style={styles.input}
            placeholder="Type Your Address"
          />
          <Text style={styles.label}>House No</Text>
          <View style={styles.input}>
            <TextInput textAlign="left" placeholder="Your House Number" />
          </View>
          <Select />

          <TouchableOpacity onPress={goToAddress}>
            <View style={styles.button}>
              <Text>Sign Up Now</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Address;

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
    // borderWidth: 1,
    backgroundColor: "white",
    padding: 15,
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFC700",
    padding: 12,
    marginVertical: 30,
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
    // flexDirection: "row",
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
    paddingVertical: 20,
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
