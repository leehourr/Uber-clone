import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useNavigation } from "@react-navigation/native";
import { store } from "../store/store";
import { setDestination } from "../store/navSlice";
import NavFavourite from "./NavFavourite";
import { Icon } from "@rneui/themed";

const NavigateCard = () => {
  const navigation = useNavigation();
  return (
    <ScrollView className="bg-white ">
      <Text className="text-center py-5 text-xl">Good Morning, Lee Hour</Text>
      <View className="border-t flex-1 border-gray-200">
        <View onT>
          <GooglePlacesAutocomplete
            placeholder="Where to?"
            styles={{
              container: {
                backgroundColor: "White",
                paddingTop: 20,
                flex: 0,
              },
              textInput: {
                backgroundColor: "#DDDDDF",
                fontSize: 18,
              },
              textInputContainer: {
                paddingHorizontal: 20,
                paddingBottom: 0,
              },
            }}
            fetchDetails={true}
            returnKeyType={"search"}
            minLength={2}
            onPress={(data, details = null) => {
              store.dispatch(
                setDestination({
                  location: details.geometry.location,
                  description: data.description,
                })
              );
              navigation.navigate("RideOptionsCard");
            }}
            enablePoweredByContainer={false}
            query={{ key: GOOGLE_MAPS_APIKEY, language: "en" }}
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}
          />
        </View>
        <NavFavourite />
      </View>
      <View className="flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100">
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("RideOptionsCard");
          }}
          className="flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full"
        >
          <Icon name="car" type="font-awsome" color="white" size={16} />
          <Text className="text-white text-center">Rides</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex flex-row justify-between w-24 px-4 py-3 rounded-full">
          <Icon
            name="fast-food-outline"
            type="ionicon"
            color="black"
            size={16}
          />
          <Text className="text-center"> Eats</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default NavigateCard;
