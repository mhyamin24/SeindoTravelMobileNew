import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Icon } from "@rneui/base";
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
        style={styles.imagebg}
      >
        <TouchableOpacity style={{}}>
          <Icon
            name="left"
            type="antdesign"
            size={25}
            style={styles.icon}
          ></Icon>
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.container}>
        <View style={styles.mainContent}>
          <View style={styles.productContainer}>
            <View>
              <Text style={styles.title}>Cherry Healthy</Text>
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
                <Text style={styles.labelrate}>4.5</Text>
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
          <TouchableOpacity
            style={{ justifyContent: "center" }}
            onPress={goToOrderSummary}
          >
            <View style={styles.button}>
              <Text>Order Now</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default FoodDetails;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#FFC700",
    height: 50,
    width: 163,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
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

  desc: { fontSize: 19, color: "#8D92A3", marginBottom: 16 },

  footer: {
    flexDirection: "row",
    marginBottom: 20,
    paddingVertical: 16,
  },

  icon: { width: 480, height: 300, borderTopLeftRadius: 20 },

  imagebg: { width: 480, height: 300, borderTopLeftRadius: 20 },

  imagefood: {
    width: 19,
    height: 19,
  },

  label: { fontSize: 19, color: "#020202", marginBottom: 4 },

  labelrate: {
    fontSize: 15,
    paddingHorizontal: 6,
    justifyContent: "center",
    color: "gray",
  },

  labelTotal: { fontSize: 19, color: "#8D92A3" },

  mainContent: { flex: 1 },

  page: { flex: 1 },

  price: { flex: 1 },

  priceTotal: { fontSize: 24, color: "#020202" },

  productContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },

  title: {
    fontSize: 15,
    paddingHorizontal: 6,
    justifyContent: "center",
    color: "gray",
  },
});
