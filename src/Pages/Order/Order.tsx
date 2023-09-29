import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import EmptyOrder from "../EmptyOrder.tsx/EmptyOrder";
import OrderTab from "../../Components/OrderTab";
import ExOrder from "../../Components/Exorder";

const Order = () => {
  const [isEmpty] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      {isEmpty ? (
        <EmptyOrder />
      ) : (
        <View style={{ flex: 1 }}>
          <ExOrder />
        </View>
      )}
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({});
