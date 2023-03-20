import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useNavigation } from "@react-navigation/native";
import { store } from "../store/store";
import { setDestination } from "../store/navSlice";

const NavigateCard = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="bg-white flex-1">
      <Text className="text-center py-5 text-xl">Good Morning, Lee Hour</Text>
      <View className="border-t border-gray-200 flex-shrink">
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
      </View>
    </SafeAreaView>
  );
};

export default NavigateCard;
