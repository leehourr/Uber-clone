import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React from "react";

const data = [
  {
    id: "123",
    title: "Get a ride",
    image: "https://links. .papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: "456",
    title: "Order food",
    image: "https://links.papareact. com/28w",
    screen: "EatsScreen",
  },
];

const navOptions = () => {
  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        <TouchableOpacity className="p-2 pl-5 pb-8 pt-4  bg-gray-200">
          <View>
            <Image
              style={{ width: 1200, height: 120, resizeMode: "contain" }}
              source={{ uri: item.image }}
            />
            <Text className="mt-2 text-lg font-semibold">{item.titq}</Text>
          </View>
        </TouchableOpacity>;
      }}
    />
  );
};

export default navOptions;
