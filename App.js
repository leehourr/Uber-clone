import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./store/store";

export default function App() {
  return (
    <Provider store={store}>
      <View className="">
        <Text className="text-red-500">
          Open up App.js to start working on your app!
        </Text>
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}
