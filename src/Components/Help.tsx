import { View, Text, Image } from "react-native";
import React from "react";
import { Icon } from "@rneui/base";

const Help = () => {
  return (
    <View style={{ backgroundColor: "#040D12" }}>
      <View style={{ flex: 1 }}>
        <Image
          source={require("../../assets/meeting.jpg")}
          style={{ width: 480, height: 300 }}
        />
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "flex-start",
            marginVertical: 20,
            marginHorizontal: 80,
          }}
        >
          <Text style={{ color: "white", fontSize: 15 }}>
            AWARD WINNING SUPPORT
          </Text>
          <Text style={{ color: "white", fontSize: 20 }}>
            We're here to help
          </Text>
          <Text style={{ color: "white", fontSize: 15 }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Text>
          <View
            style={{
              flexDirection: "row",
              borderRadius: 5,
              backgroundColor: "white",
              paddingHorizontal: 20,
              paddingVertical: 10,
              elevation: 3,
              marginVertical: 30,
            }}
          >
            <Text style={{ paddingRight: 15 }}>Visit the help center</Text>
            <Icon name="help" type="entypo" size={15}></Icon>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Help;
