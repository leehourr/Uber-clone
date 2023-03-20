import { View, Text } from "react-native";
import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { selectDestination, selectOrigin } from "../store/navSlice";
import MapView, { Marker } from "react-native-maps";
import { GOOGLE_MAPS_APIKEY } from "@env";
import MapViewDirections from "react-native-maps-directions";

const Map = () => {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  //   console.log(origin.description);
  //   console.log(destination.description);
  const mapRef = useRef();
  useEffect(() => {
    if (!origin || !destination) return;

    mapRef?.current?.fitToSuppliedMarkers(["origin", "destination"], {
      animated: true,
      edgePadding: { top: 50, right: 50, buttom: 50, left: 50 },
    });
  }, [origin, destination]);

  return (
    <MapView
      ref={mapRef}
      initialRegion={{
        latitude: origin.location.lat,
        longitude: origin.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
      onMapReady={() => {
        mapRef?.current?.fitToSuppliedMarkers(["origin", "destination"], {
          edgePadding: { top: 50, right: 50, buttom: 50, left: 50 },
        });
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
      {origin && destination && (
        <MapViewDirections
          origin={origin.description}
          destination={destination.description}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={3}
          strokeColor="black"
        />
      )}
    </MapView>
  );
};

export default Map;
