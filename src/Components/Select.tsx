import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Picker } from "@react-native-community/picker";
import { useState } from "react";

const Select = () => {
  const [selectedValue, setSelectedValue] = useState(null);
  return (
    <View>
      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        style={styles.input}
      >
        <Picker.Item label="Select your city" value={null} />
        <Picker.Item label="Ambon" value="ambon" />
        <Picker.Item label="Banda Aceh" value="bandaaceh" />
        <Picker.Item label="Bandung" value="bandung" />
        <Picker.Item label="Banjarmasin" value="banjarmasin" />
        <Picker.Item label="Bengkulu" value="bengkulu" />
        <Picker.Item label="Denpasar" value="denpasar" />
        <Picker.Item label="Gorontalo" value="gorontalo" />
        <Picker.Item label="Jakarta" value="jakarta" />
        <Picker.Item label="Jambi" value="jambi" />
        <Picker.Item label="Jayapura" value="jayapura" />
        <Picker.Item label="Kupang" value="kupang" />
        <Picker.Item label="Makassar" value="makassar" />
        <Picker.Item label="Mamuju" value="mamuju" />
        <Picker.Item label="Manado" value="manado" />
        <Picker.Item label="Manokwari" value="manokwari" />
        <Picker.Item label="Mataram" value="mataram" />
        <Picker.Item label="Medan" value="medan" />
        <Picker.Item label="Palangkaraya" value="palangkaraya" />
        <Picker.Item label="Palu" value="palu" />
        <Picker.Item label="Pekanbaru" value="pekanbaru" />
        <Picker.Item label="Pontianak" value="pontianak" />
        <Picker.Item label="Samarinda" value="samarinda" />
        <Picker.Item label="Semarang" value="semarang" />
        <Picker.Item label="Serang" value="serang" />
        <Picker.Item label="Sofifi" value="sofifi" />
        <Picker.Item label="Surabaya" value="surabaya" />
        <Picker.Item label="Tanjung Pinang" value="tanungpinang" />
        <Picker.Item label="Yogyakarta" value="yogyakarta" />
      </Picker>
    </View>
  );
};

export default Select;

const styles = StyleSheet.create({
  input: {
    width: 400,
    height: 35,
    elevation: 2,
    backgroundColor: "white",
    justifyContent: "center",
    marginTop: 20,
    borderColor: "black",
    borderWidth: 1,
  },

  label: {
    fontSize: 14,
    paddingVertical: 20,
    color: "#020202",
  },

  picker: { justifyContent: "center", alignItems: "center" },
});
