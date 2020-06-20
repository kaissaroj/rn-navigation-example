import React from "react";

import { View, Text, TouchableOpacity } from "react-native";

export default function HomeScreen({ route, navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Home!</Text>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("About", {
            id: 86,
          })
        }
        style={{
          marginTop: 10,
          backgroundColor: "pink",
          padding: 20,
          height: 29,
          justifyContent: "center",
        }}
      >
        <Text>Goto About Page</Text>
      </TouchableOpacity>
    </View>
  );
}
