import React from "react";
import { View, Text } from "react-native";

export default function AboutScreen({ route, navigation }) {
  const { id } = route.params;
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>About Page</Text>
      <Text>ID: {id}</Text>
    </View>
  );
}
