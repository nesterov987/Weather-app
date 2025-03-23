import React from "react";
import { Text, View, StyleSheet } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { Colors } from "@/constants/Colors";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { IWeather } from "@/types/weather-types";

export const HeaderHome = () => {
  const currentWeather: IWeather[] = useSelector(
    (state: RootState) => state.storeWeather.currentWeather
  );

  return (
    <View style={style.rootContainer}>
      <View style={style.locationContainer}>
        <FontAwesome6 name="location-dot" size={24} color="white" />
        <Text style={style.firstTxt}>{currentWeather[0].name}</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  firstTxt: {
    fontSize: 20,
    fontWeight: 800,
    lineHeight: 21.48,
    color: Colors.common.white,
    marginLeft: 16,
    fontFamily: "Rubik"
  },
  locationContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  rootContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 27
  }
});
