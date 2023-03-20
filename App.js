import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import HomeScreen from "./screens/HomeScreen";
import { store } from "./store/store";
import { NativeWindStyleSheet } from "nativewind";
import "react-native-url-polyfill/auto";
import { SafeAreaProvider } from "react-native-safe-area-context";

NativeWindStyleSheet.setOutput({
  web: "css",
  default: "native",
});

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <HomeScreen />
      </SafeAreaProvider>
    </Provider>
  );
}
