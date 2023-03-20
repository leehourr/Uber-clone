import { View, Text } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { selectOrigin } from "../store/navSlice";
import MapView, { Marker } from "react-native-maps";

const MapScreen = () => {
  const origin = useSelector(selectOrigin);
  console.log(origin);
  return (
    <MapView
      className="flex-1"
      mapType="mutedStandard"
      initialRegion={{
        latitude: origin.location.lat,
        longitude: origin.location.lng,
        latitudeDelta: 0.05,
        longtitudeDelta: 0.05,
      }}
    >
      {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin.location.lat,
            longitude: location.lng,
          }}
          title="Origin"
          description={origin.description}
          identifier="origin"
        />
      )}
    </MapView>
  );
};

export default MapScreen;
