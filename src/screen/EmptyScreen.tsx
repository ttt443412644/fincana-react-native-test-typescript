import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function () {
  return (
    <View
      style={[
        StyleSheet.absoluteFill,
        {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
      ]}
    >
      <Text>Empty screen</Text>
    </View>
  );
}
