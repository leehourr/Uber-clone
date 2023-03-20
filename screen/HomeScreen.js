import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import navOptions from "../components/navOptions";
const HomeScreen = () => {
  return (
    <SafeAreaView className="bg-white h-full">
      <View className="p-5">
        <Image
          source={{ uri: "https//links.papareact.com/gzs" }}
          style={{ width: 100, height: 100, resizeMode: "contain" }}
        />
      </View>
      <navOptions />
    </SafeAreaView>
  );
};

export default HomeScreen;
