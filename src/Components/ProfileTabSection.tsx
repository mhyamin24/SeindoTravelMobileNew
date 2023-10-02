import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { TabView, TabBar, SceneMap } from "react-native-tab-view";
import { Icon } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";

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

const Account = () => (
  <View style={styles.page}>
    <View style={styles.label}>
      <Text>Edit Profile</Text>
      <TouchableOpacity>
        <Icon
          name="right"
          type="antdesign"
          size={20}
          style={{ color: "gray" }}
        />
      </TouchableOpacity>
    </View>

    <View style={styles.label}>
      <Text>Home Address</Text>
      <TouchableOpacity>
        <Icon
          name="right"
          type="antdesign"
          size={20}
          style={{ color: "gray" }}
        />
      </TouchableOpacity>
    </View>

    <View style={styles.label}>
      <Text>Security</Text>
      <TouchableOpacity>
        <Icon
          name="right"
          type="antdesign"
          size={20}
          style={{ color: "gray" }}
        />
      </TouchableOpacity>
    </View>

    <View style={styles.label}>
      <Text>Payments</Text>
      <TouchableOpacity>
        <Icon
          name="right"
          type="antdesign"
          size={20}
          style={{ color: "gray" }}
        />
      </TouchableOpacity>
    </View>
  </View>
);

const FoodMarket = () => (
  <View style={styles.page}>
    <View style={styles.label}>
      <Text>Rate App</Text>
      <TouchableOpacity>
        <Icon
          name="right"
          type="antdesign"
          size={20}
          style={{ color: "gray" }}
        />
      </TouchableOpacity>
    </View>
    <View style={styles.label}>
      <Text>Help Center</Text>
      <TouchableOpacity>
        <Icon
          name="right"
          type="antdesign"
          size={20}
          style={{ color: "gray" }}
        />
      </TouchableOpacity>
    </View>
    <View style={styles.label}>
      <Text>Privacy & Policy</Text>
      <TouchableOpacity>
        <Icon
          name="right"
          type="antdesign"
          size={20}
          style={{ color: "gray" }}
        />
      </TouchableOpacity>
    </View>
    <View style={styles.label}>
      <Text>Terms & Conditions</Text>
      <TouchableOpacity>
        <Icon
          name="right"
          type="antdesign"
          size={20}
          style={{ color: "gray" }}
        />
      </TouchableOpacity>
    </View>
  </View>
);

const initialLayout = { width: Dimensions.get("window").width };

const ProfileTabSection = () => {
  const navigation = useNavigation();

  const Address = () => {
    navigation.navigate("Address");
  };

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "1", title: "Account" },
    { key: "2", title: "Food Market" },
  ]);

  const renderScene = SceneMap({
    1: Account,
    2: FoodMarket,
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

export default ProfileTabSection;

const styles = StyleSheet.create({
  label: {
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  page: { backgroundColor: "white", padding: 20 },
});
