import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

const Video = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        // marginTop: 10,
        paddingTop: 30,
        alignItems: "center",
      }}
    >
      <View
        style={{
          borderColor: "gray",
          borderRadius: 10,
          marginVertical: 20,
          elevation: 1,
          marginHorizontal: 65,
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
            source={require("../../assets/learnarticle.jpg")}
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
            <Text style={{ color: "#32c0cc", fontSize: 15 }}>Video</Text>
            <Text style={{ fontSize: 18 }}>
              How to use search engine optimization to drive sales
            </Text>
            <Text style={{ fontStyle: "italic", color: "#a8b8d0" }}>
              Nama Djajadi Djaja menjadi trending topik di media sosial lantaran
              disebut sebagai pemilik indomie yang lama. Djajadi Djaja bukanlah
              pemilik dari indomie instan kesukaan sejuta umat itu melainkan PT
              Salim Grup, ia pun kini memiliki Mie Gaga. Perlu diketahui kisah
              Djajadi Djaja bersama 4 orang temannya mendirikan perusahaan
              bernama Sanmaru Food Manufacturing. Dalam kisah Chow Ming Hua,
              Wahyu Tjuandi, Ulong Senjaya, dan Pandi.Sanmaru lah yang
              memproduksi Indomie untuk pertama kali yang merupakan kependekan
              dari Indonesia mie. Profil Djajadi Djaja Pemilik Mie Gaga Seperti
              diketahui, Djadi Djaja lahir pada 1941, ia adalah komisaris di PT
              Jakarana Tama. Djajadi menjadi direktur di perusahaannya itu pada
              tahun 1971-1978.
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
                // paddingRight: 50,
                // justifyContent: "flex-start",
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

export default Video;
