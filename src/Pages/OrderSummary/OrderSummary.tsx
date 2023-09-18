import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Icon } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";

const OrderSummary = () => {
  const navigation = useNavigation();

  const goToSuccesOrder = () => {
    navigation.navigate("SuccesOrder");
  };

  return (
    <View>
      <View>
        <View
          style={{
            justifyContent: "flex-start",
            marginTop: 30,
            paddingHorizontal: 40,
            backgroundColor: "white",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View>
            <TouchableOpacity>
              <Icon name="left" type="antdesign" size={30}></Icon>
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginTop: 20,
              paddingLeft: 20,
              flexDirection: "column",
              // alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 25 }}>Payment </Text>

            <Text style={{ paddingBottom: 30, color: "#8D92A3" }}>
              You deserve better meal
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "white",
            marginTop: 20,
            paddingHorizontal: 10,
            // marginBottom: 20
          }}
        >
          <Text style={{ paddingTop: 10 }}>Item Ordered</Text>
          <View>
            <View
              style={{
                flexDirection: "row",
                paddingTop: 20,
              }}
            >
              <Image
                source={require("../../../assets/PageFood/food6.png")}
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 10,
                }}
              />
              <View style={{ flex: 1 }}>
                <View style={{ paddingLeft: 10 }}>
                  <Text>Cherry Healthy</Text>
                  <Text style={styles.label}>IDR. 289.000</Text>
                </View>
              </View>

              <Text style={styles.label}>14 Items</Text>
            </View>
          </View>
          <View style={{ paddingVertical: 15 }}>
            <Text>Detail Transaction</Text>
            <View style={{ paddingTop: 10 }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingVertical: 2,
                }}
              >
                <Text style={styles.label}>Cherry Healthy</Text>
                <Text>IDR 18.390.000</Text>
              </View>
            </View>
            <View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingVertical: 2,
                }}
              >
                <Text style={styles.label}>Driver</Text>
                <Text>IDR 50.000</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingVertical: 2,
                }}
              >
                <Text style={styles.label}>Tax 10%</Text>
                <Text>IDR 1.800.390</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingVertical: 2,
                }}
              >
                <Text style={styles.label}>Total Price</Text>
                <Text style={{ color: "#1ABC9C" }}>IDR 390.803.000</Text>
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
            paddingVertical: 15,
            backgroundColor: "white",
            marginTop: 20,
            paddingHorizontal: 10,
          }}
        >
          <Text>Detail Transaction</Text>
          <View style={{ paddingTop: 10 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingVertical: 2,
              }}
            >
              <Text style={styles.label}>Name</Text>
              <Text>Angga Risky</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingVertical: 2,
              }}
            >
              <Text style={styles.label}>Phone No.</Text>
              <Text>0822 0819 9688</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingVertical: 2,
              }}
            >
              <Text style={styles.label}>Address</Text>
              <Text>Setra Duta Prima</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingVertical: 2,
              }}
            >
              <Text style={styles.label}>House No.</Text>
              <Text>A5 Hook</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingVertical: 2,
              }}
            >
              <Text style={styles.label}>City</Text>
              <Text>Bandung</Text>
            </View>
          </View>
        </View>
        {/* </View> */}

        <TouchableOpacity onPress={goToSuccesOrder}>
          <View style={styles.footer}>
            <Text>Checkout Now</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OrderSummary;

const styles = StyleSheet.create({
  label: { color: "#8D92A3" },
  footer: {
    backgroundColor: "#FFC700",
    marginTop: 24,
    marginHorizontal: 20,
    paddingVertical: 13,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    elevation: 3,
  },
});
