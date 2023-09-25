import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Picker } from "@react-native-community/picker";

const Select = () => {
  return (
    <View>
      <Text style={styles.label}>Select</Text>
      <View style={styles.input}>
        <Picker style={styles.picker}>
          <Picker.Item label="Ambon" value="ambon" />
          <Picker.Item label="Aceh" value="aceh" />
        </Picker>
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
    justifyContent: "center",
  },

  label: {
    fontSize: 14,
    paddingVertical: 20,
    color: "#020202",
  },

  picker: { justifyContent: "center", alignItems: "center" },
});
