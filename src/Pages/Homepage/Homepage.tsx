import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import HomeTabSection from "../../Components/HomeTabSection";

const Homepage = () => {
  const navigation = useNavigation();

  const FoodDetails = () => {
    navigation.navigate("FoodDetails");
  };
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.profile}>
        <View>
          <Text style={{ paddingTop: 10, fontSize: 30, fontWeight: "bold" }}>
            Food Market
          </Text>
          <Text style={{ paddingBottom: 20 }}>Let's get some foods</Text>
        </View>
        <Image
          source={require("../../../assets/profileimg.png")}
          style={{
            width: 50,
            height: 50,
            borderRadius: 10,
            marginVertical: 17,
          }}
        />
      </View>
      <View></View>
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity onPress={FoodDetails}>
              <View style={styles.food}>
                <Image
                  source={require("../../../assets/PageFood/food1.png")}
                  style={{
                    paddingHorizontal: 20,
                    width: 200,
                    height: 135,
                  }}
                />

                <View style={{ padding: 12 }}>
                  <Text style={{ fontSize: 16 }}>Cherry Healthy</Text>
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
                    <Text style={{}}>4.5</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.food}>
                <Image
                  source={require("../../../assets/PageFood/food2.png")}
                  style={{
                    paddingHorizontal: 20,
                    width: 200,
                    height: 135,
                  }}
                />
                <View style={{ padding: 12 }}>
                  <Text style={{ fontSize: 16 }}>Soup Bumil</Text>
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
                    <Text style={{}}>4.5</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.food}>
                <Image
                  source={require("../../../assets/PageFood/food3.png")}
                  style={{
                    paddingHorizontal: 20,
                    width: 200,
                    height: 135,
                  }}
                />

                <View style={{ margin: 12 }}>
                  <Text style={{ fontSize: 16 }}>Chiken</Text>
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
                    <Text style={{}}>4.5</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.food}>
                <Image
                  source={require("../../../assets/PageFood/food4.png")}
                  style={{
                    paddingHorizontal: 20,
                    width: 200,
                    height: 135,
                  }}
                />

                <View style={{ margin: 12 }}>
                  <Text style={{ fontSize: 16 }}>Shrimp</Text>
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
                    <Text style={{}}>4.5</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      <View style={{ flex: 1 }}>
        <HomeTabSection />
      </View>
    </View>
  );
};

export default Homepage;

const styles = StyleSheet.create({
  profile: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 24,
    backgroundColor: "white",
  },
  food: {
    width: 200,
    backgroundColor: "white",
    borderRadius: 8,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 14,
    overflow: "hidden",
    marginLeft: 12,
    marginVertical: 12,
    marginRight: 12,
  },
  imagefood: {
    width: 16,
    height: 16,
  },
});
