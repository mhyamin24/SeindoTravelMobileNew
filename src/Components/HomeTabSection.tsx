import { StyleSheet, Text, View, Dimensions, ScrollView } from "react-native";
import React from "react";
import { TabView, TabBar, SceneMap } from "react-native-tab-view";
import ListFood1 from "./ListFood/ListFood1";
import ListFood2 from "./ListFood/ListFood2";
import ListFood3 from "./ListFood/ListFood3";
import ListFood4 from "./ListFood/ListFood4";
import ListFood5 from "./ListFood/ListFood5";
import ListFood6 from "./ListFood/ListFood6";

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
      <ListFood1 />
      <ListFood2 />
      <ListFood3 />
      <ListFood4 />
      <ListFood5 />
      <ListFood6 />
    </View>
  </ScrollView>
);

const Popular = () => (
  <ScrollView>
    <View style={{ paddingTop: 10 }}>
      <ListFood2 />
      <ListFood4 />
      <ListFood5 />
      <ListFood6 />
      <ListFood1 />
      <ListFood3 />
    </View>
  </ScrollView>
);
const Recommended = () => (
  <ScrollView>
    <View style={{ paddingTop: 10 }}>
      <ListFood4 />
      <ListFood5 />
      <ListFood6 />
      <ListFood3 />
      <ListFood1 />
      <ListFood2 />
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
