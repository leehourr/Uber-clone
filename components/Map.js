import { View, Text } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { selectOrigin } from "../store/navSlice";
import MapView, { Marker } from "react-native-maps";

const Map = () => {
  const origin = useSelector(selectOrigin);
  console.log(origin.location);
  return (
    <MapView
      initialRegion={{
        latitude: origin.location.lat,
        longitude: origin.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
      mapType="mutedStandard"
      className="flex-1"
    >
      {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
          }}
          title="Origin"
          description={origin.description}
          identifier="origin"
        />
      )}
    </MapView>
  );
};

export default Map;
