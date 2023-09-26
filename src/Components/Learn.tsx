import { View, Text, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

const Learn = () => {
  const handlePress = () => {};
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        marginTop: 10,
        paddingTop: 30,
        alignItems: "center",
      }}
    >
      <Text style={{ color: "#116A7B", paddingVertical: 10, fontSize: 20 }}>
        {" "}
        LEARN
      </Text>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>
        Helpful Resources
      </Text>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 40,
          marginVertical: 10,
          paddingBottom: 20,
        }}
      >
        <Text>
          Phasellus lorem quam molestie id quisque diam aenean nulla in.
          Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend
          condimentum id viverra nulla.
        </Text>
      </View>
      <View
        style={{
          borderColor: "gray",
          borderRadius: 10,
          marginVertical: 10,
          elevation: 1,
          marginHorizontal: 68,
        }}
      >
        <View
          style={{
            flexDirection: "column",
            borderRadius: 5,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../../assets/djajadi.jpg")}
            style={{
              width: 350,
              height: 170,
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
            }}
          />
          <View
            style={{
              marginTop: 20,
              paddingHorizontal: 50,
            }}
          >
            <Text style={{ color: "#32c0cc", fontSize: 15 }}>Article</Text>
            <Text style={{ fontSize: 20 }}>Boost your conversion rate</Text>
            <Text style={{ fontStyle: "italic", color: "#a8b8d0" }}>
              Bapak Djajadi Djaja, Warga Negara Indonesia, lahir pada tahun
              1941, mengawali kariernya pada tahun 1959 sebagai wiraswasta,
              kemudian menjadi salah satu pendiri FA Djangkar Djati pada tahun
              1964. Dalam perjalanan karirnya pernah menjabat sebagai Direktur
              PT. Sanmaru Food Manufacturing pada tahun 1971 sampai 1978.
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              marginVertical: 30,
            }}
          >
            <Image
              source={require("../../assets/learn.jpg")}
              style={{
                width: 50,
                height: 50,
                borderRadius: 50,
              }}
            />
            <View
              style={{
                flexDirection: "column",
                marginVertical: 5,
                paddingRight: 25,
              }}
            >
              <TouchableOpacity>
                <Text style={{ color: "gray", paddingLeft: 20 }}>
                  Djajadi Djaja
                </Text>
              </TouchableOpacity>
              <Text style={{ color: "gray", paddingLeft: 20 }}>
                Mar 16, 2020 . 6 min read
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Learn;
