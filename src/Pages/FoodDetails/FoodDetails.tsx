import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Button, Icon } from "@rneui/base";
import Counter from "../../Components/Counter";
import { useNavigation } from "@react-navigation/native";

const FoodDetails = () => {
  const navigation = useNavigation();

  const goToOrderSummary = () => {
    navigation.navigate("OrderSummary");
  };
  return (
    <View style={styles.page}>
      <ImageBackground
        source={require("../../../assets/PageFood/food5.png")}
        style={{
          width: 480,
          height: 300,
          borderTopLeftRadius: 20,
          //   marginHorizontal: 50,

          //   margin: 0,
        }}
      >
        <TouchableOpacity style={{}}>
          <Icon
            name="left"
            type="antdesign"
            size={25}
            style={{
              justifyContent: "center",
              alignItems: "flex-start",
              //   backgroundColor: "yellow",
              marginTop: "auto",
              padding: 20,
            }}
          ></Icon>
        </TouchableOpacity>
        {/* <Text>Hallow</Text> */}
      </ImageBackground>
      <View style={styles.container}>
        <View style={styles.mainContent}>
          <View style={styles.productContainer}>
            <View>
              <Text style={{ fontSize: 19, color: "#020202" }}>
                Cherry Healthy
              </Text>
              <View style={{ flexDirection: "row" }}>
                <Image
                  source={require("../../../assets/PageFood/StarOn.png")}
                  style={styles.imagefood}
                />
                <Image
                  source={require("../../../assets/PageFood/StarOn.png")}
                  style={styles.imagefood}
                />
                <Image
                  source={require("../../../assets/PageFood/StarOn.png")}
                  style={styles.imagefood}
                />
                <Image
                  source={require("../../../assets/PageFood/StarOn.png")}
                  style={styles.imagefood}
                />
                <Image
                  source={require("../../../assets/PageFood/StarOff.png")}
                  style={styles.imagefood}
                />
                <Text
                  style={{
                    fontSize: 19,
                    paddingHorizontal: 6,
                    justifyContent: "center",
                  }}
                >
                  4.5
                </Text>
              </View>
            </View>
            <Counter />
          </View>
          <Text style={styles.desc}>
            Makanan khas Bandung yang cukup sering dipesan oleh anak muda dengan
            pola makan yang cukup tinggi dengan mengutamakan diet yang sehat dan
            teratur
          </Text>

          <Text style={styles.label}>Ingredients</Text>
          <Text style={styles.desc}>Seledri, telur, blueberry, madu.</Text>
        </View>

        <View style={styles.footer}>
          <View style={styles.price}>
            <Text style={styles.labelTotal}>Total Price :</Text>
            <Text style={styles.priceTotal}>IDR 12.289.000</Text>
          </View>
          {/* <View style={styles.button}> */}
          <TouchableOpacity
            style={{ justifyContent: "center" }}
            onPress={goToOrderSummary}
          >
            <View
              style={{
                // flexDirection: "row",
                backgroundColor: "#FFC700",
                // marginHorizontal: 70,
                height: 50,
                width: 163,
                borderRadius: 5,

                // marginTop: 20,
                justifyContent: "center",
                alignItems: "center",
                elevation: 2,
              }}
            >
              <Text>Order Now</Text>
            </View>
          </TouchableOpacity>
          {/* </View> */}
        </View>
      </View>
    </View>
  );
};

export default FoodDetails;

const styles = StyleSheet.create({
  page: { flex: 1 },

  desc: { fontSize: 19, color: "#8D92A3", marginBottom: 16 },

  label: { fontSize: 19, color: "#020202", marginBottom: 4 },

  labelTotal: { fontSize: 19, color: "#8D92A3" },

  priceTotal: { fontSize: 24, color: "#020202" },

  price: { flex: 1 },
  mainContent: { flex: 1 },
  imagefood: {
    width: 19,
    height: 19,
  },
  container: {
    backgroundColor: "white",
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    marginTop: -10,
    paddingTop: 26,
    paddingHorizontal: 16,
    flex: 1,
  },
  productContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },
  footer: {
    flexDirection: "row",
    marginBottom: 20,
    paddingVertical: 16,
  },
});
