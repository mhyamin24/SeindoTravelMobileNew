import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Icon } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";
import { SceneMap, TabView } from "react-native-tab-view";

const Profile = () => {
  console.log = (props: any) => {};
  const navigation = useNavigation();

  const [showView1, setShowView1] = useState(true);
  const [showView2, setShowView2] = useState(false);

  const toggleView1 = () => {
    setShowView1(true);
  };

  const toggleView2 = () => {
    setShowView2(false);
  };

  return (
    <View>
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
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            paddingVertical: 20,
          }}
        >
          <TouchableOpacity onPress={toggleView1}>
            <Text
              style={[
                styles.activeText,
                showView1 ? styles.activeText : styles.inactiveText,
              ]}
            >
              Account
            </Text>
          </TouchableOpacity>
          <View>
            <TouchableOpacity onPress={toggleView2}>
              <Text
                style={[
                  styles.inactiveText,
                  !showView1 ? styles.activeText : styles.inactiveText,
                ]}
              >
                Food Market
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ paddingVertical: 10 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ paddingVertical: 10 }}>Edit Profile</Text>
            <TouchableOpacity>
              <Icon name="chevron-small-right" type="entypo" size={30} />
            </TouchableOpacity>
          </View>

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ paddingVertical: 10 }}>Home Address</Text>
            <TouchableOpacity>
              <Icon name="chevron-small-right" type="entypo" size={30} />
            </TouchableOpacity>
          </View>

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ paddingVertical: 10 }}>Security</Text>
            <TouchableOpacity>
              <Icon name="chevron-small-right" type="entypo" size={30} />
            </TouchableOpacity>
          </View>

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ paddingVertical: 10 }}>Payments</Text>
            <TouchableOpacity>
              <Icon name="chevron-small-right" type="entypo" size={30} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    backgroundColor: "white",
    justifyContent: "center",
    paddingHorizontal: 30,
  },

  activeText: {
    fontSize: 15,
    color: "#020202",
  },

  inactiveText: { fontSize: 15, paddingLeft: 30, color: "#8D92A3" },

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
