import React from "react";
import { View, Text} from "react-native";
import { useNetInfo } from "@react-native-community/netinfo";

export default function Connection() {
  const netInfo = useNetInfo();
  return (
    <View>
      <Text>Type: {netInfo.type}</Text>
      <Text>Is Connected? {netInfo.isConnected.toString()}</Text>
    </View>
  );
}
