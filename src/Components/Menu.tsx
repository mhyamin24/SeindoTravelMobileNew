import { View, Text, Image, TouchableOpacity, Modal } from "react-native";
import { Icon } from "@rneui/base";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

function Menu() {
  const navigation = useNavigation();

  const goToOtherPage = () => {
    navigation.navigate("Login");
  };

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 10,
          marginTop: 25,
          paddingVertical: 10,
          backgroundColor: "white",
        }}
      >
        <Image
          source={require("../../assets/logo.png")}
          style={{ width: 55, height: 50 }}
        />
        <TouchableOpacity onPress={toggleModal}>
          <Icon name="menu" type="entypo" size={40}></Icon>
        </TouchableOpacity>
      </View>
      <StatusBar style="dark" />

      <View style={{ marginVertical: 40, flexDirection: "row" }}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={isModalVisible}
          onRequestClose={toggleModal}
        >
          <View style={{ flex: 1, alignItems: "center" }}>
            <View
              style={{
                paddingHorizontal: 150,
                borderRadius: 10,
                // marginHorizontal: 150,
                elevation: 5,
                backgroundColor: "white",
              }}
            >
              <View style={{ paddingVertical: 10, marginRight: 10 }}>
                <View
                  style={{
                    // flex: 1,
                    flexDirection: "row",
                    // alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Image
                    source={require("../../assets/halloworld.png")}
                    style={{
                      width: 40,
                      height: 40,
                      justifyContent: "space-between",
                    }}
                  />
                  <TouchableOpacity
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      paddingEnd: "auto",
                      paddingHorizontal: 40,
                    }}
                    onPress={toggleModal}
                  >
                    <Icon
                      style={{ flexDirection: "row" }}
                      name="close"
                      size={34}
                      color="gray"
                    />
                  </TouchableOpacity>
                </View>

                <Text
                  style={{
                    paddingVertical: 10,

                    textAlign: "left",
                  }}
                >
                  Home
                </Text>
                <Text
                  style={{
                    paddingVertical: 10,

                    textAlign: "left",
                  }}
                >
                  Market
                </Text>
                <Text
                  style={{
                    paddingVertical: 10,

                    textAlign: "left",
                  }}
                >
                  Blog
                </Text>
                <Text
                  style={{
                    paddingVertical: 10,

                    textAlign: "left",
                  }}
                >
                  About
                </Text>
              </View>

              <View
                style={{
                  borderRadius: 5,
                  margin: 20,
                  backgroundColor: "skyblue",
                  paddingHorizontal: 30,
                  paddingVertical: 10,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontWeight: "500",
                    // marginHorizontal: 50,
                  }}
                >
                  Start Trial
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: 20,
                }}
              >
                <Text>Existing customer?</Text>
                <TouchableOpacity onPress={goToOtherPage}>
                  <Text style={{ paddingHorizontal: 10 }}>Login</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
}

export default Menu;
