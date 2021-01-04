import React from "react";
import { ActivityIndicator, View } from "react-native";

export default function Loader() {
  return (
    <View>
      <ActivityIndicator size="large" color="#FB8D60" />
    </View>
  );
}
