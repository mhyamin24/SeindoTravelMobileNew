import React from "react";
import { Text, SafeAreaView, StatusBar } from "react-native";
import Home from "./src/Home/Home";
import Login from "./src/Pages/Login/Login";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Signup from "./src/Pages/Signup/Signup";
import Loginsucces from "./src/Pages/Loginsucces/Loginsucces";
import Address from "./src/Pages/Address/Address";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Homepage from "./src/Pages/Homepage.tsx/Homepage";
import Order from "./src/Pages/Order/Order";
import Profile from "./src/Pages/Profile/Profile";
import BottomNavigator from "./src/Components/BottomNavigator";
import FoodDetails from "./src/Pages/FoodDetails/FoodDetails";
import OrderSummary from "./src/Pages/OrderSummary/OrderSummary";
import SuccesOrder from "./src/Pages/SuccesOrder/SuccesOrder";
import Payment from "./src/Pages/Payment/Payment";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={(props) => <BottomNavigator {...props} />}>
      <Tab.Screen name="Homepage" component={Homepage} />
      <Tab.Screen name="Order" component={Order} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Loginsucces" component={Loginsucces} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Address" component={Address} />
        <Stack.Screen name="MainApp" component={MainApp} />
        <Stack.Screen name="FoodDetails" component={FoodDetails} />
        <Stack.Screen name="OrderSummary" component={OrderSummary} />
        <Stack.Screen name="SuccesOrder" component={SuccesOrder} />
        <Stack.Screen name="Payment" component={Payment} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
