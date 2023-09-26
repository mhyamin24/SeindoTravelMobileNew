import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const Pict = ({ label, focus }) => {
  switch (label) {
    case "Homepage":
      return focus ? (
        <Image
          source={require("../../assets/BottomNavigator/HomeOn.png")}
          style={{ width: 25, height: 32 }}
        />
      ) : (
        <Image
          source={require("../../assets/BottomNavigator/HomeOff.png")}
          style={{ width: 25, height: 32 }}
        />
      );
    case "Order":
      return focus ? (
        <Image
          source={require("../../assets/BottomNavigator/OrderOn.png")}
          style={{ width: 25, height: 32 }}
        />
      ) : (
        <Image
          source={require("../../assets/BottomNavigator/OrderOff.png")}
          style={{ width: 25, height: 32 }}
        />
      );
    case "Profile":
      return focus ? (
        <Image
          source={require("../../assets/BottomNavigator/ProfileOn.png")}
          style={{ width: 25, height: 32 }}
        />
      ) : (
        <Image
          source={require("../../assets/BottomNavigator/ProfileOff.png")}
          style={{ width: 25, height: 32 }}
        />
      );
    default:
  }
};

const BottomNavigator = ({ state, descriptors, navigation }) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            <Pict label={label} focus={isFocused} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "white",
    paddingTop: 15,
    paddingBottom: 13,
    paddingHorizontal: 50,

    justifyContent: "space-between",
    alignItems: "center",
  },
});
