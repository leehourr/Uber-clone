import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { FlatList } from "react-native";
import { Icon } from "@rneui/base/dist";

const data = [
  {
    id: 123,
    icon: "home",
    location: "Home",
    destination: "Veng sreng, Steung mean chey 3, Khan mean chey , Phnom penh",
  },
  {
    id: 456,
    icon: "briefcase",
    location: "Work",
    destination: "sen sok, phnom penh",
  },
];
const NavFavourite = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => (
        <View style={{ height: 1 }} className="bg-gray-200" />
      )}
      renderItem={({ item: { location, destination, icon } }) => (
        <TouchableOpacity className="flex-row items-center p-5">
          <View className="mr-4 rounded-full bg-gray-300 p-3">
            <Icon name={icon} type="ionicon" color="white" size={18} />
          </View>
          <View>
            <Text className="font-semibold text-lg">{location}</Text>
            <Text className="text-gray-500">{destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavourite;
