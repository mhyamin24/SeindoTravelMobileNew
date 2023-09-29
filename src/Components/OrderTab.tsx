import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { TabView, TabBar, SceneMap } from "react-native-tab-view";
import { Icon } from "@rneui/base";

const renderTabBar = (props) => (
  <TabBar
    {...props}
    indicatorStyle={{
      backgroundColor: "#020202",
      height: 3,
      width: 0.4,
      marginHorizontal: 4,
    }}
    style={{ backgroundColor: "white" }}
    tabStyle={{ width: "auto" }}
    renderLabel={({ route, focused, color }) => (
      <Text style={{ color: focused ? "#020202" : "#8092A3", margin: 8 }}>
        {route.title}
      </Text>
    )}
  />
);

const InProgress = () => (
  <View style={styles.page}>
    <View style={styles.labelimage}>
      <TouchableOpacity>
        <Image
          source={require("../../assets/PageFood/order1.png")}
          style={styles.image}
        />
      </TouchableOpacity>
      <View style={styles.labeltext}>
        <Text style={{ fontSize: 20, fontWeight: "300" }}>Avosalado</Text>
        <Text style={{ color: "#8D92A3" }}>3 Items • IDR 18.000.000</Text>
      </View>
    </View>

    <View style={styles.labelimage}>
      <TouchableOpacity>
        <Image
          source={require("../../assets/PageFood/order2.png")}
          style={styles.image}
        />
      </TouchableOpacity>
      <View style={styles.labeltext}>
        <Text style={{ fontSize: 20, fontWeight: "300" }}>Kopi Kudda</Text>
        <Text style={{ color: "#8D92A3" }}>10 Items • IDR 450.000</Text>
      </View>
    </View>

    <View style={styles.labelimage}>
      <TouchableOpacity>
        <Image
          source={require("../../assets/PageFood/order3.png")}
          style={styles.image}
        />
      </TouchableOpacity>
      <View style={styles.labeltext}>
        <Text style={{ fontSize: 20, fontWeight: "300" }}>Es Tong-Tong</Text>
        <Text style={{ color: "#8D92A3" }}>2 Items • IDR 900.500</Text>
      </View>
    </View>

    <View style={styles.labelimage}>
      <TouchableOpacity>
        <Image
          source={require("../../assets/PageFood/order4.png")}
          style={styles.image}
        />
      </TouchableOpacity>
      <View style={styles.labeltext}>
        <Text style={{ fontSize: 20, fontWeight: "300" }}>Bawang Putih</Text>
        <Text style={{ color: "#8D92A3" }}>10 Items • IDR 450.000</Text>
      </View>
    </View>
  </View>
);

const PastOrders = () => (
  <View style={styles.page}>
    <View style={styles.labelimage}>
      <TouchableOpacity>
        <Image
          source={require("../../assets/PageFood/order5.png")}
          style={styles.image}
        />
      </TouchableOpacity>
      <View style={styles.labeltext}>
        <Text style={{ fontSize: 20, fontWeight: "300" }}>Kari Sleman</Text>
        <Text style={{ color: "#8D92A3", paddingTop: 5 }}>
          1 Item • IDR 289.000
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#8D92A3" }}>Jun 12, 14:00</Text>
      </View>
    </View>

    <View style={styles.labelimage}>
      <TouchableOpacity>
        <Image
          source={require("../../assets/PageFood/order1.png")}
          style={styles.image}
        />
      </TouchableOpacity>
      <View style={styles.labeltext}>
        <Text style={{ fontSize: 20, fontWeight: "300" }}>Avosalado</Text>
        <Text style={{ color: "#8D92A3", paddingTop: 5 }}>
          1 Item • IDR 6.000.000
        </Text>
      </View>
      <View
        style={{
          paddingTop: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#8D92A3" }}>Mei 2, 09:00</Text>

        <Text style={{ paddingTop: 5, color: "#D9435E" }}>Cancelled</Text>
      </View>
    </View>
  </View>
);

const initialLayout = { width: Dimensions.get("window").width };

const OrderTab = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "1", title: "In Progress" },
    { key: "2", title: "Past Orders" },
  ]);

  const renderScene = SceneMap({
    1: InProgress,
    2: PastOrders,
  });
  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: initialLayout.width }}
    />
  );
};

export default OrderTab;

const styles = StyleSheet.create({
  image: { width: 90, height: 90, borderRadius: 10 },

  labelimage: {
    paddingVertical: 10,
    flexDirection: "row",
  },

  labeltext: {
    paddingHorizontal: 15,
    justifyContent: "center",
    paddingTop: 10,
    flex: 1,
  },

  page: { backgroundColor: "white", padding: 20 },
});
