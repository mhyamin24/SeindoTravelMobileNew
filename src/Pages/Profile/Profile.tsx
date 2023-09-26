import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import ProfileTabSection from "../../Components/ProfileTabSection";

const Profile = () => {
  console.log = (props: any) => {};
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.profile}>
        <View style={styles.header}>
          <View style={styles.borderimage}>
            <Image
              source={require("../../../assets/profileimg.png")}
              style={styles.imageprofile}
            />
          </View>
        </View>

        <Text style={{ fontSize: 18, fontWeight: "normal" }}>Angga Risky</Text>
        <Text style={{ paddingBottom: 28, color: "#8D92A3" }}>
          wepanda@gmail.com
        </Text>
      </View>
      <View style={{ flex: 1, paddingTop: 20 }}>
        <ProfileTabSection />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  borderimage: {
    alignItems: "center",
    marginVertical: 10,
    borderWidth: 1,
    width: 110,
    height: 110,
    borderRadius: 110,
    borderStyle: "dashed",
    justifyContent: "center",
  },

  header: { flexDirection: "row" },

  imageprofile: { width: 90, height: 90, borderRadius: 90 },

  profile: {
    alignItems: "center",
    paddingTop: 20,
    backgroundColor: "white",
  },
});
