import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Icon } from "@rneui/base";
import Learn from "../Components/Learn";
import Menu from "../Components/Menu";
import Video from "../Components/Video";
import CaseStudy from "../Components/CaseStudy";
import Help from "../Components/Help";
import Closing from "../Components/Closing";

export default function Home() {
  function Subscribe() {
    alert("Terima kasih sudah Subscribe");
  }

  return (
    <View>
      <ScrollView>
        <View
          style={{
            flex: 1,
            backgroundColor: "#FFFD8C",
          }}
        >
          <Menu />
          <View
            style={{
              borderRadius: 45,
              backgroundColor: "white",
              justifyContent: "center",
              alignItems: "flex-start",
              marginHorizontal: 70,
              paddingVertical: 5,
            }}
          >
            <View
              style={{
                borderRadius: 15,

                flexDirection: "row",
                marginHorizontal: 20,
              }}
            >
              <Text
                style={{
                  backgroundColor: "#FF9B9B",
                  marginRight: 15,
                  borderRadius: 15,
                  paddingHorizontal: 5,
                  textAlign: "left",
                }}
              >
                OUCH! HUNGRY
              </Text>
              <Text style={{ paddingHorizontal: 20 }}>Visit Our Market</Text>
              <Icon name="right" type="antdesign" size={20}></Icon>
            </View>
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginVertical: 20,
              paddingHorizontal: 70,
            }}
          >
            <Text style={{ textAlign: "left", fontSize: 31, color: "#040D12" }}>
              Seems like you have not ordered any food yet
            </Text>
            <Text
              style={{
                marginTop: 15,
                fontSize: 15,
                marginBottom: 30,
                color: "#D21312",
                fontStyle: "italic",
                fontWeight: "300",
              }}
            >
              Just stay at home while we are preparing your best foods
            </Text>
            <View style={styles.container}>
              <TextInput
                textAlign="left"
                style={styles.input}
                placeholder="Enter your email"
              />
            </View>
          </View>
          <TouchableOpacity onPress={() => Subscribe()}>
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "#EF6262",
                marginHorizontal: 70,
                height: 40,
                borderRadius: 5,
                // marginTop: 20,
                justifyContent: "center",
                alignItems: "center",
                elevation: 5,
              }}
            >
              <Text>Subscribe</Text>
            </View>
          </TouchableOpacity>
          <View
            style={{
              marginTop: 10,
              alignItems: "center",
              justifyContent: "center",
              paddingHorizontal: 35,

              // marginHorizontal: 10,
            }}
          >
            <Text>
              Subscribe to get catalog information and other interesting
              promotion
            </Text>
            <TouchableOpacity
              style={{
                paddingLeft: 5,
                marginBottom: 10,
                pointerEvents: "auto",
              }}
            >
              <Text style={{ color: "white" }}>term of service</Text>
            </TouchableOpacity>
          </View>
          <Learn />
          <Video />
          <CaseStudy />
        </View>
        <Help />
        <Closing />
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    elevation: 3,
    alignItems: "center",
    // padding: 30,
  },
  input: {
    width: 340,
    height: 45,
    borderRadius: 5,
    backgroundColor: "white",
    borderWidth: 1,
    paddingLeft: 10,

    // paddingHorizontal: 120,
  },
});
