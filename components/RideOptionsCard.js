import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import React, { useState } from "react";
import { Icon } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectTravelTimeIndo } from "../store/navSlice";
// import Intl from "intl";

const data = [
  {
    id: "Uber-x-123",
    title: "UberX",
    multiplier: 1,
    image: "https://links.papareact.com/3pn",
  },
  {
    id: "Uber-XL-456",
    title: "Uber XL",
    multiplier: 1.2,
    image: "https://links.papareact.com/5w8",
  },
  {
    id: "Uber-LUX-789",
    title: "Uber LUX",
    multiplier: 1.75,
    image: "https://links.papareact.com/7pf",
  },
];

const rate = 1.2;

const RideOptionsCard = () => {
  const navigate = useNavigation();
  const [selected, setSelected] = useState(null);
  const travelTimeInfo = useSelector(selectTravelTimeIndo);

  return (
    <SafeAreaView className="bg-white flat-grow pb-3 h-full">
      <View>
        <TouchableOpacity
          onPress={() => {
            navigate.navigate("NavigateCard");
          }}
          className="absolute top-3 left-5 z-50 p-3 rounded-full"
        >
          <Icon name="chevron-left" type="fontawesome" />
        </TouchableOpacity>
        <Text className="text-center py-5 text-xl">
          Select a Ride - {travelTimeInfo?.distance.text}
        </Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { id, title, multiplier, image }, item }) => (
          <TouchableOpacity
            onPress={() => setSelected(item)}
            className={`${
              id === selected?.id && "bg-gray-200"
            } flex-row justify-between items-center px-10`}
          >
            <Image
              style={{ width: 100, height: 100, resizeMode: "contain" }}
              source={{ uri: image }}
            />
            <View className="ml-6">
              <Text className="text-xl font-semibold">{title}</Text>
              <Text>{travelTimeInfo?.duration.text} Travel time</Text>
            </View>
            <Text className="text-xl">
              {new Intl.NumberFormat("kh-KH", {
                style: "currency",
                currency: "KHR",
              }).format(
                Math.ceil(
                  Math.trunc(
                    ((travelTimeInfo.duration.value / 60) * 500 +
                      (travelTimeInfo.distance.value / 1000) * 1000) *
                      rate *
                      multiplier
                  )
                )
              )}
            </Text>
          </TouchableOpacity>
        )}
      />
      <View>
        <TouchableOpacity
          disable={!selected}
          className={`${!selected ? "bg-gray-300" : "bg-black"} py-3 m-3`}
        >
          <Text className="text-center text-white text-xl">
            Choose {selected?.title}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RideOptionsCard;
