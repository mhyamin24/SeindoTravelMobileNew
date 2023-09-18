import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Picker } from "@react-native-community/picker";

const Select = () => {
  return (
    <View>
      <View style={{ marginVertical: 15, marginHorizontal: 40 }}>
        <Text style={{ fontSize: 18 }}>Select</Text>
        <View style={styles.input}>
          <Picker>
            <Picker.Item label="Ambon" value="ambon" />
            <Picker.Item label="Aceh" value="aceh" />
          </Picker>
        </View>
      </View>
    </View>
  );
};

export default Select;

const styles = StyleSheet.create({
  input: {
    width: 400,
    height: 45,
    elevation: 2,
    borderRadius: 5,
    backgroundColor: "white",
    borderWidth: 1,
    paddingLeft: 3,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
});
