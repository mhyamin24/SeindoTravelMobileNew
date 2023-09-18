import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Profile = () => {
  return (
    // <View>
    <View style={styles.profile}>
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
          <Image
            source={require("../../../assets/profileimg.png")}
            style={{
              width: 90,
              height: 90,
              borderRadius: 90,
              marginVertical: 17,
            }}
          />
        </View>
      </View>

      <Text style={{ fontSize: 18, fontWeight: "normal" }}>Angga Risky</Text>
      <Text style={{ paddingBottom: 14, color: "#8D92A3" }}>
        wepanda@gmail.com
      </Text>

      <View style={styles.account}></View>
    </View>
    //{" "}
    // </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profile: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  account: {
    backgroundColor: "white",
    marginHorizontal: 20,
  },
});
