import { View, Text, Image } from "react-native";
import { Icon } from "@rneui/base";
import React from "react";

const Closing = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-start",
        marginHorizontal: 80,
        marginVertical: 30,
      }}
    >
      <Image
        source={require("../../assets/halloworldgray.png")}
        style={{
          height: 40,
          width: 40,
        }}
      />
      <Text style={{ fontSize: 18, paddingVertical: 20, color: "gray" }}>
        Making the world a better place through constructing elegant
        hierarchies.
      </Text>
      <View style={{ flexDirection: "row", marginVertical: 20 }}>
        <View style={{ marginRight: 25 }}>
          <Icon name="facebook" type="fontawesome5brands" size={30}></Icon>
        </View>
        <Icon name="instagram" type="antdesign" size={30}></Icon>
        <View style={{ marginLeft: 25 }}>
          <Icon name="twitter" type="antdesign" size={30}></Icon>
        </View>
        <View style={{ marginLeft: 25 }}>
          <Icon name="github" type="antdesign" size={30}></Icon>
        </View>
        <View style={{ marginLeft: 25 }}>
          <Icon name="dribbble" type="entypo" size={30}></Icon>
        </View>
      </View>
      <View style={{ flexDirection: "row", marginVertical: 15 }}>
        <Text style={{ paddingRight: 123 }}>SOLUTIONS</Text>
        <Text>COMPANY</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginVertical: 15,
        }}
      >
        <Text style={{ paddingRight: 135 }}>Marketing</Text>
        <Text>About</Text>
      </View>
      <View style={{ flexDirection: "row", marginVertical: 15 }}>
        <Text style={{ paddingRight: 140 }}>Analytics</Text>
        <Text>Blog</Text>
      </View>
      <View style={{ flexDirection: "row", marginVertical: 15 }}>
        <Text style={{ paddingRight: 130 }}>Commerce</Text>
        <Text>Jobs</Text>
      </View>
      <View style={{ flexDirection: "row", marginVertical: 15 }}>
        <Text style={{ paddingRight: 150 }}>Insights</Text>
        <Text>Press</Text>
      </View>
      <View style={{ flexDirection: "row", marginVertical: 15 }}>
        <Text style={{ paddingRight: 150 }}>Support</Text>
        <Text>Partners</Text>
      </View>
      <View style={{ flexDirection: "row", marginVertical: 15 }}>
        <Text style={{ paddingRight: 160 }}>Pricing</Text>
        <Text>Legal</Text>
      </View>
      <View style={{ flexDirection: "row", marginVertical: 15 }}>
        <Text style={{ paddingRight: 105 }}>Documentation</Text>
        <Text>Claim</Text>
      </View>
      <View style={{ flexDirection: "row", marginVertical: 15 }}>
        <Text style={{ paddingRight: 160 }}>Guides</Text>
        <Text>Privacy</Text>
      </View>
      <View style={{ flexDirection: "row", marginVertical: 15 }}>
        <Text style={{ paddingRight: 137 }}>API Status</Text>
        <Text>Terms</Text>
      </View>
      <View
        style={{
          borderBottomWidth: 1,
          width: 350,
          borderBottomColor: "gray",
          marginVertical: 30,
        }}
      ></View>
      <View style={{ marginVertical: 20, flexDirection: "row" }}>
        <Icon name="copyright" type="antdesign" size={15}></Icon>
        <Text style={{ paddingLeft: 10 }}>
          2020 Workflow, Inc. All rights reserved
        </Text>
      </View>
    </View>
  );
};

export default Closing;
