import { StyleSheet, Text, View, Dimensions, ScrollView } from "react-native";
import React from "react";
import { TabView, TabBar, SceneMap } from "react-native-tab-view";
import ListFood from "./ListFood";

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

const NewTaste = () => (
  <ScrollView>
    <View style={{ paddingTop: 10 }}>
      <ListFood />
      <ListFood />
      <ListFood />
      <ListFood />
      <ListFood />
      <ListFood />
    </View>
  </ScrollView>
);

const Popular = () => (
  <ScrollView>
    <View style={{ paddingTop: 10 }}>
      <ListFood />
      <ListFood />
      <ListFood />
      <ListFood />
      <ListFood />
      <ListFood />
    </View>
  </ScrollView>
);
const Recommended = () => (
  <ScrollView>
    <View style={{ paddingTop: 10 }}>
      <ListFood />
      <ListFood />
      <ListFood />
      <ListFood />
      <ListFood />
      <ListFood />
    </View>
  </ScrollView>
);
const initialLayout = { width: Dimensions.get("window").width };

const HomeTabSection = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "1", title: "New Taste" },
    { key: "2", title: "Popular" },
    { key: "3", title: "Recommended" },
  ]);

  const renderScene = SceneMap({
    1: NewTaste,
    2: Popular,
    3: Recommended,
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

export default HomeTabSection;

const styles = StyleSheet.create({});
